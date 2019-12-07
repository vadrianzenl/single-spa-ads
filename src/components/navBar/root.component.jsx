import React from 'react'
import {navigateToUrl} from 'single-spa'
import AuthService from "services/AuthService";

const customerInfo = AuthService.getCustomerInfo();

const NavBar = () => (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="#">
        Proyecto Final
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/home" className="nav-link" onClick={navigateToUrl}>Inicio</a>
          </li>
          <li className="nav-item">
            <a href="/transactions" className="nav-link" onClick={navigateToUrl}>Mis Transacciones</a>
          </li>
          <li className="nav-item">
            <a href="/exchanges" className="nav-link" onClick={navigateToUrl}>Mis Canjes</a>
          </li>
          <li className="nav-item">
            <a href="/profile" className="nav-link" onClick={navigateToUrl}>Perfil</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <span className="navbar-text">Usuario: { customerInfo.full_name }</span>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={navigateToUrl}>Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </nav>
)
export default NavBar