import { NavLink } from "react-router-dom";


const Navbar = () => {
 return (
   <nav className="bg-black p-4 " >
     <NavLink
       to="/"
       className={({ isActive }) =>
         isActive ? "text-red-500 px-4" : "text-white px-4"
       }
     >
       Card
     </NavLink>
     <NavLink
       to="/about"
       className={({ isActive }) =>
         isActive ? "text-red-500 px-4" : "text-white px-4"
       }
     >
       
     </NavLink >

 <NavLink
       to="/services"
       className={({ isActive }) =>
         isActive ? "text-red-500 px-4" : "text-white px-4"
       }
     >
       Services 
     </NavLink >
     <NavLink  to="/contact"
     className={({isActive})=>
    isActive ?"text-red-500 px-4": "text-white px-4"}
     >Contacts

     </NavLink>

            
   </nav>
 );
};


export default Navbar;