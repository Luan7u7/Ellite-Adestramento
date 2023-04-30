'use client'
import "./globals.css";
import React from "react";
import { NextPage } from "next";
import WelcomeScreen from "./components/WelcomeScreen";


const Home: NextPage =() => {

  return (
    <>
      <WelcomeScreen />
    </>
  );
}


export default Home