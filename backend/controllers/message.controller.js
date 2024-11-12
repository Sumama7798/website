import Conversation from "../models/conversation.model.js" 
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        // getting the requred fields from the req.body and params
        const { message } = req.body;  
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({ // finding the conversation with the two given participents
            participents: { $all: [senderId, receiverId] },
        });
        
        if (!conversation) {
        conversation = await Conversation.create({ // creating a new conversation if it does not exists already
                participents: [senderId, receiverId],
            });
        }

        const newMessage = new Message({ // creating a message
            senderId,
            receiverId,
            message,
        });

        if (newMessage) { // pushing the created message to the conversation
            conversation.messages.push(newMessage._id);
        }
        
        // using promise to save the both conversation and the message to the database at the same time 
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("error in sendMessage controller ",error.message)
        res.status(500).json({error: "internal server error"})
    }
};

export const getMessages = async (req , res) => {
    
    try {
        
        const { id:userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participents: { $all: [ senderId, userToChatId ] }
        }).populate("messages"); // using the populate to get the actual contents of the messages array otherwise it will just give you just the reference

        if (!conversation) return res.status(200).json([]);

        const messages =conversation.messages


        res.status(200).json(messages);

    } catch (error) {
        console.log("error in getMessages controller ",error.message)
        res.status(500).json({error: "internal server error"})   
    }
};