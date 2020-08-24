import React, { Component } from 'react';

class Upload extends Component {

    state={
        post : ""
    }

    handleTextArea = (e)=>{
        this.setState({
            post : e.target.value
        });
    }

    post = ()=>{
        if(this.state.post.length >= 10){
            if(this.state.post.length > 100){
                alert("Posts can't be more than 100 characters long");
            }else{
                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = ()=>{
                    if(xhr.readyState === 4 && xhr.status === 200){
                        let response = JSON.parse(xhr.response);
                        if(response.status){
                            console.log(response);
                            this.props.addNewPost(response.post[0]);
                            alert('Post added successfully');
                        }
                    }
                }
                xhr.open('POST','http://localhost:5500/post',true);
                xhr.withCredentials = true;
                xhr.setRequestHeader('Content-type',"application/x-www-form-urlencoded");
                xhr.send(`post=${this.state.post}`);
            }
        }else{
            alert("Posts must be at least 10 characters long");
        } 
    }

    render() {
        return (
            <div>
                <textarea name="textArea" cols="50" rows="10" onChange={this.handleTextArea}></textarea>
                <button onClick={this.post}>Post</button>
            </div>
        );
    }
}

export default Upload;