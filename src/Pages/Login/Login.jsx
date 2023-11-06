import LoginImage from "../../assets/login.png";
import google from "../../assets/google.png";
// import facebook from "../../assets/images/login/facebook.png";
// import linkedin from "../../assets/images/login/linkedin.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { userSignIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    userSignIn(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Invalid Login Credential",
          text: "Check if you have typed the correct password or email",
        });
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
        });
      });
  };
  return (
    <div className="hero min-h-screen flex flex-col lg:flex-row mb-10">
      <div className="lg:w-1/2">
        <img src={LoginImage} alt="" />
      </div>
      <div className="rounded-md w-[90%] px-6 lg:px-0 lg:w-1/3 border-2 border-[#D0D0D0]">
        <h2 className="text-4xl  font-bold mt-12 text-center">Sign in</h2>
        <form onSubmit={handleLogin} className="lg:card-body w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-custom-main text-white font-semibold hover:bg-white hover:text-custom-main hover:border-2 hover:border-custom-main">
              Sign in
            </button>
          </div>
        </form>
        <p className="text-center font-medium">or Sign In With</p>
        <div className="mt-2 card-body">
          <button
            onClick={handleLoginWithGoogle}
            className="bg-white btn border-2 border-custom-main hover:btn-success text-custom-main hover:text-white"
          >
            <img className="w-[25px] h-[25px]" src={google} alt="" />
            <h2>Google</h2>
          </button>
        </div>
        <p className="text-center font-medium mt-8 mb-10">
          Do not have an account?
          <span className="text-custom-main ml-2">
            <Link to="/register">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
