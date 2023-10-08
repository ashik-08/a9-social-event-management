import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import "animate.css";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logged In",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        // check for invalid credential
        if (
          error.message === "Firebase: Error (auth/invalid-login-credentials)."
        ) {
          Swal.fire({
            title: "Invalid Email or Password!",
            icon: "error",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logged In",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Something is wrong!\nTry again!",
          icon: "error",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      });
  };

  return (
    <section>
      <Navbar></Navbar>
        <div className="flex justify-center text-center mt-20 mb-20">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to login.
            </Typography>
            <form onSubmit={handleLogin} className="mt-8 mb-2 w-72 md:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  type="email"
                  name="email"
                  size="lg"
                  label="Email"
                  required
                />
                <Input
                  type={showPass ? "text" : "password"}
                  name="password"
                  size="lg"
                  label="Password"
                  required
                />
                <span
                  className="absolute top-44 right-3"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <div>
                {
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    <a
                      href=""
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      Forgot password?
                    </a>
                  </Typography>
                }
              </div>

              <Button className="mt-6" type="submit" fullWidth>
                <input type="submit" value="Login" />
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Not registered yet?{" "}
                <Link to="/register" className="font-medium text-gray-900">
                  Sign Up
                </Link>
              </Typography>
            </form>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mt-4 font-bold"
            >
              Or
            </Typography>
            <Button
              onClick={handleGoogleSignIn}
              className="flex justify-center items-center gap-2 normal-case mt-5"
            >
              <FcGoogle></FcGoogle>Login with Google
            </Button>
          </Card>
        </div>
      </section>
  );
};

export default Login;
