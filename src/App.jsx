// import Header from "./Header"
// import AsideMenu from "./AsideMenu"
// import Body from "./Body";
// import FormState from "./FormState";
// import GerereStagiaire from "./GerereStagiaire";
// import MyInput from "./MyInput";
// import Test from "./test";
//  import GestionStagiaires from "./formStagiaires/GestionStagiaires";

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./2024-EFFV1-SOUS-MASA/Menu";
import Affiche from "./2024-EFFV1-SOUS-MASA/Affiche";
import InfoProd from "./2024-EFFV1-SOUS-MASA/InfoProd";
import Recherche from "./2024-EFFV1-SOUS-MASA/Recherche";

// import InputClass from "./inputClass";
// import FormStgsExpress1 from "./express-react/FormStgsExpress1";

// import AppEfm from "./AppEfm";

// import { useEffect } from "react";
// import { useState } from "react";

// import AsyncAwait from "./AsyncAwait";
// import InputClass from "./InputClass";
// import FormStgsExpress1 from "./express-react/FormStgsExpress1";

/* 2024 EFF V1*/
// import Experts1 from "./Regio2024/Experts1";
// import Experts2 from "./Regio2024/Experts2";
// import Formulaire from "./Regio2024/Formulaire";
// Routes
// import { Route, Routes } from "react-router-dom";
// import RevApp from "./revAppAndTest/revApp";
// import Navbar from "./Navbar";
// import Expert from "./Expert";
// import Experts1 from "./Regio2024/Experts1";

/* 2023 EFF V1*/
// import { useEffect, useState } from "react";
// import Composant1 from "./2023-EffV1/Composant1";
// import Composant2 from "./2023-EffV1/Composant2";
// import Composant3 from "./2023-EffV1/Composant3";
// import { Route, Routes } from "react-router-dom";

export default function App() {
  // const [salaries, setSalaries] = useState([]);
  // useEffect(function () {
  //   async function importData() {
  //     const data = await fetch("http://localhost:3000/salaries");
  //     const initialSalaries = await data.json();
  //     setSalaries(initialSalaries);
  //   }
  //   importData();
  // },import Affiche from './2024-EFFV1 SOUS MASA/Affiche';
//  [])import InfoProd from './2024-EFFV1 SOUS MASA/InfoProd';

  const [produits, setProduits] = useState([]);
  useEffect(function () {
    setProduits([
      {
        id: "X0001F",
        nomP: "NUTELLA",
        descP:
          "Pâte à tartiner aux noisettes et au cacao. À conserver au sec et à l'abri de la chaleur. Contenance : 600 g.",
        prixP: "70",
        categorie: {
          idC: "1",
          nomC: "Petit déjeuner",
        },
        thumbnail: "nutella.webp",
      },
      {
        id: "X0002F",
        nomP: "CONFITURE FRAISE",
        descP:
          "Confiture de fraise naturelle sans conservateurs. Contenance : 400 g.",
        prixP: "50",
        categorie: {
          idC: "1",
          nomC: "Petit déjeuner",
        },
        thumbnail: "confiture_fraise.webp",
      },
      {
        id: "X0003F",
        nomP: "MIEL BIO",
        descP:
          "Miel biologique pur. À conserver à l'abri de l'humidité. Contenance : 500 g.",
        prixP: "90",
        categorie: {
          idC: "1",
          nomC: "Petit déjeuner",
        },
        thumbnail: "miel_bio.webp",
      },
      {
        id: "X0004F",
        nomP: "CÉRÉALES CHOCOLAT",
        descP:
          "Céréales au chocolat riches en fibres et sans sucres ajoutés. Poids : 300 g.",
        prixP: "60",
        categorie: {
          idC: "1",
          nomC: "Petit déjeuner",
        },
        thumbnail: "cereales_chocolat.webp",
      },
      {
        id: "X0005F",
        nomP: "PAIN COMPLET",
        descP:
          "Pain complet bio, riche en fibres et parfait pour le petit déjeuner. Poids : 500 g.",
        prixP: "40",
        categorie: {
          idC: "1",
          nomC: "Petit déjeuner",
        },
        thumbnail: "pain_complet.webp",
      },
    ]);
  }, []);
  return (
    <>
      {/* <Header></Header>
      <div className="flex  w-full">
        <AsideMenu></AsideMenu>
        <Body></Body>
      </div> */}
      {/* <Test></Test>
      <MyInput></MyInput>
      <FormState></FormState> */}
      {/* // <GestionStagiaires></GestionStagiaires> */}
      {/* <FormStgsExpress1></FormStgsExpress1> */}
      {/* <InputClass></InputClass> */}
      {/* 2024 EFF V1*/}
      {/* <Experts1></Experts1>
      <Formulaire></Formulaire>
      <Experts2></Experts2> */}
      {/* <InputClass></InputClass> */}
      {/* <AsyncAwait></AsyncAwait> */}
      {/* useLocation */}
      {/* react querry */}
      {/* Routes */}
      {/* <Routes>
        <Route path="/" element={<><Navbar></Navbar> <RevApp></RevApp></>} />
        <Route path="/Home" element={<><Navbar></Navbar> <RevApp></RevApp></>} />
        <Route path="/Experts" element={<Experts1 />}></Route>
        <Route path="/Expert/:id" element={<Expert />}></Route>
      </Routes> */}
      {/* 2023 EFF V1 */}
      {/* <div className="w-full pb-6 flex flex-col  items-center ">
        <Composant1></Composant1>
        <Routes>
          <Route
            path="/Composant2"
            element={<Composant2 salaries={salaries}></Composant2>}
          ></Route>
          <Route
            path="/Composant3"
            element={<Composant3 salaries={salaries}></Composant3>}
          ></Route>
        </Routes>
      </div> */}
      {/* <AppEfm/> */}
      {/* <GestionStagiaires></GestionStagiaires> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu></Menu>}></Route>
          <Route path="/InfoProd" element={<InfoProd></InfoProd>}></Route>
          <Route path="/Affiche" element={<Affiche produits={produits}></Affiche>}></Route>
          <Route path="/Recherche" element={<Recherche produits={produits}></Recherche>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
