// pages/index.js

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPosts = async (page) => {
    const res = await fetch(`/api/posts?page=${page}&limit=5`);
    const data = await res.json();
    setPosts(data.data);
    setTotalPages(data.totalPages);
    setCurrentPage(data.currentPage);
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div>
        <button 
          disabled={currentPage === 1} 
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        
        <span>{currentPage} of {totalPages}</span>
        
        <button 
          disabled={currentPage === totalPages} 
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
