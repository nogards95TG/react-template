import React, { FC } from "react";
import Navbar from "../components/navbar/Navbar";

const Homepage: FC = () => {
  return (
    <>
      <Navbar
        title="Progetto di merda"
        links={[{ label: "pagina1", href: "/pagina1" }]}
        dropdowns={[{ label: "Dropdown", items: ["link1", "link2", "link3"] }]}
        searchBar={{ label: "search", placeholder: "search" }}
      ></Navbar>
    </>
  );
};

export default Homepage;
