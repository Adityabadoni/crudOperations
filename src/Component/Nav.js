import React from "react";
import { Link } from "react-router-dom";
function Nav()
{
    return(
    <div>

<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">React</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/course">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/register">Regiser</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/calc">Calculator</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/student">Student</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/emp">Employement</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/ft1">Fetch</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/convert">Convert</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/country">Country</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/record">FireBase</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/todo">Todo</Link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
    </div>
    )
}
export default Nav;