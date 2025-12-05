import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between bg-black text-white">
      <div className="m-4">TO-DO APP</div>
      <ul className="flex gap-5 m-4">
        <Link to={"/list"}>
          <li>List</li>
        </Link>
        <Link to={"/add"}>
          <li>Add Task</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
