import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Groupe.scss";
import { useParams } from "react-router-dom";

function Groupe() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:4200/api/post/${id}`).then((data) => {
            console.log(data.data);
            setPost(data?.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!post) {
        return (
            <div>
                <span>LOADING</span>
            </div>
        );
    }

    return (
        <div>
            <h1>{post.name}</h1>
            <h2>{post.genre}</h2>
            <p>{post.description}</p>
            <h3>Membres du groupe :</h3>
            <div>
                {post.members?.map((member) => {
                    return (
                        <div key={member}>
                            <ul>
                                <li>{member}</li>
                            </ul>
                        </div>
                    );
                })}
            </div>
            <h4>Discographie</h4>
            <div>
                {post.albums?.map((album) => {
                    return (
                        <div key={album}>
                            <ul>
                                <li>{album}</li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Groupe;
