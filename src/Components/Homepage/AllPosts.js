import React from "react";
import Notifications from './Notifications';
//import PostCard from "../Layout/PostCard";
import PostSummary from '../Posts/PostSummary';
// import { Switch, Route, useRouteMatch } from "react-router-dom";
// import axios from 'axios';

const AllPosts = () => {
    // const [post, setPost] = useState([]);
    // let match = useRouteMatch();

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => {
    //             setPost(response.data);
    //         });
    // }, []); // empty array to stop loading axios and run only once

    // const removeHandler = (id) => { // identify ID and passing into this function
    //     console.log(id);

    //     axios.delete('https://jsonplaceholder.typicode.com/posts' + id)
    //         .then(() => {
    //             return axios.get('https://jsonplaceholder.typicode.com/posts');// retun a new post array after deleting the post
    //         })
    //         .then(response => {
    //             setPost(response.data);
    //         });

    // };

    // const PostList = post.map((p) => { // getting data from axios
    //     return (
    //         <PostCard
    //             key={p.id}
    //             title={p.title}
    //             desc={p.body}
    //             link={`${match.url}/${p.id}`}
    //         // remove={() => removeHandler(p.id)}
    //         />
    //     );
    // });

    return (
        <div>
            <Notifications />
            <PostSummary />
            <PostSummary />
            <PostSummary />
            {/* <Switch>
                <Route path="/post/:postId">
                    <AllPosts />
                </Route>
                <Route path={match.path}>
                    <div>
                        <h2 style={{ margin: "20px" }}>Blog Posts</h2>
                        {PostList}
                    </div>
                </Route>
            </Switch> */}
        </div>
    );
}


export default AllPosts;