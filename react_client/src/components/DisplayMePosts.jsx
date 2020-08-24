import React from 'react';
import Context from './Context';


function DisplayMePosts({posts}){
    return(
        <Context.Consumer>
            {(AuthData)=>{
                return(
                    <div>
                    {
                        (posts !== null) ?
                        posts.map((post,index)=>{
                            return (
                                <div key={post.id}>
                                    <h4>{AuthData.username}</h4>
                                    <p>{post.content}</p>
                                    <small>{post.post_time}</small>
                                </div>
                            )
                        }) : 'no posts'
                    }
                </div>
                )
            }}
        </Context.Consumer>
    );
}


export default DisplayMePosts;