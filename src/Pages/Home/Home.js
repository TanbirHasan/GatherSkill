import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import Banner from "../../components/Banner/Banner";
import Courses from "../../components/Courses/Courses";
import AuthContext from "../../context/AuthProvider";
import Blog from "../../components/Blog/Blog";


export default function Home() {
  const { auth } = useContext(AuthContext);
  return (
    <Layout>
      <Banner />
      {
        auth.accessToken &&   <Courses />
      }
      <Blog/>

    </Layout>
  );
}
