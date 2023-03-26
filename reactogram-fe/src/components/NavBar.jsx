import React from 'react'
import './NavBar.css'
import logo from '../images/logo (2).png'
import { useNavigate, NavLink } from 'react-router-dom'
import  {useDispatch, useSelector} from 'react-redux';

const NavBar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.userReducer);
  //console.log(user);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({type: "LOGIN_ERROR"});
    navigate("/login");
  }

  return (
    <div>
      <nav className="navbar bg-light shadow">
        <div className="icon-bar container-fluid">
          <NavLink className="navbar-brand logo" to="/">
            <img className='logo' alt='logo' src={logo} />
          </NavLink>
          <form className="icons d-flex me-md-5" role="search">
            <input className="searchbox form-control me-2 txt-muted" type="search" placeholder="Search" />
            <NavLink className="nav-link text-dark fs-5 searchIcon" href="#"><i className="fa-solid fa-magnifying-glass"></i></NavLink>
            <NavLink className="nav-link text-dark fs-5" to="/posts"><i className="fa-solid fa-house"></i></NavLink>
            {localStorage.getItem("token") != null ? <NavLink className="nav-link text-dark fs-5" href="#"><i className="fa-regular fa-heart"></i></NavLink> : ''}
            <div className="dropdown">
              {localStorage.getItem("token") != null ? <> <a className="btn" href="#" role="button" data-bs-toggle="dropdown">
                <img className='profile-pic-navbar' alt='profile pic' src='https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' />
              </a> 

              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item mt-0" to="/myprofile">My Profile</NavLink>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => logout()}>
                    Logout
                  </a>
                </li>
              </ul> </>: ''}
            </div>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default NavBar