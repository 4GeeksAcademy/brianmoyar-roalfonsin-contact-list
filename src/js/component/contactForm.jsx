import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ContactForm(){

    const [contactForm, setContactForm] = useState(
        {
            name: '',
            address: '',
            phone: '',
            email: ''}
    );

    function inputOnChange(event){
        setContactForm({
            ...contactForm,
            [event.target.name]: event.target.value
        });
    }
    console.log(contactForm);

    const labelClasses = "form-label fw-bold w-100 text-start ms-1";

    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label className={labelClasses}>Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" name="name" onChange={inputOnChange}/>
                </div>
                <div className="mb-3">
                    <label className={labelClasses}>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={inputOnChange}/>
                </div>
                <div className="mb-3">
                    <label className={labelClasses}>Phone</label>
                    <input type="text" className="form-control" placeholder="Enter phone" name="phone" onChange={inputOnChange}/>
                </div>
                <div className="mb-3">
                    <label className={labelClasses}>Address</label>
                    <input type="text" className="form-control" placeholder="Enter address" name="address" onChange={inputOnChange}/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Save</button>
            </form>
            <Link to={"/"} className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" style={{float: "left"}}>
                or get back to contacts
            </Link>
        </div>
    );
}

export default ContactForm;