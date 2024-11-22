import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Produits({
  produits,
  setSelectdProduit,
  selectdProduit,
  setProduits,
}) {
  function handleDelete() {
    setProduits(
      produits.filter((produit) => produit.id != selectdProduit.id)
    );
  }
  function handleRediuce() {
    let reduireProduit=''
    setProduits(
      produits.map((produit) => {
        if(produit.id==selectdProduit.id){
          produit={...produit,quantite:produit.quantite-1}
          reduireProduit=produit
        }
        return produit
      })
    );
    console.log(selectdProduit.quantite+1);
    if(reduireProduit.quantite==0){
      setProduits(
        produits.filter((produit) => produit.id != selectdProduit.id)
      );
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
                      item.id == selectdProduit.id ? "bg-slate-400" : "bg-white"
                    } cursor-pointer`}
                    onClick={() => {
                      setSelectdProduit(item);
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
                      to={"/Produits/AjouterProduit"}
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
                    onClick={handleRediuce}
                      className="bg-yellow-500 w-36 px-3 py-2 ml-8 rounded-lg text-white"
                    >
                      Réquire quantité
                    </Link>
                    <Link
                      to={"/Produits/ModifierProduit"}
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
