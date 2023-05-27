import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Home from "../Pages/Home/Home";
import PostVideo from "../components/PostVideo/PostVideo";
import Courses from "../components/Courses/Courses";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";

export const router = createBrowserRouter([
	// normal main route
	{
		path: '/',
		element: <Home/>,
		
	},
	{
		path: '/courses',
		element: <Courses/>,
	},
	{
		path: '/courseDetails',
		element: <CourseDetails />,
	},
	{
		path: '/postFile',
		element: <PostVideo />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
])