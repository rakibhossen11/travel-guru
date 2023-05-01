import React, { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Provider";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {

  const {signIn, passwordReset} = useContext(AuthContext);
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) =>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    signIn(email,password)
    .then(result =>{
      const loggedIn = result.user;
      console.log(loggedIn);
      navigate(from, {replace: true});
    })
    .catch(error => console.log(error))
  }

  const handleResetPassword = (event) =>{
      const email = emailRef.current.value;
      if(!email){
        alert('Please provide your email address to reset password');
        return;
      }
      passwordReset(email)
      .then(() =>{
        alert('Please check your email')
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="border-2 border-slate-200 p-16 mt-20">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            ref={emailRef}
            required
          />
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <p onClick={handleResetPassword}>Forget Password</p>
        <button className="bg-yellow-400 w-full py-4 font-display text-black">Log in</button>
        <p className="text-center text-black mt-4">Don't have an account? <span className="text-yellow-400"><Link to='/register'>Create an account</Link></span> </p>
      </form>
    </div>
  );
};

export default Login;
