import React, { useContext } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import context from "../../context/context";

const Navbar = () => {
  const user = useContext(context);
  console.log(user);

  return (
    <header>
      <nav className="navbar bg-primary w-100 p-3  ">
        <ul className="nav__ul d-flex w-25 justify-content-around list-unstyled">
          <li className="list__item">text</li>
          <li className="list__item">
            <Link className="text-light text-decoration-none" to="/profile">
              Go to profile
            </Link>
          </li>
          <li className="list__item">text</li>
        </ul>
        <button
          className="btn btn-light"
          onClick={() =>
            user.setIsLogged({
              isLogged: true,
              token: true,
            })
          }
        >
          LOGIN
          {/* {isLogged.isLogged.isLogged ? "LOG OUT" : "LOG IN"} */}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
