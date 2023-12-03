import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../services/operations/authAPI";
import { sidebarLinks } from "../../../data/dashboard-links";
import SidebarLink from "./sidebarLink";

const Sidebar = () => {
  const { loading: profileLoading, user } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);

  if (profileLoading || authLoading) {
    return <div className="mt-10">Loading...</div>;
  }

  return (
    <div>
      <div>
        {sidebarLinks.map((link) => {
          if (link.path && user?.accountType !== link.path) return null;

          return <SidebarLink key={link.id} link={link} iconName={link.icon} />;
        })}
      </div>

      <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600"></div>

      <div className="flex flex-col">
        <SidebarLink
          link={{ name: "Settings", path: "dashboard/settings" }}
          iconName="VscSettingsGear"
        />
      </div>
    </div>
  );
};

export default Sidebar;
