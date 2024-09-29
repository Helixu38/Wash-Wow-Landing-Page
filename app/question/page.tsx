import Content from "@/components/faq/content";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/ui/footer";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <Content></Content>
      <Footer />
    </>
  );
}
