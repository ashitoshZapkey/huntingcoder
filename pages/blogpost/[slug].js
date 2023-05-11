import React from 'react';
import {useRouter} from 'next/router';
import styles from '@/styles/BlogPost.module.css'
import Link from 'next/link'

// Step 1: find the file from the slug
// Step 2: and populate then inside the page

const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return <div className={styles.Container}>
      <div className={styles.main}>
        <h1 className={styles.title}>{slug}</h1>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime non nesciunt, error modi obcaecati vel laboriosam aperiam laborum facilis nostrum. Autem aperiam labore, laborum quisquam maxime excepturi mollitia provident quia error soluta esse est possimus iusto quidem ab pariatur voluptatum, animi velit! Cumque, natus aperiam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere non cumque distinctio, alias porro corporis ullam libero nulla magni a corrupti assumenda rerum sapiente necessitatibus? Velit distinctio sapiente libero impedit! Consequatur impedit nobis at facere, cumque, neque sapiente minima ullam nisi aspernatur facilis perspiciatis.
        </div>
      </div>
  </div>;
}

export default slug