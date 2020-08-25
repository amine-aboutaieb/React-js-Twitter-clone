import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Search from './Search';
import Login from './Login';
import Register from './Register';
import Feed from './Feed';
import Me from './Me';
import Profile from './Profile';
import Logout from './Logout';
import Error from './Error';

function Router({status,logSuccess,setLoading,logout,authdata}) {
   
    return (
        <BrowserRouter>
            <NavBar status={status} />
            <Search />
            <Switch>
                <Route exact path="/" component={(props)=>{return (status)?<Feed />:<Login logSuccess={logSuccess} setLoading={setLoading} />}} />
                {/* <Route exact path="/" component={(status)?Feed:Login} /> */}
                <Route exact path="/login" render={(props)=>(status)?<Feed />:<Login logSuccess={logSuccess} setLoading={setLoading} />}  />
                {/* <Route exact path="/login" component={(status)?Feed:Login} /> */}
                <Route exact path="/register" component={(status)?Feed:Register} />
                <Route exact path="/feed" component={(props)=>{return (!status)?<Login logSuccess={logSuccess} setLoading={setLoading} />:<Feed />}} />
                {/* <Route exact path="/feed" component={(!status)?Login:Feed} /> */}
                <Route exact path="/me" component={()=>{return (!status)?<Login logSuccess={logSuccess} setLoading={setLoading} />:<Me />}} />
                <Route exact path="/logout" component={(props)=>{return (!status)?<Login logSuccess={logSuccess} setLoading={setLoading} />:<Logout logout={logout} routeData={props} />}} />
                <Route exact path="/profile/:username" render={
                    (props)=>{
                        if(props.match.params.username === authdata.username){
                            return <Me />
                        }else{
                            return <Profile data={props} />
                        }
                        
                    }
                } />
                <Route path="/" render={(props)=><Error msg="Error 404" data={props} />} />
            </Switch>
        </BrowserRouter>
    );
    
}

export default Router;