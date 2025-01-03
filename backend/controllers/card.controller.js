import Card from '../models/card.model.js';

export const createCard = async (req, res) => {
    const { image, heading, description ,page,section} = req.body;
    const userId = req.user.id; // Assume `req.user` is set by `authenticate` middleware

    try {
        const newCard = new Card({
            image,
            heading,
            description,
            page,
            section,
            createdBy: userId,
        });

        await newCard.save();

        res.status(201).json({
            message: 'Card created successfully',
            card: newCard,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create card', error: error.message });
    }
};

export const getAllCards = async (req, res) => {
    try {
        const cards = await Card.find().populate('createdBy','name email');
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch cards', error: error.message });
    }
};  