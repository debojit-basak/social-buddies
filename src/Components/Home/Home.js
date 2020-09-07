import React, { useState, useEffect } from 'react';
import Post from '../Posts/Post';
const Home = () => {
    const [post,setPost]= useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    } ,[]);
    return ( 
         <div className='post' >
            {
                post.map(x => <Post key={x.id} post={x}></Post> )
            }
        </div>
    );
};

export default Home;