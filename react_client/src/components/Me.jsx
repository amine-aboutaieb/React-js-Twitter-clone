import React, { Component } from 'react';
import Upload from './Upload';
import DisplayMePosts from './DisplayMePosts';

class Me extends React.Component {


    state = {
        posts : null
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4 && xhr.status === 200){
                this.setState({posts : JSON.parse(xhr.response)});
            }
        }
        xhr.open('GET','http://localhost:5500/getMePosts',true);
        xhr.withCredentials = true;
        xhr.send();

    }

    addNewPost = (post)=>{
        let newPosts = this.state.posts;
        newPosts.unshift(post);
        this.setState({
            posts : newPosts
        });
    }
    

    render(){
        return(
            <div>
                <h1>My Page</h1>
                <Upload addNewPost={this.addNewPost} />
                <DisplayMePosts posts={this.state.posts} />
            </div>
        )
    }
}

export default Me;
