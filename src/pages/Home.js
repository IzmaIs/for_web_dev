import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {books} from "../components/books";
import Book from "../components/Book";

const Home = () => {
    const {id} = useParams()

    console.log(books.filter(i => i.id === +id))
    const filtredBook = () => books.filter(i => i.id === +id)

    return (
        <div className='main-book'>
            { id ? filtredBook()?.map(i => (
                <Book
                    key={i.id}
                    title={i.title}
                    text={i.text}
                />
            )) : <h1>Выберите книгу</h1>}
        </div>
    );
};

export default Home;