import React from "react";
import { link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <h1>Arun Sharma</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}
