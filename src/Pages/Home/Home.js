import React from "react";
import Layout from "../../components/Layout/Layout";
import Banner from "../../components/Banner/Banner";
import Courses from "../../components/Courses/Courses";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Courses />
    </Layout>
  );
}
