export * from '../Shop/AddProducts.js';
import styles from "./Navbar.module.css";

import { useRouter } from 'next/router';
import useSWR from "swr";
import Link from 'next/link';

 

export default function Privacypolicy() {
	const router=useRouter()
	return (
	<>
		<div className={styles.Nav}>
			<div className={styles.NavbarContainer}>
				<div className={styles.NavLogo}>
					<Link href = "/">Luther Marketplace</Link>
				</div>
				<h1 className={styles.menufonts}><Link href = "\shop">Explore</Link></h1>
			  <h1 className={styles.menufonts}><Link href = "\shop">Near Me</Link></h1>
			  <h1 className={styles.menufonts}><Link href = "\shop">What's New?</Link></h1>
			  <h1 className={styles.signin}><Link href = "\signin">Sign-in</Link></h1>
				<h1 className={styles.menufonts}><button className={styles.sellbtn}><Link href = "http://10.28.164.119:8000/admin/products/product/add/" target="_blank">Sell my items</Link></button></h1>
			</div>
		</div>
		</>
	);
}