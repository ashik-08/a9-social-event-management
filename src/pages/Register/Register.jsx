import Navbar from "../../components/Navbar/Navbar";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import "animate.css";

import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser } = useContext(AuthContext);
  //   console.log(authInfo);

  const handleRegister = (e) => {
    const passRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>?]{6,}$/;
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    // console.log(name, photo, email, password, terms);

    // check password
    if (!passRegex.test(password)) {
      Swal.fire({
        title:
          "Password must contain one uppercase letter, one special character, and should not be less than 6 characters.",
        icon: "warning",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }
    // check terms & condition
    else if (!terms) {
      Swal.fire({
        title: "Please accept our terms and conditions!",
        icon: "warning",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }

    // create user in firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "User Registered Successfully",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        // update profile name & photo
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        // reset the input field
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        // check for duplicate email usage
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          Swal.fire({
            title: "Email already is in use!",
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

  return (
    <section>
      <Navbar></Navbar>
      <div className="flex justify-center text-center mt-20 mb-20">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <form onSubmit={handleRegister} className="mt-8 mb-2 w-72 md:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input type="text" name="name" size="lg" label="Name" required />
              <Input
                type="text"
                name="photo"
                size="lg"
                label="Photo URL"
                required
              />
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
                className="absolute bottom-[188px] right-3"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <Checkbox
              name="terms"
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" type="submit" fullWidth>
              <input type="submit" value="Register" />
            </Button>

            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-gray-900">
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Register;
