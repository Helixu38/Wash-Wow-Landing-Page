import Content from "@/components/hero/content";
import ContentBottom from "@/components/hero/contentbotom";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/ui/footer";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Content></Content>
      {/* <ContentBottom></ContentBottom> */}
      <Footer></Footer>
    </>
  );
}
