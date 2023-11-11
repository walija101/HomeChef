import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import {useSession} from 'next-auth/react'
import { useEffect, useState } from 'react';

function Header() {
    const {data: session} = useSession();
    const user = session && session.user;

    const [size, setSize] = useState();

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth < 500){
        
      }
    };

    if (window) window.addEventListener('resize', handleSize);
    return () => {window.removeEventListener('resize', handleSize)}
  }, [])
  return (
    <div className= {styles.header}>

        <nav className= {styles.first}>
            <div className= {styles.left}>
              <h1 className= {styles.name}>HomeChef</h1>
            </div>
            <div className={styles.right}>
              {!user ? (
                  // Add on click
                  <>
                    <button>Login</button>
                    <button>Signup</button>
                  </>
              ):
              // Change user to username
              <div>Hello, user!</div>
              }
            </div>
        </nav>

        <nav className= {styles.second}>
          <Link href="/">Home</Link>
          <Link href="/meals">Meals</Link>
          <Link href="/about">About</Link>
          <Link href="/profile">Profile</Link>
        </nav>

    </div>
  )
}

export default Header