
import React from 'react';
import NavBar from '../navBar/NavBar';
import Products from '../../store/products/Products';
import SideBar from '../sideBar/sideBar';
import style from "./landingPage.module.css"
import Footer from '../footer/Footer';


const  LandingPage = () =>{

    return(
        <>

            <div>
            <NavBar/>
            </div>
            <div className={style.sideBarProducts}>
            <SideBar/>
            <Products/>
            </div>
            <div>
            <Footer/>         
            </div>
        
        </>
    )
    
}
export default LandingPage;