import React from "react";
import Layout from "../../components/Layout/Layout";
import Banner from "../../components/Banner/Banner";
import Courses from "../../components/Courses/Courses";


export default function Home() {
  return (
    <Layout>
      <Banner />
      <Courses />
    </Layout>
  );
}
