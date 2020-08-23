import React from 'react';

class Login extends React.Component{
    state = {
        email : "",
        pwd : ""
    }

    handleInput = (e)=>{
        let name = e.target.name;
        this.setState({
            [name] : e.target.value
        });
    }
    
    login = (e)=>{
        
        e.preventDefault();
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4 && xhr.status === 200){
                let response = JSON.parse(xhr.response);
                if(response.status === 'ok'){
                    this.props.logSuccess(response.data);
                }
                else if(response.status === 'notFound'){
                    alert('Could not find account');
                }
                else if(response.status === 'empty'){
                    alert('All fields must be filled');
                }
            }
        }
        xhr.open('POST','http://localhost:5500/login',true);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Content-type',"application/x-www-form-urlencoded");
        xhr.send(`email=${this.state.email}&pwd=${this.state.pwd }`);
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <form>
                    <input type="email" onChange={this.handleInput} placeholder="Email..." name="email" autoComplete="off"/><br />
                    <input type="password" onChange={this.handleInput} placeholder="Password..." name="pwd" autoComplete="off"/><br />
                    <button onClick={this.login}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;