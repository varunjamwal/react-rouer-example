import React, { Component } from 'react';

import Posts from '../../containers/Posts/Posts';
//import NewPost from '../NewPost/NewPost';
//import Axios from 'axios' 
import './Blog.css';
import asyncComponent from  '../../components/hoc/asyncComponent'
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';

const AsyncNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost');        //Lazy-Loading or async load
});

class Blog extends Component {
 
    
  
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact activeClassName="my-active"
                            activeStyle={{color : '#fa923f',textDecoration : 'underline'}}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search : '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
               {/* <Route path  = "/" exact render = {() => <h1>Home</h1>}/> */}
              
                <Switch> 
                    <Route path ="/new-post"  component = {AsyncNewPost} />
                <Route path ="/posts"  component = {Posts} />
                        <Redirect from="/" to= "/posts" />    {/*if used outside switch only to will apply*/}
               </Switch>
               
            </div>
        );
    }
}

export default Blog;