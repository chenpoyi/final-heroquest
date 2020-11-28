import React, { Component } from "react";
import TitleCard from "./TitleCard";


export default function Home(user :any) {
  return (
  <>
  <TitleCard {...user}/>
  </>);
}