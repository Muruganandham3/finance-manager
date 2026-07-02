import React, { useState } from "react";
import { CiBank } from "react-icons/ci";
import { IoIosArrowDropright } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import Button from "@components/button/Button";
import { NavLink } from "react-router-dom";



const Sidebar = () => {
const [isToggle,setToggle]=useState(false);  

 function changeToggle(){
  setToggle(!isToggle);
 }
  
  
  return (
    <div className={`${isToggle? "w-20 p-1.5":"w-72 p-5"} relative bg-(--primary) text-(-text-primary) h-dvh transition-all duration-300 ease-in-out`}>
      <div className={`${isToggle?"justify-center":"justify-between"} flex  mb-10`}>
        <CiBank className={`${isToggle?"w-8 h-8 ":""} w-10 h-10`} />
        <button onClick={changeToggle}>
          <IoIosArrowDropright className={`${isToggle? "w-6 h-6 -right-3 top-5": "w-7 h-7 top-5 -right-4"} absolute`} />
        </button>
        
      </div>
      <div className="flex flex-col">
        <ul className="flex flex-col gap-3">
          <li>
              <NavLink  to="/dashboard" className={ (props) => `${isToggle ? "justify-center" : "items-center"} flex -col gap-2.5 p-1.5 ${props.isActive ? "bg-(--primary-hover)" :"hover:bg-(--primary-hover)"}` }>
              <IoHomeOutline  className="w-6 h-6"/>
              {!isToggle && <span>Dashboard</span>}
              </NavLink>
          </li>

          <li>
            <NavLink to="/transaction" className={(props)=>`${isToggle?"justify-center":"items-center"} flex gap-2.5 p-1.5 ${props.isActive ? "bg-(--primary-hover)" :"hover:bg-(--primary-hover)"}`}>
                <FaMoneyCheckDollar className="w-6 h-6"/>
                {!isToggle && <span>Transaction</span>}
            </NavLink>
            
          </li>

            {/* <div className={`${isToggle?"justify-center":"items-center"} flex -col gap-2.5 p-1.5 hover:bg-blue-900`}>
              <FaMoneyCheckDollar className="w-6 h-6"/>
              <p className={`${isToggle?"hidden":"block"}`}>Transaction</p>
            </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
