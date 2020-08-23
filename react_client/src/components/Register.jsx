import React from 'react';
import {Redirect} from 'react-router-dom';

class Register extends React.Component{

    state = {
        fName : "",
        lName : "",
        age : "",
        uName : "",
        email : "",
        pwd : ""
    }

    handleInput = (e)=>{
        let name = e.target.name;
        this.setState({
            [name] : e.target.value
        });
    }
    
    register = (e)=>{
        
        e.preventDefault();
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4 && xhr.status === 200){
                let response = JSON.parse(xhr.response);
                if(response.status === 'ok'){
                    alert('Account created successfully');
                    this.props.history.push('/login');
                }
                else if(response.status === 'exists'){
                    let errors = response.errors;
                    let msg = ((errors.email) ? 'An existing account uses this email. \n' : '') + ((errors.username) ? 'An existing account uses this username' :'');
                    alert(msg);
                }
                else if(response.status === 'empty'){
                    alert('All fields must be filled');
                }
            }
        }
        xhr.open('POST','http://localhost:5500/register',true);
        xhr.setRequestHeader('Content-type',"application/x-www-form-urlencoded");
        xhr.send(`fName=${this.state.fName}&lName=${this.state.lName}&age=${this.state.age}&uName=${this.state.uName}&email=${this.state.email}&pwd=${this.state.pwd }`);
    }

    render(){    
    return(
        <div>
            <h1>Register</h1>
            <form>
                <input type="text" onChange={this.handleInput} placeholder="First Name..." name="fName" autoComplete="off"/><br />
                <input type="text" onChange={this.handleInput} placeholder="Last Name..." name="lName" autoComplete="off"/><br />
                <input type="text" onChange={this.handleInput} placeholder="Age..." name="age" autoComplete="off"/><br />
                <input type="text" onChange={this.handleInput} placeholder="Username..." name="uName" autoComplete="off"/><br />
                <input type="email" onChange={this.handleInput} placeholder="Email..." name="email" autoComplete="off"/><br />
                <input type="password" onChange={this.handleInput} placeholder="Password..." name="pwd" autoComplete="off"/><br />
                <button onClick={this.register}>Register</button>
            </form>
        </div>
    );
    }
}

export default Register;