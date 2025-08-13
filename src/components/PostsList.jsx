import { useState } from 'react';
import Modal from './Modal';
import NewPost from "./NewPost"
import Post from "./Post";
import classes from "./PostsList.module.css"

function PostList({isPosting, onStopPosting}) {
    // let modalContent;

    // if (modalIsVisible) {
    //     modalContent = (
    //         <Modal onClose={hideModalHandler}>
    //             <NewPost
    //                 onBodyChange={bodyChangeHandler}
    //                 onAuthorChange={authorChangeHandler} />
    //         </Modal>
    //     );
    // }

    const [posts, setPosts] = useState([]);

    function addPostsHandler(postData) {
        // if you use a previous state to set the new state then a function needs to be used
        // setPosts([postData, ...posts]);
        // react makes sure to update the correct state even if there are multiple pending states
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    // maps takes a function, receiving that item and return value should be mapped

    return ( 
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                        onAddPost={addPostsHandler}
                    />
                </Modal>                
            )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>                
            )}
            {posts.length === 0 && 
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            }
        </>
    );
}

export default PostList;