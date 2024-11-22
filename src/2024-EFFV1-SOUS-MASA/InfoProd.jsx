import { useState } from "react";

function InfoProd() {
  const [produit, setProduit] = useState({
    reference: "",
    nomProduit: "",
    categorieProduit: "",
    description: "",
    prix: 0,
    imageProduit: "",
  });
  const [produitAffiche, setProduitAffiche] = useState({});
  function onchangeInputs(e) {
    const name = e.target.name;
    const value =
      name == "imageProduit" ? e.target.files[0].name : e.target.value;
    setProduit({ ...produit, [name]: value });
  }
  function afficher(e) {
    e.preventDefault();
    setProduitAffiche(produit);
    setProduit({
      reference: "",
      nomProduit: "",
      categorieProduit: "",
      description: "",
      prix: 0,
      imageProduit: "",
    });
  }
  return (
    <>
      <div className="w-full mt-10 flex justify-evenly h-screen">
        <form
          className="bg-orange-500 w-80 h-[500px] rounded flex flex-col justify-between items-center"
          action=""
        >
          <label htmlFor="">Réference :</label>
          <input
            value={produit.reference}
            onChange={onchangeInputs}
            type="text"
            name="reference"
          />
          <label htmlFor="">Nom Produit :</label>
          <input
            value={produit.nomProduit}
            onChange={onchangeInputs}
            type="text"
            name="nomProduit"
          />
          <label htmlFor="">Catégorie Produit :</label>
          <select
            value={produit.categorieProduit}
            onChange={onchangeInputs}
            name="categorieProduit"
            id=""
          >
            <option value="Petit déjeuner">Petit déjeuner</option>
            <option value="Electronics">Electronics</option>
            <option value="Fruits">Fruits</option>
          </select>
          <label htmlFor="">Description :</label>
          <textarea
            value={produit.description}
            onChange={onchangeInputs}
            name="description"
            id=""
          ></textarea>
          <label htmlFor="">Prix</label>
          <input
            value={produit.prix}
            onChange={onchangeInputs}
            type="number"
            name="prix"
          />
          <label htmlFor="">Image Produit :</label>
          <input onChange={onchangeInputs} type="file" name="imageProduit" />
          <button
            onClick={afficher}
            className="bg-cyan-600 w-20 h-7 mt-3 rounded-sm text-white"
          >
            Vlider
          </button>
        </form>
        <div className="">
          <h1 className="text-3xl">Informations Produit :</h1>
          <ul className="list-disc">
            <li>{produitAffiche.reference}</li>
            <li>{produitAffiche.nomProduit}</li>
            <li>{produitAffiche.description}</li>
            <li>{produitAffiche.categorieProduit}</li>
            <li>{produitAffiche.prix}</li>
            <li>
              {produitAffiche.imageProduit && (
                <img
                  className="w-56 rounded-lg h-40"
                  src={`../../public/${produitAffiche.imageProduit}`}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default InfoProd;
