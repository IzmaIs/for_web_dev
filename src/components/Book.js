import React from 'react';

const Book = (props) => {
    return (
        <div className='book-read'>
            <h1>{props.title}</h1>
            <span>{props.text}</span>
        </div>
    );
};

export default Book;