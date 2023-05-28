import {
  createBrowserRouter,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Home from "../Pages/Home/Home";
import PostVideo from "../components/PostVideo/PostVideo";
import Courses from "../components/Courses/Courses";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import AuthContext from "../context/AuthProvider";
import { useContext, useEffect } from "react";
import About from "../Pages/About/About";
import ContactUs from "../Pages/Contact/Contact";


const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useContext(AuthContext);

  console.log(auth,"Auth")

  useEffect(() => {
    if (!auth.accessToken) {
      navigate("/login");
    }
  }, [auth.accessToken, navigate]);
  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/courseDetails",
	element: (
		<PrivateRoute>
		  <CourseDetails />
		</PrivateRoute>
	  ),
  },
  {
    path: "/postFile",
    element: (
      <PrivateRoute>
        <PostVideo />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
