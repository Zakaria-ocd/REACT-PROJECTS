import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import {
  modifierProduitAction,
  modifierSelectedProduitAcion,
  supprimerProduitAction,
} from "./../Redux/actions/productActions";

export default function Produits() {
  const produits = useSelector((state) => state.produits);
  const dispatch = useDispatch();
  const selectedProduit = useSelector((state) => state.selectedProduit);
  function modifierSelectedProduit(produit) {
    dispatch(modifierSelectedProduitAcion(produit));
  }

  function handleDelete() {
    dispatch(supprimerProduitAction(selectedProduit.id));
  }

  function handleReduce() {
    const reducedProduit = {
      ...selectedProduit,
      quantite: selectedProduit.quantite - 1,
    };
    dispatch(
      modifierProduitAction(reducedProduit)
    );
    modifierSelectedProduit(reducedProduit);
    if (reducedProduit.quantite == 0) {
      dispatch(supprimerProduitAction(selectedProduit.id));
    }
  }
  return (
    <>
      <div className="w-full flex justify-between h-56 flex-col items-center">
        <Menu></Menu>
        <div className="produits">
          <table className="border-2 w-[500px] text-center border-black">
            <thead>
              <tr>
                <th>Id</th>
                <th>Libelle</th>
                <th>Categorie</th>
                <th>Prix</th>
                <th>Quantite</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {produits.map((item, index) => {
                return (
                  <tr
                    className={`${
                      item.id == selectedProduit.id
                        ? "bg-slate-400"
                        : "bg-white"
                    } cursor-pointer`}
                    onClick={() => {
                      modifierSelectedProduit(item);
                    }}
                    key={index}
                  >
                    <td>{item.id}</td>
                    <td>{item.libelle}</td>
                    <td>{item.categories.libelle}</td>
                    <td>{item.prix}</td>
                    <td>{item.quantite}</td>
                    <td>{item.prix * item.quantite}</td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={5}>
                  <div className="h-12 flex justify-center items-center">
                    <Link
                      to={"/produits/AjouterProduit"}
                      className="bg-green-500 px-3 py-2 ml-8  rounded-lg text-white"
                    >
                      Ajouter
                    </Link>
                    <Link
                      onClick={handleDelete}
                      className="bg-red-500 px-3 py-2 ml-8 rounded-lg text-white"
                    >
                      Supprimer
                    </Link>

                    <Link
                      onClick={handleReduce}
                      className="bg-yellow-500 w-36 px-3 py-2 ml-8 rounded-lg text-white"
                    >
                      Réquire quantité
                    </Link>
                    <Link
                      to={"/produits/ModifierProduit"}
                      className="bg-yellow-500 px-3 py-2 ml-8 rounded-lg text-white"
                    >
                      Modifier
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
