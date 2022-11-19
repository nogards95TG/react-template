import React, { FC } from "react";
import ICard from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";

const Homepage: FC = () => {
  return (
    <>
      <Navbar
        title="Random project"
        logo={{ desc: "img", imgName: "logo.png" }}
        links={[{ label: "pagina1", href: "/pagina1" }]}
        //dropdowns={[{ label: "Dropdown", items: ["link1", "link2", "link3"] }]}
        searchBar={{ placeholder: "cerca", buttonLabel: "cacca" }}
      ></Navbar>
      <div className="d-flex">
        <ICard
          title={"Title"}
          text={"Lorem ipsum dolet vera tulli disputandum est"}
          buttonLabel={"Click"}
          img={{ name: "lana.jpg", alt: "lana" }}
        ></ICard>
        <ICard
          title={"Title"}
          text={"Lorem ipsum dolet vera tulli disputandum est"}
          buttonLabel={"Click"}
          img={{ name: "lana2.jpg", alt: "lana" }}
        ></ICard>
      </div>
    </>
  );
};

export default Homepage;
