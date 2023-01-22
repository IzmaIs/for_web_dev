import React from 'react';
import {NavLink} from "react-router-dom";
import {books} from "./books";

const BooksInHeader = () => {
    return (
        <ul>
            {books.map(i => (
                <NavLink key={i.id} to={`book/${i.id}`}><li >{i.title}</li></NavLink>
            ))}
        </ul>
    );
};

export default BooksInHeader;