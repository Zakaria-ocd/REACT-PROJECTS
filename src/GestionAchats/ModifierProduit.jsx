
import { useNavigate } from "react-router-dom";

export default function ModifierProduit({
  modifierProduits,
  produits,
  setSelectdProduit,
  selectdProduit,
  categories,
}) 
{

const navigate=useNavigate()
function onChangeInputs(e){
    const name=e.target.name
    const value=e.target.value
    setSelectdProduit((preValue) =>{return {...preValue,[name]:value}} )
    if(name=="categories"){
          setSelectdProduit((preValue) => {
            return { ...preValue, [name]: categories.find(item=>value==item.id) };
          });

    }
}
function handleSave(){
    const newProds=produits.map(item=>{
        if(selectdProduit.id==item.id){
         item =selectdProduit}
         return item
    })
    setSelectdProduit({
    id: "",
    libelle: "",
    categories: { id: "", libelle: "" },
    prix:null,
    quantite:null
  })
    modifierProduits(newProds)
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
            value={selectdProduit.id}
            onChange={onChangeInputs}
            type="text"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Id"
          />
          <input
            name="libelle"
            value={selectdProduit.libelle}
            onChange={onChangeInputs}
            type="text"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Libéllé"
          />
          <select
            name="categories"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            onChange={onChangeInputs}
            value={selectdProduit.categories.id}
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
            value={selectdProduit.prix}
            onChange={onChangeInputs}
            type="number"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="prix"
          />{" "}
          <input
            name="quantite"
            value={selectdProduit.quantite}
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
