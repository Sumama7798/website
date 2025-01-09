import {create} from 'zustand';
import toast from 'react-hot-toast';
import axios from '../lib/axios';
import { get } from 'mongoose';


export const useCardHook = create((set) => ({
    cards: [],    
    setCards: (cards) => set({ cards }),


    createCard: async (card) => {
        try {
            const response = await axios.post('/createCard', card ,{ withCredentials: true });
            set((prevState) => ({
                cards: [...prevState.cards, response.data]
            }));
            toast.success('Card created successfully');
        } catch (error) {
            toast.error('Failed to create card');
        }
    },
    getAllCards: async () => {
        try {
            const response = await axios.get('/getAllCards', { withCredentials: true });
            set({ cards: response.data });
        } catch (error) {
            toast.error('Failed to fetch cards');
        }
    },

    getCardsByPage: async (page) => {
        try {
            const response = await axios.get(`/page/${page}`, { withCredentials: true });
            set({ cards: response.data }); // Update the cards state with the response.data;
        } catch (error) {
            toast.error('Failed to fetch cards');
        }
    },

    uploadImage: async (fileUrl1, fileUrl2) => {
        try {
            // Ensure you pass the correct URLs for the image upload
            const response = await axios.post('/upload', { fileUrl1, fileUrl2 }, { withCredentials: true });
            return response.data;
        } catch (error) {
            toast.error('Failed to upload image');
            console.error(error);  // Optional: for debugging
        }
    }
}));

