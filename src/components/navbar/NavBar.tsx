import { CircleUserRound, Bell, Menu, MessageCircleMore } from "lucide-react";

type NavBarProps = {
  onToggleSidebar: () => void;
};

const NavBar = ({ onToggleSidebar }: NavBarProps) => {
  return (
    <nav className="bg-(--primary) w-full h-20 border-solid border-b-2 border-(--border-color) flex items-center justify-between px-6">
      <button
        type="button"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
        className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-(--primary-hover)"
      >
        <Menu className="h-6 w-6 text-white" />
      </button>

      <ul className="flex gap-3.5 items-center p-6">
        <li>
          <Bell className="w-6 h-6 text-white" />
        </li>
        <li>
          <MessageCircleMore className="w-6 h-6 text-white" />
        </li>
        <li>
          <CircleUserRound className="w-6 h-6 text-white" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
