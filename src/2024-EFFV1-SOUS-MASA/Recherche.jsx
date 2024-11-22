import { useRef, useState } from "react";

function Recherche({ produits }) {
  const [produitsCherches, setProduitsCherches] = useState([]);
  const categorie = useRef("");
  console.log(produitsCherches);
  return (
    <>
      <div>
        <h1>Recherche Par Categorie :</h1>
        <input
          className="w-40 bg-slate-300  px-2 py-1 outline-none  rounded-md"
          ref={categorie}
          type="search"
        />
        <button
          className="bg-green-500 px-2 py-1 ml-8  rounded-lg text-white"
          onClick={function () {
            console.log(categorie.current.value);
            setProduitsCherches(
              produits.filter((item) => {
                return categorie.current.value == item.categorie.nomC;
              })
            );
          }}
        >
          Recherche
        </button>
        <h1>Resultat:</h1>
        {produitsCherches.length > 0 ? (
          <ul className="list-disc">
            {produitsCherches.map((item) => {
             return <li key={item.reference}>
                {item.nomP} | prix : {item.prixP}dh | <a href="">...plus</a>
              </li>
            })}
          </ul>
        ) : (
          <h1 className="text-red-500">aucun produit à afficher</h1>
        )}
      </div>
    </>
  );
}

export default Recherche;
