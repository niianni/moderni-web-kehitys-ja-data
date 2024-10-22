import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

const apiUrl = "https://jsonplaceholder.typicode.com/";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      await axios.get(`${apiUrl}posts`)
        .then((response) => {
          setPosts(response.data);
        });
    };
  
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      await axios.get(`${apiUrl}users`)
        .then((response) => {
          setUsers(response.data);
        });
    };
  
    fetchUsers();
  }, []);

  const getAuthorName = (id) => {
    let user = users.find(user => id === user.id);
    return user.name;
  }

  const postsToDisplay = posts.map(post => {
    return (
      <div key={post.id} className="blogPost">
        <h2>{post.title.toUpperCase()}</h2>
        <p>{post.body}</p>
        <p className="author">{getAuthorName(post.userId)}</p>
      </div>
    )
  })

  return (
    <>
      <h1>Amazing blog</h1>
      <p>
      {postsToDisplay}
      </p>
    </>
  )
}

export default App
