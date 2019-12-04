
import React from "react";
import "./style.css";

const NavBar = () => {
    return(
<nav className="pl-20 px-8 pt-2 shadow-md">
     <div class="-mb-px flex justify-left">
         <a className=" text-black no-underline text-teal-dark border-b-2 border-black uppercase tracking-wide font-bold text-xs py-3 mr-8" href="/">
             Current Search
         </a>
         <a className="no-underline text-gray-600 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="/">
             Saved searches
         </a>
     </div>
</nav>
)
}

export default NavBar;