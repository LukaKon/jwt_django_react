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
