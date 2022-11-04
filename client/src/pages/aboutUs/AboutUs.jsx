import React from 'react'
import "./aboutUs.css";
import { FaInstagram } from "react-icons/fa";

export default function AboutUs() {
  return (
    <>
    <div className='aboutUs'>
        <h1>ABOUT US</h1>
        <div className='about-container'>
            <img className='about-image'
                src='https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt=''>
            </img>
            <div className='about-text'>
                <p>We are a bunch of guys who try to solve real world problems with the help of Technology and try learning stuff by implementing it. This website is the product of that process! We enjoyed building this website and hope you enjoy using it.</p><br/>
                <p>Social Media Handles:  </p>
                <ul>
                <li>
                <a href=''><FaInstagram/>Sahil Halgekar</a><br/>
                </li>
                <li>
                <a href=''><FaInstagram/>Navjeet Kohli</a><br/>
                </li>
                <li>
                <a href=''><FaInstagram/>Rahul Patil</a><br/>
                </li>
                <li>
                <a href=''><FaInstagram/>Praveen Jugal</a>
                </li>
                </ul>
            </div>
        </div>
        </div>
    </>
  )
}
