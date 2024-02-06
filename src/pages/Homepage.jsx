import React from 'react';
import He from './Home.module.css';
// import Signin from '../../../Signup';
import { Link } from 'react-router-dom';
import Signup from './Signup';

function Homepage() {
  return (
    <div className={He.main}>
        <div className={He.navb}>
            <h1>NETFLIX</h1>
            <div className={He.navb1}>
                <select className={He.sel} name="English" id="cars">
                  <option className={He.op}>English</option>
                  <option className={He.op}>Tamil</option>
                  <option className={He.op}>Arabic</option>
                  <option className={He.op}>Telugu</option>
                </select>
                <Link to='/Login' type='submit' className={He.btn1}>Sign In</Link>
            </div>
        </div>
        <div className={He.cont}>
            <div className={He.cont1}>
               <h1>Unlimited movies, TV shows and more</h1>
               <p>Watch anywhere.Cancel anytime</p>
               <p className={He.p1}>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className={He.cont2}>
                <input type='email' className={He.mail} placeholder='karthick1242004@gmail.com'/>
                <Link to='/Signup' className={He.btn2} type='submit'>Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default Homepage