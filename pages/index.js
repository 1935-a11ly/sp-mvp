import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from '../components/HomePage/HomePage.js'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LutherMarketplace</title>
        <meta name="description" content="Luther Marketplace website" />
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
    
      <main className={styles.main}>
	  <HomePage />
    
      </main>
      
      <div className={styles.footer}>
          <div className={styles.NavLogo}>
				      <Link href="/">Luther Marketplace</Link>
			    </div>
          <div className={styles.footercontents}>
          <h5>
              <Link href ="/copyright"> 
	               Copyright Notice
              </Link> 
          </h5>
          <h5>
              <Link href ="/privacypolicy"> 
	               Privacy Policy
              </Link> 
          </h5>
          <h5>
              <Link href ="/terms"> 
	               Terms of Use
              </Link> 
          </h5>
          </div>
      </div>
      </div>
    
  )
}
