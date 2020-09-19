import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar'
import { resetPassword } from '../../actions/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const restPassword = (props) => {
    const [email, setEmail] = useState('')

  const passwordReset = useSelector(state => state.passwordReset)
  const {loading, success, error} = passwordReset

    const dispatch = useDispatch()

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(resetPassword(email))
    }

    useEffect(() => {
        if(success){
            console.log('send');
            toast("Check your Email")
        }
        
    }, [success])

    return <> <Navbar />
        <form onSubmit={submitHandler} className='card' style={{ width: '500px', margin: '20px auto' }}>
            <h4 style={{ textAlign: 'center' }}>Reset Password</h4>
            <div className="form-group">
                {loading && <div>Loading...</div>}
                {error && <div>Invaled Email</div>}
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <ToastContainer/>
        </form>
    </>
}

export default restPassword


