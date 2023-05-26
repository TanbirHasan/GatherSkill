import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
	// normal main route
	{
		path: '/',
		element: <Home/>,
		
	},
	{
		path: '/courseDetails',
		element: <CourseDetails />,
	},
])