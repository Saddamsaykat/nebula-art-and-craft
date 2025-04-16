import { Outlet } from "react-router-dom";
import Nav from "./Header/Nav";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer/Footer";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import 'animate.css';
const Root = () => {
    
    const{theme} = useContext(AuthContext) 
    return (
        <div style={{backgroundColor: theme == "dark" ? "black" : "white" , color: theme == "dark" ? "white" : "black" }}>
            <Nav></Nav>           
            <Outlet></Outlet>
          <Footer></Footer>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            ></ToastContainer>
        </div>
    );
};

export default Root;