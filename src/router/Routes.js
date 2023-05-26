import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Home from "../Pages/Home/Home";
import PostVideo from "../components/PostVideo/PostVideo";

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
	{
		path: '/postFile',
		element: <PostVideo />,
	},
])