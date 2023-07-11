import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { CreateContact } from "./views/createContact";
import EditContact from "./views/editContact";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/newcontact" element={<CreateContact/>}/>
						<Route path="/editcontact" element={<EditContact/>}/>
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
