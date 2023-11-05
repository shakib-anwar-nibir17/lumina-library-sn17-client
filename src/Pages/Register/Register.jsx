import registerImage from "../../assets/register.png";
import google from "../../assets/google.png";
// import google from "../../assets/images/login/google.png";
// import facebook from "../../assets/images/login/facebook.png";
// import linkedin from "../../assets/images/login/linkedin.png";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import axios from "axios";

const Login = () => {
  // const { userSignIn } = useContext(AuthContext);
  // const location = useLocation();
  // const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(password, email);
  //   userSignIn(email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       const user = { email };
  //       axios
  //         .post("http://localhost:5000/jwt", user, { withCredentials: true })
  //         .then((response) => {
  //           console.log(response.data);
  //           if (response.data.success) {
  //             navigate(location?.state ? location?.state : "/");
  //           }
  //         });
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <div className="hero min-h-screen flex flex-col lg:flex-row mb-10">
      <div className="lg:w-1/2">
        <img src={registerImage} alt="" />
      </div>
      <div className="rounded-md lg:w-1/3 border-2 border-[#D0D0D0]">
        <h2 className={`text-4xl  font-bold mt-12 text-center`}>Sign Up</h2>
        <form className="card-body">
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
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center font-medium">or Sign Up With</p>
        <div className="mt-2 card-body">
          <button className="bg-white btn border-2 border-custom-main hover:btn-success text-custom-main hover:text-white">
            <img className="w-[25px] h-[25px]" src={google} alt="" />
            <h2>Google</h2>
          </button>
        </div>
        <p className="text-center font-medium mt-8 mb-10">
          Already have an account?
          <span className="text-custom-main ml-2">
            <Link to="/login">Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
