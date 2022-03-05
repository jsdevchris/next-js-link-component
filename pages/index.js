import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Link href="/"><a>Home  </a></Link>
      <p></p>
      <Link href="/about"><a>Link 1 </a></Link>
      <p></p>
      <Link href="/ninjas/"><a>Link 2 </a></Link>
      <p></p>

       <Link href="/ninjas/">
        
        <a><strong>Click Me I'm a Link!</strong>
</a>
      </Link>
      <Footer />
    </div>
  )
}
