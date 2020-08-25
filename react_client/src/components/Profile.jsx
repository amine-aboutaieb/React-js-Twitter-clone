import React, { Component } from 'react';

class Profile extends Component {

    componentDidMount() {
        this.getProfileData();
    }
    componentDidUpdate(prevProps, prevState) {
        this.getProfileData();
    }
    
    getProfileData = ()=>{
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4 && xhr.status === 200){
                let response = JSON.parse(xhr.response);
                console.log(response);
            }
        }
        xhr.open("GET",`http://localhost:5500/getProfile/${this.props.data.match.params.username}`,true);
        xhr.withCredentials = true;
        xhr.send();
    }
    

    render() {
        
        return (
            <div>
                <h1>Profile {this.props.data.match.params.username}</h1>
            </div>
        );
    }
}

export default Profile;