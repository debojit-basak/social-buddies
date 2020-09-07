import React from 'react';
import img from './jh.jpg'

const Comment = (props) => {
    return (
        <div style={{
            display:'flex',
            marginTop:'30px'
            }}>
            <div>
                <img style={{
                    width:'50px', 
                    borderRadius:'50%',
                    marginRight:'20px'
                    }} src={img} alt=""/>
            </div>
            <div>
                <p><b>{props.name}</b></p>
                <p>{props.email}</p>
                <p>{props.body}</p>
            </div>
        </div>
    );
};

export default Comment;