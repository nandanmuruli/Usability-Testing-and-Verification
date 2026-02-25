import { NavLink, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <nav
        data-testid="mini_switch"
        style={{ border: "none", justifyContent: "center" }}
      >
        <NavLink to="info">Info</NavLink>
        <NavLink to="offers">Offers</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default About;
