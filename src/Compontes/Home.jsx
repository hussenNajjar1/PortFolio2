import React from "react";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { Card } from "./Card";
import Timelines from "../Timelines";
import Project from "./Project";
import Education from "./Education";
export const Home = () => {
  return (
    <div>
      <Hero />
      <Card />
      <Timelines />
      <Project/>

      <Footer />
    </div>
  );
};
