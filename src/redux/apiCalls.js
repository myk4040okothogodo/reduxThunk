import {updateStart, updateSuccess, updateError } from  "./userSlice";
import axios from 'axios';

export const updateUser = async (user, dispatch) => {
   dispatch(updateStart());
   try {
      const res = await axios.post("http://localhost:8000/api/user/123/update", user);
      dispatch(updateSuccess(res.data))
   } catch(err){
     dispatch(updateError());
   
   }

}

