import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Main />
      <Hero />
      <Footer />
    </div>
  );
}
