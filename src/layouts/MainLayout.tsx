import NavBar from "@components/navbar/NavBar";
import Sidebar from "@components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
  return (
    <div className="flex">
      <div>
          <Sidebar/>
      </div>
      <div className="flex flex-col flex-1">
        <NavBar/>
        <main className="flex-1 p-6">
            <Outlet />
        </main>
        
      </div>      
    </div>
  )
}
