import { useState } from "react";
import styles from "./Shop.module.css";
import {fetcher} from "../../fetch/";
import { useRouter } from 'next/router'
import useSWR from "swr";
import Image from 'next/image'
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";



export function AddProducts({data}) {
	const router=useRouter()
	// console.log(data)
	const [fields, setFields] = useState({

		product_author: data?data.product_author:'',
		product_name: data?data.product_name:'',
		product_picture: data?data.product_picture:'',
		product_description: data?data.product_description:'',
		product_condition: data?data.product_condition:'',
		product_action: data?data.product_action:'',
		product_price: data?data.product_price:'',
		product_date: data?data.product_date:'',
	});
	const handleChange = (e) => {
	console.log(data)
		if (e.target.name=="product_picture"){
		setFields({
			...fields,
			[e.target.name]: e.target.files[0],
		});
		}
			else{
		setFields({
			...fields,
			[e.target.name]: e.target.value,
		});
			}
	};
	

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(fields)
		let form_data=new FormData();
		form_data.append('product_author',fields.product_author);
		form_data.append('product_name',fields.product_name);
		form_data.append('product_picture',fields.product_picture, fields.product_picture.name);
		form_data.append('product_description',fields.product_description);
		form_data.append('product_condition',fields.product_condition);
		form_data.append('product_action',fields.product_action);
		form_data.append('product_price',fields.product_price);
		form_data.append('product_date',fields.product_date);
		const response = await fetcher("products/", "POST", '',form_data);

		router.push('/shop')
	};

	return (
		<main className={styles.main}>
			<Navbar/>
			<div className={styles.centeralign}>
			<h1 className={styles.listinglabel}>Create new listing</h1>
			<h2 className={styles.imagelistinglabel}>Images of your products</h2>
			<h2 className={styles.sizeparam}>Size must be smaller than 5MB</h2>
			<form className={styles.input_form}>
				<div className={styles.img_select}>
				<input className={styles.fileinput}
					type="file"
					id="picture"
					name="product_picture"
					// value={data?data.product_picture:''}
					required
					onChange={handleChange}
				/>
				</div>
				<label className={styles.authlabel} htmlFor="author">Author *</label>
				<input className={styles.authinput}
					type="text"
					id="author"
					name="product_author"
					required
					onChange={handleChange}
					value={data?data.product_author:fields.product_author}
				/>
				<label className={styles.prodlabel} htmlFor="name">Name *</label>
				<input className={styles.prodinput}
					type="text"
					id="name"
					name="product_name"
					value={data?data.product_name:fields.product_name}
					required
					onChange={handleChange}
				/>
				<label className={styles.prodpricelabel} htmlFor="price">Price *</label>
				<input className={styles.prodprice}
					type="Number"
					id="price"
					name="product_price"
					value={data?data.product_price:fields.product_price}
					required
					onChange={handleChange}
				/>
				<label className={styles.prodcondlabel} htmlFor="condition">Condition *</label>
				<input className={styles.prodcond}
					type="text"
					id="condition"
					name="product_condition"
					required
					value={data?data.product_condition:fields.product_condition}
					onChange={handleChange}
				/>
				<div className={styles.separator}>
				<label className={styles.prodactionlabel} htmlFor="action">Action *</label>
				<input className={styles.prodaction}
					type="text"
					id="action"
					name="product_action"
					value={data?data.product_action:fields.product_action}
					required
					onChange={handleChange}
				/>
				</div>
				<label className={styles.proddesclabel} htmlFor="description">Description *</label>
				<input className={styles.proddesc}
					type="text"
					id="description"
					name="product_description"
					placeholder="Write a few words about your product..."
					value={data?data.product_description:''}
					required
					onChange={handleChange}
				/>
				<label htmlFor="date" className={styles.proddatelabel}>Date *</label>
				<input className={styles.proddate}
					type="date"
					id="date"
					name="product_date"
					value={data?data.product_date:fields.product_date}
					required
					onChange={handleChange}
				/>
				<button className={styles.uploadbtn} type="button" onClick={handleSubmit}>
					Upload Listing
				</button>
			</form>
			</div>
			<Footer/>
		</main>
		
	);
}
