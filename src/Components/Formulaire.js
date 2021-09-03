//import img from "./eje.png";
import React from "react";
import "./Formulaire.css";
import { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap";
export default function Formulaire() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const [role, setRole] = useState("")
    const [pole, setPole] = useState("")
    const [picture, setPicture] = useState("")
    function handleFirstNameChange(e) {
        setFirstname(e.target.value)
    }
    function handlePictureChange(e) {
        setPicture(e.target.value)
    }
    function handlePoleChange(e) {
        setPole(e.target.value)
    }
    function handleRoleChange(e) {
        setRole(e.target.value)
    }
    function handleDateChange(e) {
        setDate(e.target.value)
    }
    function handleLastNameChange(e) {
        setLastname(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handleNumberChange(e) {
        setNumber(e.target.value)
    }
    function handleSubmit() {
        const newUser = {
            first_name: firstname,
            last_name: lastname,
            email: email,
            date_of_birth: date,
            phone_number: number,
            pole: pole,
            role: role,
            

        }
        console.log(newUser)

        fetch('http://localhost:4000', {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }
    return (
        <div className="login-box">
            <div className="loginbox-container">
                <div class="left">
                     <h4>Nom</h4>
                    <input type="text" name="Nom" placeholder="Nom" value={firstname} onChange={handleFirstNameChange} />
                    <h4>Prénom</h4>
                    <input type="text" name="Prenom" placeholder="Prenom" value={lastname} onChange={handleLastNameChange} />
                    <h4>Email</h4>
                    <input type="text" name="email" placeholder="E-mail" value={email} onChange={handleEmailChange} />

                    <h4>Pôle</h4>
                    <input type="text" name="pole" placeholder="Pôle" value={pole} onChange={handlePoleChange} />
                    <h4>Rôle</h4>
                    <input type="text" name="role" placeholder="Rôle" value={role} onChange={handleRoleChange} />
                    <h4>Date de naissance</h4>
                    <input id="date" type="date" placeholder="Date de naissance" value={date} onChange={handleDateChange} />



                    <h4>Numéro</h4>
                    <input
                        type="text"
                        name="Numero de telephone"
                        placeholder="Numero de telephone"
                        value={number} onChange={handleNumberChange}
                        
                    />
                    <h4>Photo</h4>
                    <Form>
                     <Form.Group>
                            <Form.File id="exampleFormControlFile1" value={picture} onChange={handlePictureChange}  />
                        </Form.Group>
                    </Form> 

                    <button className="round-button" onClick={handleSubmit} > Save </button>
                </div>
                <div className="right">
                    <img /*src={img}*/ alt="Avatar" className="image" />
                </div>
            </div>
        </div>
    );
}
