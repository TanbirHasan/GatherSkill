import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";

export const router = createBrowserRouter([
	// normal main route
	{
		path: '/',
		element: <Layout/>,
		// children: [
		// 	{
		// 		path: '/login',
		// 		element: <Login />,
		// 	},
		// ],
	},
])