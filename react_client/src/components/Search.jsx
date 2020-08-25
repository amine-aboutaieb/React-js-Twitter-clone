import React, { Component } from 'react';
import SearchResults from './SearchResults';

class Search extends Component {

    state={
        users : null
    }

    searchUsers = (e)=>{
        let word = e.target.value;
        if(word.length > 0 && (word.match(/[a-z-0-9]/gi) !== null)){
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState === 4 && xhr.status === 200){
                    let response = JSON.parse(xhr.response);
                    if(response.status){
                        this.setState({users : response.data});
                    }
                }
            }
            xhr.open("GET",`http://localhost:5500/searchUsers/${word}`,true);
            xhr.withCredentials = true;
            xhr.send();
        }else{
            this.setState({users : null});
        }
    }
    focusOutHandler = (e)=>{
        let input = e.target;
        setTimeout(() => {
            input.value = "";
            this.setState({users : null});
        }, 500);
    }

    render() {
        return (
            <div>
                
                <input type="text" onChange={this.searchUsers} autoComplete="off" onBlur={this.focusOutHandler}  />
                {(this.state.users !== null)&&(<SearchResults data={this.state.users} />)}
            </div>
        );
    }
}

export default Search;