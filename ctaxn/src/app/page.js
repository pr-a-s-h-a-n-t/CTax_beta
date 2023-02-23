import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import NavigationBar from '../pages/components/LandingPage/NavBar/NavigationBar';

const inter = Inter({ subsets: ['latin'] })
// className={styles.main}
export default function Home() {
  return (
    <header >
       <NavigationBar />
    </header>
  )
}
