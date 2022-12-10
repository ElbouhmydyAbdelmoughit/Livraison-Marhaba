import React from "react";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard, MdOutlineDeliveryDining } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
// import { FiSettings } from "react-icons/fi";
import { BiLogOut, BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";


function Sidebar() {
  const [open, setOpen] = useState(true);
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Commande", link: "/", icon: MdOutlineDeliveryDining },
    { name: "Payement", link: "/", icon: MdOutlineDeliveryDining },
    { name: "Users", link: "/Livreur", icon: BiUserCircle },
    { name: "logout", link: "/logout", icon: BiLogOut, margin: true },
  ];
  return (
    <div className={`${open ? "w-72" : "w-16"} duration-500 bg-gray-50 min-h-screen text-amber-500 relative px-3`}>
      <div className="flex justify-end py-3" style={{height: '15%'}}>
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      {/* <img src={foodIcon} alt ="Marhaba" className="border-red-600 cursor-pointer top-9" /> */}

      <div className="relative flex flex-col gap-4 mt-4" style={{height: '80%'}}>
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={`${
              menu?.margin && "mt-5 absolute inset-x-0 bottom-0"
            } flex items-center text-sm gap-4 font-medium p-2 rounded-md hover:bg-amber-500 hover:text-white`}
          >
            <div>{React.createElement(menu?.icon, { size: "25" })}</div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
