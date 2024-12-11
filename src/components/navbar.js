import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Img from "./NEWS.png";
export class navbar extends Component {
  render() {
    
    return (
      <div>
        <nav
          className="navbar fixed-top navbar-expand-lg bg-body-tertiary"
          data-bs-theme={`${this.props.mode}`}
        >
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img
                src={Img}
                style={{ height: "38px", borderRadius: "10px" }}
                alt=""
                className="mx-1"
                data-aos="zoom-in"
                data-aos-offset="250"
                data-aos-delay="50"
                data-aos-duration="800"
              />
              Newzy
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sports">
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/business">
                  Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/health">
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/entertainment">
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/science">
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/technology">
                    Technology
                  </NavLink>
                </li>
                
             
              </ul>
              
              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>

              </form> */}
              <div className="form-check form-switch my-2">
                <input className="form-check-input" type="checkbox" onClick={this.props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                <label className={`form-check-label text-${this.props.mode=="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
              </div>
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;
