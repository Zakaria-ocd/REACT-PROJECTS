import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produits from "./GestionAchatsDB/Produits";
import AjouterProduit from "./GestionAchatsDB/AjouterProduit";
import ModifierProduit from "./GestionAchatsDB/ModifierProduit";
// import Ventes from "./GestionAchatsDB/Ventes";

export default function AppAchatsWithDb() {
  const [produits, setProduits] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectdProduit, setSelectdProduit] = useState({
    id: "",
    libelle: "",
    categories: { id: "", libelle: "" },
    prix: 0,
    quantite: 0,
  });

 useEffect(() => {
   async function getData() {
     // const initialProduits = []
     let response = await fetch("http://localhost:3000/produitAchete");
     setProduits(await response.json());
     response = await fetch("http://localhost:3000/categorie");
     setCategories(await response.json());
         console.log("ok");

   }
   getData();
 }, []);
 
  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Produits
                setSelectdProduit={(item) => setSelectdProduit(item)}
                selectdProduit={selectdProduit}
                produits={produits}
                setProduits={(item) => setProduits(item)}
              ></Produits>
            }
          ></Route>
          <Route
            path="/Produits"
            element={
              <Produits
                setSelectdProduit={(item) => setSelectdProduit(item)}
                selectdProduit={selectdProduit}
                produits={produits}
                setProduits={(item) => setProduits(item)}
              ></Produits>
            }
          ></Route>
          <Route
            path="/Produits/AjouterProduit"
            element={
              <AjouterProduit
                categories={categories}
                setProduits={(item) => {
                  setProduits(item);
                }}
                // categories={categories}
              ></AjouterProduit>
            }
          ></Route>
          <Route
            path="/Produits/ModifierProduit"
            element={
              <ModifierProduit
                setProduits={(item) => {
                  setProduits(item);
                }}
                setSelectdProduit={(item) => setSelectdProduit(item)}
                selectdProduit={selectdProduit}
                categories={categories}
              ></ModifierProduit>
            }
          ></Route>
          {/* <Route path="/Ventes" element={<Ventes></Ventes>}></Route>  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
