import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.scss";

function Card() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4200/api/post").then((data) => {
            console.log(data);
            setPost(data?.data);
        });
    }, []);

    return (
        <div className="card_container">
            {post.map((item, i) => {
                return (
                    <ul className="card" key={i}>
                        <li>{item?.name}</li>
                        <li>{item.genre}</li>
                    </ul>
                );
            })}
        </div>
    );
}

export default Card;
