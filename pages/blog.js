import React,{useEffect, useState} from 'react';
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'

//step 1 : collect all file from blogdata directory
//step 2 :Itrate through then and display them


const Blog = () =>{
    const [blogs, setblogs] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/api/blogs").then((a)=>{
        return a.json();
      }).then((parsed)=>{
        setblogs(parsed);
      });
    },[])
    
    return <>
    <main className={styles.main}><div className="blogs">
    {
        blogs.map((blogItem)=>{
            return <div className={styles.blogItem} key={blogItem.slug}>
            <Link href={`/blogpost/${blogItem.slug}`}>
                <h2>{blogItem.title}</h2>
            </Link>
            <p>{blogItem.content.substr(0,200)}...</p>
        </div>
        })
    }
  </div>
  </main></>;
};

export default Blog;