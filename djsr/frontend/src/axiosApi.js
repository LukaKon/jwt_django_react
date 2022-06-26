import axios from "axios";

// export const axiosInstance = axios.create({
//     baseURL: "http://127.0.0.1:8000/api",
//     timeout: 5000,
//     headers: {
//         Authorization: "JWT " + localStorage.getItem("access_token"),
//         "Content-Type": "application/json",
//         accept: "application/json",
//     },
// });
export const axiosInstance = axios.create({
    // baseURL: LOCALHOST,
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem("access_token")
            ? "JWT " + localStorage.getItem("access_token")
            : null,
        "Content-Type": "application/json",
        accept: "application/json",
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response.status === 401 &&
            error.response.statusText === "Unauthorized"
        ) {
            const refresh_token = localStorage.getItem("refresh_token");

            try {
                const response = await axiosInstance.post("/token/refresh/", {
                    refresh: refresh_token,
                });
                localStorage.setItem("access_token", response.data.access);
                localStorage.setItem("refresh_token", response.data.refresh);

                axiosInstance.defaults.headers["Authorization"] =
                    "JWT " + response.data.access;
                originalRequest.headers["Authorization"] =
                    "JWT " + response.data.access;
                return await axiosInstance(originalRequest);
            } catch (err) {
                console.log(err);
            }
        }
        return Promise.reject(error);
    }
);
