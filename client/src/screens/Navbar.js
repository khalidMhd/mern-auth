import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/auth';


const Navbar = (props) => {
  const userSignin = useSelector(state=>state.userSignin)
  const {userInfo}= userSignin
  
  const dispatch = useDispatch()
   const history = useHistory()
   
  const handleLogout = () => {
    if(true){
      dispatch(logout());
      history.push('/signin')
    }
   
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          {
            userInfo? 
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              { userInfo.length !== null ? userInfo.user.name: 'profile'}
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/">Action</Link>
              <div className="dropdown-divider"></div>
              <button className="btn btn-info" onClick={()=>handleLogout()}>Logout</button>
            </div>
          </li>     
          :
            <Link className="nav-link" to="/signin"> Signin <span className="sr-only">(current)</span></Link>

          }
          <li className="nav-item active">
          </li>
         
        </ul>
      </div>
    </nav>
  )
}

export default Navbar