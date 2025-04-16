
  import { useContext, useState } from "react";
  import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
  import { Link } from "react-router-dom";
  import { toast } from "react-toastify";
  import { AuthContext } from "../../../Providers/AuthProvider";
  import { Helmet } from "react-helmet";
import { updateProfile } from "firebase/auth";

  
  
  const Register = () => {
  
  
    const { createUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext)
  
  
  
    const [showError, setUserError] = useState();
    const [success, setSuccess] = useState();
    const [showPassword, setShowPassword] = useState();
  
    const registerHandle = (event) => {
      event.preventDefault();
  
      setUserError('');
      setSuccess('');
      // const name = event.target.name.value;
      const email = event.target.email.value
      const password = event.target.password.value
      const terms = event.target.terms.checked;
      const photoUrlData = event.target.photourl.value;
      const name = event.target.name.value;
  
  
  
      if (password.length < 6) {
        setUserError("Password at list 8 Character with UpperCase , Lower Case and  Arithmetic value and Number")
        return
      }
  
      else if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-={};':"|,.<>/?])/.test(password)) {
        setUserError("You need one upper case Character, one digit, and one special character");
        return;
      }
  
      else if (!terms) {
        setUserError("please Accepted our Terms and Conditions");
        return;
      }
  
      createUser(email, password)
      .then(result => {
        console.log(result.user);
        setSuccess("User Login Successfully");
        toast.success('You created an account successfully');
    
        // Update user profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrlData
        })
        .then(() => {
          console.log("Profile Updated");
        })
        .catch(error => {
          console.error("Error updating profile:", error);
        });
      })
      .catch(error => {
        console.error("Error creating user:", error);
        
      });
    
  
    };
  
  
    // popup Login
  
  
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
          <title>Register</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-center">Register Now!</h1>
              <p className="py-6">Register now to explore new innovation and new rent parches</p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  
  
              <form className="card-body" onSubmit={registerHandle}>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
  
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
  
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input type="text" name="photourl" placeholder="photoURL" className="input input-bordered" required />
                </div>
  
  
                <div className="form-control relative">
  
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                  <label className="label">
                    <span className="absolute top-12 right-2" onClick={() => {
                      setShowPassword(!showPassword);
                    }}>
  
                      {
                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                      }
  
                    </span>
  
                  </label>
  
  
                  <div>
                    <input name="terms" type="checkbox" />
                    <Link to="/terms"> Accepted Out Treams And Conditions</Link>
                  </div>
  
                </div>
  
  
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">Register</button>
  
                </div>
              </form>
  
              <div className="divider"></div>
              {/* sign in with popup */}
  
              <div className="flex justify-around mb-2">
                <div>
                  <FaGoogle className="text-2xl" onClick={googleLogin}></FaGoogle>
                </div>
                <div>
                  <FaGithub className="text-2xl" onClick={gitHub}></FaGithub>
                </div>
  
              </div>
              <div className="divider"></div>
              <p className="text-xl p-3">Already Have An account? <Link to='/signIn' className="text-blue-600">Sign In Here</Link> </p>
              <div className="divider"></div>
  
              {/* Error show and success*/}
              <div>
                {
                  showError && <h1>{showError}</h1>
                }
                {
                  success && <h1 className=" text-2xl text-green-500">{success}</h1>
                }
  
              </div>
              {/* Close Here */}
            </div>
          </div>
        </div>
  
  
  
  
  
      </div>
    );
  };
  
  export default Register;