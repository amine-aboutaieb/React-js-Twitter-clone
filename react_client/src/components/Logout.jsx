import React from 'react';
import {Redirect} from 'react-router-dom'; 


class Logout extends React.Component{

    componentDidMount() {

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4 && xhr.status === 200){
                let response = JSON.parse(xhr.response);
                if(response.status){
                    this.props.routeData.history.push('/login');
                    this.props.logout();
                }
            }
        }
        xhr.open('GET','http://localhost:5500/logout',true);
        xhr.withCredentials = true;
        xhr.send();
        
    }
    
    render(){
        return(
            null
        );
    }
}

export default Logout;