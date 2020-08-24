import React,{Component} from 'react';
import Router from './Router';
import loading from '../load.gif';
import Context from './Context';

class App extends Component {

  state = {
    loged : false,
    loading : true,

    AuthData : {
      email : null,
      username : null
    }
    
  }

  toggleLoading = ()=>{
    this.setState({loading : true});
  }
  componentDidMount() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
      if(xhr.readyState === 4 && xhr.status === 200){
        let response = JSON.parse(xhr.response);
        if(response.status){
          let authData = response.AuthData;
          this.setState({
           AuthData : authData
          });
          this.setState({loged : true});
        }
        this.setState({loading : false});
      }
    }
    xhr.withCredentials = true;
    xhr.open('GET','http://localhost:5500/checkAuth',true);
    xhr.send();
  }

  logSuccess = (obj)=>{
    this.setState({
      loged : true,
      AuthData : obj
    });
  }
  setLoading = ()=>{
    (this.state.loading) ?(this.setState({loading : false})) : this.setState({loading : true});
  }
  logout = ()=>{
    this.setState({
      loged : false,
      AuthData : {
        email : null,
        username : null
      }
    });
  }

  render(){
    return (
      <div className="App">

        <h1>Twitter clone</h1>
        <Context.Provider value={this.state.AuthData}>
        {(this.state.loading)?<img src={loading} id="loading" />:<Router status={this.state.loged} logSuccess={this.logSuccess} setLoading={this.setLoading} logout={this.logout} />}
        </Context.Provider>
      </div>
    );
  }

}

export default App;
