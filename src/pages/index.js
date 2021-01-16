import React from "react"
import "./main.css"

export default function Home() {
  return <main className={"landing"}>
    <h1>David Crandall</h1>
    <p>Software Engineer</p>
    <Nav />
  </main>
}

function Nav() {
  return <div>
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Portfolio</a>
    <a href="">Contact</a>
  </div>
}
