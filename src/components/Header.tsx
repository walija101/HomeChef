import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import {useSession} from 'next-auth/react'

function Header() {
    const {data: session} = useSession();
    const user = session && session.user;

    
  return (
    <div className= {styles.header}>
        <nav className= {styles.first}>
            <Link href="/Home">HomeChef</Link>

        </nav>
        <nav className= {styles.second}>
           
        </nav>
    </div>
  )
}

export default Header