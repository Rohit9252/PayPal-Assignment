import "./App.css";
import WithSubnavigation from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes.jsx"
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
    <ToastContainer  
    position="top-right"
    />
    <WithSubnavigation />
    <AllRoutes />
    </>
   
  );
}

export default App;
