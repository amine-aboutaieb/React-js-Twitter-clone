import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Feed from './Feed';
import Me from './Me';
import Error from './Error';

function Router({status,logSuccess}) {
   
    return (
        <BrowserRouter>
            <NavBar status={status} />
            <Switch>
            <Route exact path="/" component={()=>{return (status)?<Feed />:<Login logSuccess={logSuccess} />}} />
            {/* <Route exact path="/" component={(status)?Feed:Login} /> */}
                <Route exact path="/login" render={(props)=>(status)?<Feed />:<Login logSuccess={logSuccess} />} />
                {/* <Route exact path="/login" component={(status)?Feed:Login} /> */}
                <Route exact path="/register" component={(status)?Feed:Register} />
                <Route exact path="/feed" component={()=>{return (!status)?<Login logSuccess={logSuccess} />:<Feed />}} />
                {/* <Route exact path="/feed" component={(!status)?Login:Feed} /> */}
                <Route exact path="/me" component={()=>{return (!status)?<Login logSuccess={logSuccess} />:<Me />}} />
                <Route path="/" render={(props)=><Error msg="Error 404" />} />
            </Switch>
        </BrowserRouter>
    );
    
}

export default Router;