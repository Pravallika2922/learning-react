import React from "react";
import "./css/shopping.css";
import Shopping_Header from "./Shopping_Header";
import Shopping_Footer from "./Shopping_Footer";

function Shopping_Main(){

    return (
        
        <div className="container">
<div className="header"><Shopping_Header/></div>
<div className="main_content">
    <nav className="sidenav">sidenav</nav>
    <article className="main">Main</article>
    <aside className="rightnav">rightnav</aside>
</div>
<div className="footer"><Shopping_Footer/></div>
        </div>
        
    )
}

export default Shopping_Main;