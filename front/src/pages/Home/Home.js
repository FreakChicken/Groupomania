import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import "./Home.scss";

function Home() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4200/api/post").then((data) => {
            console.log(data.data);
            setPost(data?.data);
        });
    }, []);
    return (
        <div className="page_layout">
            <h1>Liste des groupes</h1>
            <ul className="card_list">
                {post.map(({ _id, name, genre }) => {
                    return (
                        <Link
                            to={`/post/${_id}`}
                            className="card_wrapper"
                            key={_id + name + genre}
                        >
                            <li>
                                <Cards name={name} genre={genre} />
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}

export default Home;
