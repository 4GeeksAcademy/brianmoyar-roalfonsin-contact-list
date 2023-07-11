import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/home.css";

import ContactCard from "../component/contactCard.jsx";
import ContactForm from "../component/contactForm.jsx";

export const Home = () => { 
	const listaDeContactos = useSelector((store) => {
		return store.contactos;
	})

	console.log(listaDeContactos);

	return (
	<div className="container">
		
		<div className="row">
			<div className="col">
				<button type="button" className="btn btn-primary m-3 float-end">
					<Link className="text-light text-decoration-none" to={"/newcontact"}>Add new contact</Link>
				</button>
			</div>
		</div>
		
		<div className="row">
			<ul className="list-group">
				{listaDeContactos.map(elemento => {
					return <ContactCard info={elemento}/>
				})}
			</ul>
		</div>
		
	</div>
);}
