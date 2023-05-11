import React from 'react';
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'

//step 1 : collect all file from blogdata directory
//step 2 :Itrate through then and display them


const Blog = () =>{
    return <>
    <main className={styles.main}><div className="blogs">
    <div className={styles.blogItem}>
        <Link href="/blogpost/lern-javascript">
            <h2>How to learn javascript 2023</h2>
        </Link>
        <p>Javascript used to design logic for website </p>
    </div>
  </div>
  </main></>;
};

export default Blog;