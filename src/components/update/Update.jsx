import React, { useState} from 'react';
import Warning from '../warning/Warning';
import './update.css';
import { update} from '../../redux/userSlice';
import { updateUser} from '../../redux/apiCalls';
import { useSelector, useDispatch} from 'react-redux';
//import { updateUser2 } from '../../redux/userSlice';

export default function Update(){
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {userInfo} = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  
  const handleUpdate =(e)=> {
    e.preventDefault();
   updateUser({name, email}, dispatch)
  };
  
  const handleClick = (e) => {
    e.preventDefault();
    //without API
    dispatch(update({name, email}));
    //with API
   // dispatch(updateUser2({name, email}));
  };
  
  const handleDelete = (e) => {
     e.preventDefault();
     //dispatch(remove())
  }
  
  
  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img 
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.name}
                onChange = {(e) => setName(e.target.value)}
              
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input 
                className="formInput"
                type="text"
                placeholder={userInfo.email}
                onChange ={(e) => setEmail(e.target.value)}
              
              />
              
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            
            </div>
            <button
              className="updateButton"
              onClick={handleClick }
            >
            Update
            </button>
            <button 
              className="updateButton"
              onClick={handleUpdate}
            >update2</button>
            {userInfo.error && <span className="error">Something went Wrong!</span>}
            {userInfo.pending === false && (
              <span className="success">Account has been updated!</span>
            
            )}
            />
          </form>
        </div>
      </div>
    </div>
  
  );
}

