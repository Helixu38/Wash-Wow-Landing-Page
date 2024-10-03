import Content from "@/components/hero/content";
import ContentBottom from "@/components/hero/contentbotom";
import Hero from "@/components/hero/hero";
import Footer from "@/components/ui/footer";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Content></Content>
      <ContentBottom></ContentBottom>
      <Footer />
    </>
  );
}
