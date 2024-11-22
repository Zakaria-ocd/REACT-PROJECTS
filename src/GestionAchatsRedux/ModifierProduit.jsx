import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modifierProduitAction, modifierSelectedProduitAcion } from "../Redux/actions/productActions";

export default function ModifierProduit() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [produit, setProduit] = useState({
    id: "",
    libelle: "",
    categories: "",
    prix: 0,
    quantite: 0,
  });
  const selectedProduit = useSelector((state) => state.selectedProduit);

  useEffect(() => {
    setProduit({ ...selectedProduit });
  }, [selectedProduit]);
  function onChangeInputs(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "categories") {
      setProduit({
        ...produit,
        [name]: categories.find((item) => value == item.id),
      });
    } else {
      setProduit({ ...produit, [name]: value });
    }
  }
  function handleSave() {
    dispatch(
      modifierSelectedProduitAcion({
        id: "",
        libelle: "",
        categories: { id: "", libelle: "" },
        prix: 0,
        quantite: 0,
      })
    );
    dispatch(modifierProduitAction(produit));
    navigate("/Produits");
  }

  return (
    <>
      <div className="flex justify-evenly h-[400px] mt-10">
        <form
          action=""
          className="flex flex-col justify-evenly items-center  w-80 rounded-md  bg-gray-400"
        >
          <input
            name="id"
            value={produit.id}
            onChange={onChangeInputs}
            type="text"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Id"
          />
          <input
            name="libelle"
            value={produit.libelle}
            onChange={onChangeInputs}
            type="text"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Libéllé"
          />
          <select
            name="categories"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            onChange={onChangeInputs}
            value={produit.categories.id}
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
            name="prix"
            value={produit.prix}
            onChange={onChangeInputs}
            type="number"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="prix"
          />{" "}
          <input
            name="quantite"
            value={produit.quantite}
            onChange={onChangeInputs}
            type="number"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Quantité"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSave();
            }}
            className="bg-blue-600 text-white w-28 h-7 rounded-md"
          >
            Modifier
          </button>
        </form>
      </div>
    </>
  );
}
