
import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";



const Login = () => {

    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext)

    const [logingError, setLogingError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    const [showPasswort, setShowPassword] = useState(false);
    const emailRef = useRef(null);

    const loginWithEmail = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        setLogingError('');
        setLoginSuccess('');


        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('You are Sign In successfully')
            })
            .catch(error => {
                console.log(error);
                setLogingError(error.message)
                toast.warn('Please Enter your Correct Email and Password')

            })
    }

    // forget Email and password

    // const forgetHandle = () => {
    //     const email = emailRef.current.value;
    //     if (!email) {
    //         console.log("Clicked");
    //         return;
    //     }
    //     else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    //         console.log("Null Value");
    //         setLogingError("Email is Not Correct");
    //         return;
    //     }

    //     //send valaditions

    //     sendPasswordResetEmail(auth, email)
    //         .then(() => {
    //             alert("Please Cheek your email");
    //         })
    //         .catch((error) => {
    //             console.log(error);

    //         });
    // }

    // login with popup

    const googleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success("Sign In with Google Successfully")

            }).catch((error) => {
                console.log(error);
                toast.warn("Sign In with Google Failed")

            });
    }

    const gitHub = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user);
                toast.success("Sign In with GitHub Successfully")

            }).catch((error) => {
                console.log(error);
                toast.warn("Sign In with GitHub Failed")
            });
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sign In</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <p className="py-6">For More explore new invention further join now here. we are with you.......</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={loginWithEmail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPasswort ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover" onClick={forgetHandle}>Forgot password?</a>
                                </label> */}
                                <span className="absolute top-12 right-2" onClick={() => {
                                    setShowPassword(!showPasswort)
                                }}>

                                    {
                                        showPasswort ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }

                                </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Login</button>
                            </div>
                        </form>

                        <div className="divider"></div>

                        <p className=" flex justify-center p-3">If You have No account Please? <Link to='/rgister' className="text-blue-600">Register Here</Link> </p>


                        <div className="divider divider-warning">Login in With</div>

                        <div className="flex justify-around mb-9">
                            <div >
                                <FaGoogle className="text-2xl" onClick={googleLogin}></FaGoogle>
                            </div>
                            <div>
                                <FaGithub className="text-2xl" onClick={gitHub}></FaGithub>
                            </div>

                        </div>
                        <div className="divider"></div>



                        <div>
                            {
                                logingError && <h1 className="text-center mb-4">{logingError}</h1>
                            }
                            {
                                loginSuccess && <h1 className="text-center mb-4">{loginSuccess}</h1>
                            }
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;