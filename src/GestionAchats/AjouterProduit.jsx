import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function AjouterProduit({ categories, ajouterProduit }) {
  const id = useRef(null);
  const libelle = useRef(null);
  const categorie = useRef(null);
  const quantite = useRef(null);
  const prix = useRef(null);
  const navigate = useNavigate();
  function handleSave() {
    ajouterProduit({
      id: id.current.value,
      libelle: libelle.current.value,
      categories: categories.find(item=>categorie.current.value==item.id),
      prix: prix.current.value,
      quantite: quantite.current.value,
    });
   navigate("/Produits")
  }
  return (
    <>
      <div className="flex justify-evenly h-[400px] mt-10">
        <form
          action=""
          className="flex flex-col justify-evenly items-center  w-80 rounded-md  bg-gray-400"
        >
          <input
            type="text"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Id"
            ref={id}
          />
          <input
            type="text"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Libéllé"
            ref={libelle}
          />
          <select
            className="w-40 pl-3 outline-none h-8 rounded-md"
            ref={categorie}
          >
            <option>Choisir catègorie</option>
            {categories.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.libelle}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="prix"
            ref={prix}
          />{" "}
          <input
            type="number"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Quantité"
            ref={quantite}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSave();
            }}
            className="bg-blue-600 text-white w-28 h-7 rounded-md"
          >
            Ajouter
          </button>
        </form>
      </div>
    </>
  );
}
