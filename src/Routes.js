import Home from "./home/Home";
import About from "./about/About";
import Service2d from "./service2d/Service2d";
import Service3d from "./service3d/Service3d";
import ServiceApp from "./serviceApp/ServiceApp";
import ServiceInt from "./serviceInt/ServiceInt";
import ServiceVfx from "./serviceVfx/ServiceVfx";
import ServiceWeb from "./serviceWeb/ServiceWeb";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Login from "./login/Login";
export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/blog",
    component: Blog
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/service2d",
    component: Service2d
  },
  {
    path: "/service3d",
    component: Service3d
  },
  {
    path: "/serviceApp",
    component: ServiceApp
  },
  {
    path: "/serviceInt",
    component: ServiceInt
  },
  {
    path: "/serviceVfx",
    component: ServiceVfx
  },
  {
    path: "/serviceWeb",
    component: ServiceWeb
  }
];
