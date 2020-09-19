import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar'
import {confirmPassword} from '../../actions/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const newPasswordScreen = (props) => {
    const [password, setPassword] = useState('')
    const {token} = useParams()
    console.log(token);

    const newPassword = useSelector(state => state.newPassword)
  const {loading, success, error} = newPassword

    const dispatch = useDispatch()

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(confirmPassword(password,token))
    }

    useEffect(() => {
        if(success){
            console.log('send');
            toast("password reset successfully")
        }
        
    }, [success])

    return <> <Navbar />
        <form onSubmit={submitHandler} className='card' style={{ width: '500px', margin: '20px auto' }}>
            <h4 style={{ textAlign: 'center' }}>New Password</h4>
            <div className="form-group">
                {loading && <div>Loading...</div>}
                {error && <div>Something went wrong</div>}
                <input type="password" className="form-control" minLength='4' id="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <ToastContainer/>
        </form>
    </>
}

export default newPasswordScreen


