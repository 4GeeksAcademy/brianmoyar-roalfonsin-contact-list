import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/home.css";

import ContactCard from "../component/contactCard.jsx";
import ContactForm from "../component/contactForm.jsx";

export const Home = () => { 
	const listaDeContactos = useSelector((store) => {
		return store.contactos;
	})

	console.log(listaDeContactos);

	return (
	<div className="text-center m-4">
		<ul className="list-group">
			{listaDeContactos.map(elemento => {
				return <ContactCard info={elemento}/>
			})}
		</ul>
	</div>
);}
