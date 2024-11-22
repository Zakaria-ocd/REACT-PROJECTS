import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produits from "./GestionAchats/Produits";
import AjouterProduit from "./GestionAchats/AjouterProduit";
import ModifierProduit from "./GestionAchats/ModifierProduit";
// import Ventes from "./GestionAchats/Ventes";

export default function AppAchats() {
  const [produits, setProduits] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectdProduit, setSelectdProduit] = useState({
    id: "",
    libelle: "",
    categories: { id: "", libelle: "" },
    prix: null,
    quantite: null,
  });

  useEffect(() => {
    const initialCategories = [
      { id: 1, libelle: "electorincs" },
      { id: 2, libelle: "vegetables" },
      { id: 3, libelle: "drinks" },
      { id: 4, libelle: "fruits" },
      { id: 5, libelle: "clothes" },
    ];
    const initialProduits = [
      {
        id: 1,
        libelle: "tomatos",
        categories: { id: 2, libelle: "vegetables" },
        prix: 100,
        quantite: 3,
      },
      {
        id: 2,
        libelle: "potatos",
        categories: { id: 2, libelle: "vegetables" },
        prix: 140,
        quantite: 5,
      },
      {
        id: 3,
        libelle: "tv",
        categories: { id: 1, libelle: "electorincs" },
        prix: 70,
        quantite: 1,
      },
      {
        id: 4,
        libelle: "milk",
        categories: { id: 3, libelle: "drinks" },
        prix: 90,
        quantite: 8,
      },
    ];
    setProduits(initialProduits);
    setCategories(initialCategories);
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
                ajouterProduit={(item) => {
                  setProduits((preValue) => [...preValue, item]);
                }}
                categories={categories}
              ></AjouterProduit>
            }
          ></Route>
          <Route
            path="/Produits/ModifierProduit"
            element={
              <ModifierProduit
                modifierProduits={(item) => {
                  setProduits(item);
                }}
                produits={produits}
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
