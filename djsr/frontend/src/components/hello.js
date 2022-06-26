import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axiosApi";

export const Hello = () => {
    const [message, setMessage] = useState({ message: "" });

    const getMessage = async () => {
        try {
            const header = localStorage.getItem("access_token");
            console.log("header: ", header);
            const response = await axiosInstance.get("hello");
            console.log("resp in hello: ", response);
            const message = response.data.hello;
            setMessage({ message: message });
            return message;
        } catch (error) {
            console.log("Error: ", JSON.stringify(error, null, 4));
            throw error;
        }
    };

    useEffect(() => {
        const messageData1 = getMessage();
        console.log("messageData1: ", JSON.stringify(messageData1, null, 4));
    }, []);

    return (
        <div>
            <p>{message.message}</p>
        </div>
    );
};
