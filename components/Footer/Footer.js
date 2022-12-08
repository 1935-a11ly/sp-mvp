export * from '../Shop/AddProducts.js';
import styles from "./Footer.module.css";

import { useRouter } from 'next/router';
import useSWR from "swr";
import Link from 'next/link';

 

export default function Footer() {
	const router=useRouter()
	return (
	<>
		<div className={styles.main}>
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
		</>
	);
}