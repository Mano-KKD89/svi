import Home from "./home/Home";
import About from "./about/About";
import Service from "./service/Service";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";

export const routes = [
  {
    path: "/",
    component: Home
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
    path: "/service",
    component: Service
  }
];
