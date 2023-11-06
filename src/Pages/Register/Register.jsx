import registerImage from "../../assets/register.png";
import google from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {
  const { createUser, signInWithGoogle, handleUpdateProfile, logOut } =
    useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    console.log(name, email, password, photo);

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password must have 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must have one capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/.test(password)) {
      setRegisterError("Password must have one special character");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        //update profile
        handleUpdateProfile(name, photo).then(() => {
          logOut()
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
          Swal.fire({
            icon: "success",
            title: "Congratulation!! Please Login to Proceed",
            text: "You have successfully Registered",
          });
          navigate("/login");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();

    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
          title: "Congratulation",
          text: "You have successfully Registered",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen flex flex-col lg:flex-row mb-10">
      <div className="lg:w-1/2">
        <img src={registerImage} alt="" />
      </div>
      <div className="rounded-md w-[90%] px-6 lg:px-0 lg:w-1/2 border-2 border-[#D0D0D0]">
        <h2 className="text-4xl  font-bold mt-12 text-center">Sign Up</h2>
        <form onSubmit={handleRegister} className="lg:card-body w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
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
        <p className="text-center font-medium mt-8">or Sign Up With</p>
        <div className="mt-2 card-body">
          <button
            onClick={handleGoogleSignIn}
            className="bg-white btn border-2 border-custom-main hover:btn-success text-custom-main hover:text-white"
          >
            <img className="w-[25px] h-[25px]" src={google} alt="" />
            <h2>Google</h2>
          </button>
        </div>
        {registerError && (
          <p className="text-red-400 text-center mb-6">{registerError}</p>
        )}
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

export default Register;
