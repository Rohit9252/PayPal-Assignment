import { toast } from 'react-toastify';
export const successMsg = () => {
    toast.success("user Created Suucessfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  
  }
  
 export  const errorMsg = () => {
    toast.error("Please Enter Correct Details", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  
  
  }