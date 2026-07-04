import { TrendingUp } from 'lucide-react';

import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ReceiptText,
  Wallet,
  Tags,
  PiggyBank,
  Target,
  Receipt,
  ChartCandlestick,
  BarChart3,
  CalendarDays,
  Settings,
} from "lucide-react";

type SidebarProps = {
  isToggle: boolean;
};


const Sidebar = ({ isToggle }: SidebarProps) => {
  return (
    <div className={`${isToggle? "w-20 p-1.5":"w-56 p-5"} relative bg-(--primary) text-(-text-primary) h-full transition-all duration-300 ease-in-out`}>
      <div className={`${isToggle?"justify-center":"justify-between"} flex  mb-10`}>
        <TrendingUp className={`${isToggle?"w-8 h-8 ":""} w-10 h-10`} />
      </div>
      <div className="flex flex-col">
        <ul className="flex flex-col gap-3">
          <li>
              <NavLink  to="/dashboard" className={ (props) => `${isToggle ? "justify-center" : "items-center"} flex -col gap-2.5 p-1.5 ${props.isActive ? "bg-(--primary-hover)" :"hover:bg-(--primary-hover)"}` }>
              <LayoutDashboard  className="s-24"/>
              {!isToggle && <span>Dashboard</span>}
              </NavLink>
          </li>

           <li>
            <NavLink to="/accounts" className={(props)=>`${isToggle?"justify-center":"items-center"} flex gap-2.5 p-1.5 ${props.isActive ? "bg-(--primary-hover)" :"hover:bg-(--primary-hover)"}`}>
                <Wallet className="s-24"/>
                {!isToggle && <span>Accounts</span>}
            </NavLink>
            
          </li>

           <li>
            <NavLink to="/transaction" className={(props)=>`${isToggle?"justify-center":"items-center"} flex gap-2.5 p-1.5 ${props.isActive ? "bg-(--primary-hover)" :"hover:bg-(--primary-hover)"}`}>
                <ReceiptText className="s-24"/>
                {!isToggle && <span>Transaction</span>}
            </NavLink>
            
          </li>

          <li>
            <NavLink to="/budget" className={(props)=>`${isToggle?"justify-center":"items-center"} flex gap-2.5 p-1.5 ${props.isActive ? "bg-(--primary-hover)" :"hover:bg-(--primary-hover)"}`}>
                <PiggyBank className="s-24"/>
                {!isToggle && <span>Budgets</span>}
            </NavLink>
            
          </li>

          <li>
            <NavLink to="/goal" className={(props)=>`${isToggle?"justify-center":"items-center"} flex gap-2.5 p-1.5 ${props.isActive ? "bg-(--primary-hover)" :"hover:bg-(--primary-hover)"}`}>
                <Target className="s-24"/>
                {!isToggle && <span>Goal</span>}
            </NavLink>
            
          </li>

          <li>
            <NavLink to="/investment" className={(props)=>`${isToggle?"justify-center":"items-center"} flex gap-2.5 p-1.5 ${props.isActive ? "bg-(--primary-hover)" :"hover:bg-(--primary-hover)"}`}>
                <ChartCandlestick className="s-24"/>
                {!isToggle && <span>Investment</span>}
            </NavLink>
            
          </li>

          <li>
            <NavLink to="/billPayment" className={(props)=>`${isToggle?"justify-center":"items-center"} flex gap-2.5 p-1.5 ${props.isActive ? "bg-(--primary-hover)" :"hover:bg-(--primary-hover)"}`}>
                <Receipt className="s-24"/>
                {!isToggle && <span>Bill & Payments</span>}
            </NavLink>
            
          </li>
          <li>
            <NavLink to="/report" className={(props)=>`${isToggle?"justify-center":"items-center"} flex gap-2.5 p-1.5 ${props.isActive ? "bg-(--primary-hover)" :"hover:bg-(--primary-hover)"}`}>
                <BarChart3 className="s-24"/>
                {!isToggle && <span>Report</span>}
            </NavLink>
            
          </li>

          <li>
            <NavLink to="/calendar" className={(props)=>`${isToggle?"justify-center":"items-center"} flex gap-2.5 p-1.5 ${props.isActive ? "bg-(--primary-hover)" :"hover:bg-(--primary-hover)"}`}>
                <CalendarDays className="s-24"/>
                {!isToggle && <span>Calendar</span>}
            </NavLink>
            
          </li>

          <li>
            <NavLink to="/category" className={(props)=>`${isToggle?"justify-center":"items-center"} flex gap-2.5 p-1.5 ${props.isActive ? "bg-(--primary-hover)" :"hover:bg-(--primary-hover)"}`}>
                <Tags className="s-24"/>
                {!isToggle && <span>Category</span>}
            </NavLink>
            
          </li>

          <li>
            <NavLink to="/setting" className={(props)=>`${isToggle?"justify-center":"items-center"} flex gap-2.5 p-1.5 ${props.isActive ? "bg-(--primary-hover)" :"hover:bg-(--primary-hover)"}`}>
                <Settings className="s-24"/>
                {!isToggle && <span>Settings</span>}
            </NavLink>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
