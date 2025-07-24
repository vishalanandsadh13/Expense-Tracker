import React,{useContext} from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { UserContext } from "../../Context/UserContext";

const DashboardLayouts = ({children, activeMenu}) => {
    const {user} = useContext(UserContext);
  return (
    <div className="">
      <Navbar activeMenu={activeMenu}/>
      {user && (
      <div className="flex">
        <div className="hidden lg:block">
             <SideMenu activeMenu={activeMenu}/>
        </div>
         <div className="grow mx-5">
            {children}
         </div>
      </div>
      )}
    </div>
  );
};
export default DashboardLayouts;
