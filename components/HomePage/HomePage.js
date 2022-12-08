import Link from 'next/link'
import styles from "./HomePage.module.css";
import {fetcher} from "../../fetch/";
import { useRouter } from 'next/router';
import Image from 'next/image'
import Navbar from "../../components/Navbar/Navbar.js";

export default function HomePage() {
  return (
	<><div className={styles.main}>
		<div className={styles.Nav}>
		  <div className={styles.NavbarContainer}>
			  <div className={styles.NavLogo}>
				  <Link href="/">Luther Marketplace</Link>
			  </div>
			  <h1 className={styles.menufonts}><Link href = "\shop">Explore</Link></h1>
			  <h1 className={styles.menufonts}><Link href = "\shop">Near Me</Link></h1>
			  <h1 className={styles.menufonts}><Link href = "\shop">What's New?</Link></h1>
			  <h1 className={styles.signin}><Link href = "\login">Sign-in</Link></h1>
			  <h1 className={styles.sellfonts}><button className={styles.sellbtn}><Link href="/signup" target="_blank">Get Started</Link></button></h1>
		  </div>
	  </div>
	  <div className={styles.midsection}>
	  <div className={styles.lutherbell}></div>
	  <div className={styles.commute}>127<br></br><h1 className={styles.commtxt}>Commuters</h1></div>
	  <div className={styles.sales}>Sales<br></br><h1 className={styles.salestxt}>512,030</h1><h2 className={styles.gains}>+41.3%</h2></div>
	  			<h1 className={styles.luthercomm}>
				  LUTHER COMMUNITY
			 	</h1>
				 <h1 className={styles.lutherstate}>
				  Services that our<br></br> community needs<br></br> most
			 	</h1>
				 <h1 className={styles.getstarted}><button className={styles.starter}><Link href="/login">Login</Link></button></h1>
	  </div>
	  <div className={styles.format}>
	  <div className={styles.backlayerimage}>
	  <div className={styles.imglayer2}>
	  </div>
	  <Link className={styles.linklayer1} href="/login">
			RideShare
	  </Link>
	  </div>
	  <div className={styles.backlayerimage2}>
	  <div className={styles.imglayer}>
	  </div>
	  <Link className={styles.linklayer2} href="/shop">
			Shop 
	  </Link>
	  </div>
	  </div>
</div></>
  )
}
