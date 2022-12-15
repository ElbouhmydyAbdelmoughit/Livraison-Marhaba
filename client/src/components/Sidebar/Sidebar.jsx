import React from "react";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";


function Sidebar(props) {
  const [open, setOpen] = useState(true);
  let menus = props.menus

  const logout = () => {
    // const logout = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/logout`)
    // localStorage.clear()
    console.log('Logout')
  }
  
  return (
    <div className={`${open ? "w-72" : "w-16"} duration-500 bg-gray-50 min-h-screen text-amber-500 relative px-3`}>
      <div className="flex justify-end py-3" style={{height: '10%'}}>
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      {/* <img src={foodIcon} alt ="Marhaba" className="border-red-600 cursor-pointer top-9" /> */}

      <div className="relative flex flex-col gap-4 mt-4" style={{height: '85%'}}>
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={`${menu?.margin && "mt-5 absolute inset-x-0 bottom-0"} flex items-center text-sm gap-4 font-medium p-2 rounded-md hover:bg-amber-500 hover:text-white`}>
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
