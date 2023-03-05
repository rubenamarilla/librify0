import React, { useState } from "react";
import axios from "axios";

export const Product = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/product", {
                title,
                price,
                description,
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));

    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="text" onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
};
