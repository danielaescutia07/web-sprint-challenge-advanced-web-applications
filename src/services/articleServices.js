import axiosWithAuth from "../utils/axiosWithAuth";
import React, { useState } from "react";

const articleService = ()=> {
    const [articles, setArticles] = useState([]);

    axiosWithAuth()
        .get('/api/articles')
        .then(res => {
            setArticles(res.data);
        })
        .catch(err => {
            console.error(err)
        })

    return (
        <div>{articles.map(article => (
            <h3>{articles.headline}</h3>
        ))}</div>
    )
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.