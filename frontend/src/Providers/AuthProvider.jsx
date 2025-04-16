import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Component/Firebase/Firebase";
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)


const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()
const twitterProvider = new TwitterAuthProvider()

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);

    // Register

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //SIgn Out

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    //Data show In nav

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currebtUser => {
            setUser(currebtUser)
            console.log("Observing ", currebtUser);
            setLoading(false);

        });

        return () => {
            unSubscribe()
        }
    }, [])


    // social

    // sign in with google

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = () =>{
        return signInWithPopup(auth , gitHubProvider)
    }
    const signInWithTwitter = () =>{
        return signInWithPopup(auth , twitterProvider)
    }

    const [theme, setTheme] = useState('light')



    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        signInWithGoogle,
        signInWithGithub,
        signInWithTwitter,
        setTheme,
        theme
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}