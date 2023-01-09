import { useLocation } from "react-router-dom";

import { RiArrowDropDownLine } from "react-icons/ri";
import organization from "../../assets/icons/organization.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import { navItems } from "../../NavItems";


const Sidebar = () => {
  let location = useLocation();
  let trimLocation = location.pathname.slice(1);

  return (
    <>
      <div className="flex_container_1">
        <img src={organization} alt="logo" className="organization icon" />
        <p>Switch Organisation</p>
        <RiArrowDropDownLine size={24} />
      </div>
      <div className="flex_container_2">
        <img src={dashboard} alt="logo" className="dashboard icon" />
        <p>Dashboard</p>
      </div>
      <div>
        {
          navItems.map((navItem) => {
            return (
              <div className="nav_container" key={navItem.heading}>
                <p className="nav_heading">{navItem.heading}</p>
                <div>
                  {navItem.items.map((item) => (
                    <div className={`nav_item ${item.title === trimLocation ? "active_link" : null}`} key={item.id}>
                      <p>{item.icon}</p>
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default Sidebar;