
import React from "react";
import "./style.css";

const NavBar = () => {
    return(
<nav className="px-8 pt-2 shadow-md">
     <div class="-mb-px flex justify-left">
         <a className=" text-white no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" href="/">
             Saved searches
         </a>
         <a className="no-underline text-gray-600 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="/">
             Current search
         </a>
     </div>
</nav>
)
}

export default NavBar;