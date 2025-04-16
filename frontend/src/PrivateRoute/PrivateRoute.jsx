import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner text-warning flex justify-center items-center"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}