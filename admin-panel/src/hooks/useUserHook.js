import {create} from 'zustand';
import toast from 'react-hot-toast';
import axios from '../lib/axios';


export const useUserHook = create((set ,get) => ({
    user: null,
    login: async (email, password) => {
		

		try {
			const res = await axios.post("/login", { email, password });

			set({ user: res.data});
		} catch (error) {
			toast.error(error.response.data.message || "An error occurred");
		}
	}
}));
    
