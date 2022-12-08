import { useState } from "react";
import styles from "./Shop.module.css";
import {fetcher,fetcher1} from "../../fetch/";
import { useRouter } from 'next/router'
import useSWR from "swr";
import Image from "next/image";
export default function Shop() {
	const router=useRouter()

	const { data, error } = useSWR("products/", fetcher);
	console.log(data)
	if (!data) return "I am loading"
	if (error) return "there is error"
	// const [fields, setFields] = useState({
	// 	email: "",
	// 	password: "",
	// fetch("http://127.0.0.1:8000/api/products", {
	// 	method: 'GET',
	// })
	// 	.then((res) => res.json())
 // .then((data) => console.log(data))
	// 	.catch((error) => {
	// 		console.error("Error:", error);
	// 	});
// });
	return (
		<><><div className={styles.Nav}>
			<div className={styles.NavbarContainer}>
				<div className={styles.NavLogo}>
					<Link href = "/">Luther Marketplace</Link>
				</div>
			  <h1 className={styles.menufonts}><Link href = "\shop">Explore</Link></h1>
			  <h1 className={styles.menufonts}><Link href = "\shop">Near Me</Link></h1>
			  <h1 className={styles.menufonts}><Link href = "\shop">What's New?</Link></h1>
			  <h1 className={styles.signin}><Link href = "\login">Sign-in</Link></h1>
				<h1 className={styles.menufonts}><button className={styles.sellbtn}><Link href = "http://10.28.164.119:8000/admin/products/product/add/" target="_blank">Sell my items</Link></button></h1>
			</div>
		</div>
		</><div className={styles.headerimagecontainer}>
				<div className={styles.btns}>
					<button className={styles.btn}>Discover</button>
					<button className={styles.btn}>Furniture</button>
					<button className={styles.btn}>Electronics</button>
					<button className={styles.btn}>Books</button>
					<button className={styles.btn}>Appliances</button>
					<button className={styles.btn}>Kitchen</button>
					<button className={styles.btn}>Decor</button>
					<button className={styles.btn}>Clothing</button>
				</div>
				<div className={styles.textheader}>
					<h1 className={styles.parentheadtext}>Find out what the <br></br>community is selling</h1>
					<h3 className={styles.subheadtext}>Millions of people trust Luther Marketplace everyday<br></br>Explore and get the goods you need for cheap</h3>
				</div>
				<div className={styles.searchbtns}>
					<form method="get" action="">
						<input className={styles.btn} type="text" placeholder="Search" required></input>
					</form>
				</div>
			</div>
			<div className={styles.dropdown}>
				<button className={styles.dropbtn}>Filters</button>
				<div className={styles.dropdowncontent}>
					<Link href="#">Condition: New to Old</Link>
					<Link href="#">Price Low to High</Link>
					<Link href="#">Price High to Low</Link>
				</div>
			</div>
			<div className={styles.dropdown2}>
				<button className={styles.dropbtn2}>Popular</button>
				<div className={styles.dropdowncontent2}>
					<Link href="#">High to Low</Link>
					<Link href="#">Low to High</Link>
				</div>
			</div>
			<div>
				<div className={styles.imagegrid}>
					{data.map((product) => (
						<div key={product.id}>
							<Image
								src={`${product.product_picture}`}
								width={500}
								height={500} className={styles.imageformat}/>
							<div className={styles.productlayer}>
								<p className = {styles.productdescription}>{product.product_description}</p>
								<p className = {styles.condbtn}><h1 className = {styles.condbtntxt}>{product.product_condition}</h1></p>
							    <p className = {styles.pricebtn}>${product.product_price}</p>
							</div>
							
						</div>
					))}
				</div>
			</div></>
			
	)
}
