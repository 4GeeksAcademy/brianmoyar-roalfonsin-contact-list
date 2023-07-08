import React from "react";
import "../../styles/home.css";

import ContactCard from "../component/contactCard.jsx";
import ContactForm from "../component/contactForm.jsx";

export const Home = () => (
	<div className="text-center m-4">
		<ul className="list-group">
			<ContactCard/>
			<ContactCard/>
			<ContactCard/>
		</ul>
	</div>
);
