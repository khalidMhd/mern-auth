import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Cookie from 'js-cookie';

const adminDashpoard = (props) => {
  const adminSignin = useSelector(state => state.adminSignin)
  const { adminInfo } = adminSignin

  useEffect(() => {
    { adminInfo === null ? props.history.push('/adminSignin') : props.history.push('/admin') }

    return () => {

    }
  }, [adminInfo])

  const logoutHandler = () => {
    Cookie.remove('adminInfo')
    props.history.push('/adminSignin')
  }

  return <>
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/admin">Navbar</Link>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/admin">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-info" onClick={() => logoutHandler()}>Logout</button>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  </>
}

export default adminDashpoard