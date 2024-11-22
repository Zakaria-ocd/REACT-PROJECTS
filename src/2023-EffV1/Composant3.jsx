import { useState } from "react";

export default function Composant3({ salaries }) {
  const [inputValue, setInputValue] = useState("");
  const [salariesAffecte, setSalariesAffecte] = useState([]);
  function chercher() {

    setSalariesAffecte(
      
        salaries.filter((item) => item.service.nomser == inputValue)
    );
    setInputValue("")
  }
  console.log(salariesAffecte==true)
  return (
    <div className="mt-7 h-60 rounded bg-slate-400 pt-2 px-4">
      <h1 className="text-2xl w-[400px]">Recherche par service</h1>
      <form className="flex flex-col " action="">
        <label htmlFor="">Entrer le nom du service</label>
        <input
        value={inputValue}
          className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="mt-2 flex justify-center items-center bg-gray-700 text-white w-20 h-8 rounded-md  "
          onClick={(e) => {
            e.preventDefault();
            chercher();
          }}
        >
          Chercher
        </button>
      </form>
      <h1>Résultat</h1>
      <ul className="list-disc pl-6">
        {salariesAffecte.length>0 ? 
          salariesAffecte.map((item, index) => {
            return (
              <li key={index}>
                Nom :{item.nomsal} Prénom :{item.prenomsal}
              </li>
            );
          })
         : 
         <h1 className="text-lg">Aucun salarié n est affecté à ce servide</h1>
        }
      </ul>
    </div>
  );
}
