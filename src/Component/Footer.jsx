import React from 'react'
import {FaWhatsapp} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { Link } from 'react-router-dom' ;


function Footer() {
  return (
    <div className='bg-purple-500 p-3 '>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pl-20 items-center justify-center footer">
            <div className='p-3'>
                <h4 className='text-white'>J24 Stores</h4>
                <p>... shop with us</p>
            {/* <div>Quick Links</div> */}
            </div>
        <div className='p-3'>
            <h4 className='text-white'>Quick Links</h4>
            <ul>
                <li><Link to="/">Home</Link ></li>
                <li><Link to="">About</Link ></li>
                <li><Link to="/Products">Products</Link ></li>
                <li><Link to="">Contact</Link ></li>
                <li><Link to="">FAQ</Link ></li>
            </ul>
        </div>
<div className='p-3'>
    <h4 className='text-white pb-3'>Social Handles</h4>
    <ul className='flex flex-wrap justify-start items-center gap-3'>
    <li><Link to=""><FaWhatsapp/></Link></li>
    <li><Link to=""><FaFacebookF/></Link></li>
    <li><Link to=""><FaTwitter/></Link></li>
    <li><Link to=""><FaInstagram/></Link></li>
    </ul>
  
</div>
</div>
        <div className="p-3 text-center border-t-2 border-black capitaliz">
            Team J24 | &copy; All rights reserved
        </div>
    </div>
  )
}

export default Footer;