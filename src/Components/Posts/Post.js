import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {title,id} = props.post;
    return (
        <div style={{
            color:'black',
            width:'300px',
            margin:'10px',
            padding:'20px',
            borderRadius: '15px',
            background: '#99c9e1',
            boxShadow:  '6px 6px 12px #8bb7cd , -6px -6px 12px #a7dbf5'}} >
            <h1>Title: {title}</h1> <br/>
            <Link style={{color:'white'}} to={`/Details/${id}`}>
            <Button variant="contained" color="primary">
                Read More
            </Button>
            </Link>
        </div>
    );
};

export default Post;