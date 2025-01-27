import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useUserHook = create((set, get) => ({
  user: null,
  login: async (email, password) => {
    try {
      const res = await axios.post("/auth/login", { email, password });

      set({ user: res.data });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred while logging in"
      );
      throw error;
    }
  },

  logout: async () => {
    try {
      await axios.post("/auth/logout");
      set({ user: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred while logging out"
      );
      throw error;
    }
  },

  refreshToken: async () => {
    try {
      const res = await axios.post(
        "/auth/refreshToken",
        {},
        {
          withCredentials: true,
        }
      );
      return res.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while refreshing token"
      );
      throw error;
    }
  },

  storeRefreshToken: async (userId, refreshToken) => {
    try {
      await axios.post(
        "/auth/storeRefreshToken",
        { userId, refreshToken },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while storing refresh token"
      );
      throw error;
    }
  },
}));

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        // Access refreshToken function from Zustand store
        const { refreshToken } = useUserHook.getState();
        await refreshToken();
        // Retry the original request
        return axios.request(error.config);
      } catch (refreshError) {
        console.error("Failed to refresh token, logging out...");
        // Access the logout function and clear user state
        const { logout } = useUserHook.getState();
        await logout();
        toast.error("Session expired. Please log in again.");
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// Axios interceptor for token refresh
// let refreshPromise = null;

// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         if (refreshPromise) {
//           console.log("Waiting for existing refresh...");
//           await refreshPromise;
//           return axios(originalRequest);
//         }

//         console.log("Refreshing token...");
//         refreshPromise = useUserHook.getState().refreshToken();
//         await refreshPromise;
//         refreshPromise = null;

//         // Retry original request with refreshed token
//         return axios({
//           ...originalRequest,
//           headers: {
//             ...originalRequest.headers,
//             Authorization: `Bearer ${useUserHook.getState().user?.accessToken}`,
//           },
//         });
//       } catch (refreshError) {
//         refreshPromise = null;
//         console.error("Refresh failed:", refreshError);
//         useUserHook.getState().logout();
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
