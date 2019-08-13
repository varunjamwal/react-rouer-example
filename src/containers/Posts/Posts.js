import React,{Component} from 'react'
import Axios from '../../axios'
import Post from '../../components/Post/Post'
import Styles from './Posts.module.css'
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
class Posts extends Component
{
    state={
        posts: [],

    }
    componentDidMount(){
        Axios.get('/posts')
        .then(response => {
            const posts=response.data.slice(0,4);
            const updatedPosts = posts.map(post=> {
                return{
                    ...post,
                    author : 'Varun' 
                }
            })
            this.setState({posts: updatedPosts});
            //console.log(response);
        });
    }
    postSelectedHandler = (id) =>{
        //this.setState({postSelectedId : id})
        this.props.history.push({pathname : '/posts/' + id});
}
    render(){
        const posts = this.state.posts.map(post=>{
            return ( 
           // <Link to={'/' + post.id}  key={post.id} >
            <Post
            key={post.id}
            title={post.title} 
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}/> 
            //</Link>
            )

        })
        return(
            <div>
            <section className={Styles.Posts}>
                    {posts}
                </section>
                <Route path = {this.props.match.url + '/:id'} exact component = {FullPost} />
                </div>
        );
    }
}

export default Posts;