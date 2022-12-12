
import Index from "./views/Index";
import Profile from "./views/examples/Profile";
import Maps from "./views/examples/Maps";

import Tables from "./views/examples/Tables";
import Icons from "./views/examples/Icons";
var routes = [
  {
    path: "/admin",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    
  }
];
export default routes;
