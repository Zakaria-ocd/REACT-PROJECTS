import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produits from "./GestionAchatsRedux/Produits";
import AjouterProduit from "./GestionAchatsRedux/AjouterProduit";
import ModifierProduit from "./GestionAchatsRedux/ModifierProduit";
// import Ventes from "./GestionAchatsRedux/Ventes";

export default function AppAchatsRedux() {
  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/" element={<Produits></Produits>}></Route>
          <Route path="/Produits" element={<Produits></Produits>}></Route>
          <Route
            path="/Produits/AjouterProduit"
            element={<AjouterProduit></AjouterProduit>}
          ></Route>
          <Route
            path="/Produits/ModifierProduit"
            element={<ModifierProduit></ModifierProduit>}
          ></Route>
          {/* <Route path="/Ventes" element={<Ventes></Ventes>}></Route>  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
