import NavBar from "@components/navbar/NavBar";
import Sidebar from "@components/sidebar/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  function toggleSidebar() {
    setIsSidebarCollapsed((currentValue) => !currentValue);
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="shrink-0">
          <Sidebar isToggle={isSidebarCollapsed}/>
      </div>
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <NavBar onToggleSidebar={toggleSidebar}/>
        <main className="min-h-0 flex-1 overflow-y-auto p-6">
            <Outlet />
        </main>
        
      </div>      
    </div>
  )
}
