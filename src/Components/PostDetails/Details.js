import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Button from '@material-ui/core/Button';


const Details = () => {
    const {postId} = useParams();
    const [detail , setDetail] = useState([]);
    useEffect (() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setDetail(data))
    },[]);
    const [comment,setComment] = useState([]);
    useEffect (() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(res => res.json())
        .then(data => {
            setComment(data);
            console.log(data);
        })
    },[]);
    return (
        <div style={{
            margin:'0 20%',
        }}>
            <div style={{
                marginBottom:'50px',
                fontSize:'30px'
            }}>
                <h2>Post ID: {postId}</h2>
                <h3>Title: {detail.title}</h3>
                <p>{detail.body}</p>
                <Link to={`/Home`}><Button variant="contained" color="primary">Back To Home</Button></Link>
            </div> <hr/>
            <div>
            <p>
                {
                comment.map(x => <Comment key={x.id} name={x.name} email={x.email} body={x.body} ></Comment> )
                }
            </p>
            </div>
        </div>
    );
};

export default Details;