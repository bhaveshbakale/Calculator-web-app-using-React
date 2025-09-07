import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
         <nav >
         
         <ul >

         <div class="d-flex flex-row justify-content-evenly">
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/Product'>Product</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
</div>
            </ul>
         
            
        </nav>
        </>
        
    );
}
export default Nav;