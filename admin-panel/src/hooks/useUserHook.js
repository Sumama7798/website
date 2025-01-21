import {create} from 'zustand';
import toast from 'react-hot-toast';
import axios from '../lib/axios';


export const useUserHook =  create((set ,get) => ({
    user: null,
    login: async (email, password) => {
		

		try {
			const res = await axios.post("/login", { email, password });

			set({ user: res.data});
		} catch (error) {
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	logout: async () => {
		try {
			await axios.post("/logout");
			set({ user: null });
		} catch (error) {
			toast.error(error.res.data.message || "An error occurred");
			
		}
	},



	refreshToken: async () => {
		try {
			const res = await axios.get("/refreshToken" ,{ withCredentials: true });
			return res.data;
		} catch (error) {
			toast.error(error.res.data.message || "An error occurred");
		}
	},

}));
    


// Axios interceptor for token refresh
let refreshPromise = null;

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                if (refreshPromise) {
                    console.log("Waiting for existing refresh...");
                    await refreshPromise;
                    return axios(originalRequest);
                }

                console.log("Refreshing token...");
                refreshPromise = useUserHook.getState().refreshToken();
                await refreshPromise;
                refreshPromise = null;

                // Retry original request with refreshed token
                return axios({
                    ...originalRequest,
                    headers: {
                        ...originalRequest.headers,
                        Authorization: `Bearer ${useUserHook.getState().user?.accessToken}`,
                    },
                });
            } catch (refreshError) {
                refreshPromise = null;
                console.error("Refresh failed:", refreshError);
                useUserHook.getState().logout();
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

