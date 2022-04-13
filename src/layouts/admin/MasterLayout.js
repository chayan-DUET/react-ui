import React from "react";
import '../../assets/admin/css/styles.css'
import '../../assets/admin/js/scripts';
import Footer from "./Footer";
import Navebar from './Navbar';
import Sidebar from "./Sidebar";
const MasterLayout = () =>{
    return (
        <div className="sb-nav-fixed">
            <Navebar/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div> 
                <div id="layoutSidenav_content">
                    <main>
                        hi
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default MasterLayout;