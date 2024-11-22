import { useEffect, useState } from "react";

export default function AppEfm() {
  const [stagiaires, setStagiaires] = useState([]);
  const [stagiaire, setStagiaire] = useState({
    id: null,
    matricule: "",
    nom: "",
    ville: "",
    codePostal: null,
    moyenne: null,
  });

  useEffect(() => {
 

    setStagiaires(initialStagiaires);
  }, []);

  useEffect(
    function () {
      
      if (stagiaires.length > 0) {
        setStagiaire((preValue)=>{return {
          ...preValue,
          id: preValue[stagiaires.length - 1].id + 1,
        }});
      } else {
        setStagiaire((preValue)=>{return {
          ...preValue,
          id: 1,
        }});
      }
    },
    [stagiaires.length]
  );

  function onInputChange(e) {
    let name = e.target.name;
    let val = e.target.value;
    let _stagiaire = { ...stagiaire };
    _stagiaire[name] = val;
    setStagiaire(_stagiaire);
  }

  function ajouterStagiaire(e) {
    e.preventDefault();
    //Conditions
    let stagiaireExist = stagiaires.find(function (item) {
      return item.matricule == stagiaire.matricule;
    });
    if (!stagiaireExist) {
      setStagiaires([...stagiaires, stagiaire]);
      viderInputs();
    } else {
      alert("Ce stagiaire  existe dèja");
    }
  }

  function viderInputs() {
    setStagiaire({
      ...stagiaire,
      matricule: "",
      nom: "",
      ville:"",
      codePostal: "",
      moyenne: "",
    });
  }
  return (
    <>
      <div className="w-full flex justify-center pt-10">
        <div className="w-80 flex flex-col s-center">
          <div className="flex justify-center flex-col">
            <h1 className="text-center">Listes des Stagiaires</h1>
            <table className="border-2 border-black">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Matricule</th>
                  <th>Nom</th>
                  <th>Ville</th>
                  <th>CodePostal</th>
                  <th>Moyenne</th>
                  <th>Supprimer</th>
                  <th>Editer</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <div>
            <form className="flex flex-col h-72 justify-evenly">
              <div className="flex justify-between">
                <label htmlFor="">Id</label>
                <input
                  value={stagiaire.id}
                  name="id"
                  className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
                  type="number"
                  readOnly
                  onChange={onInputChange}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="">Matricule</label>
                <input
                  value={stagiaire.matricule}
                  name="matricule"
                  className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
                  type="text"
                  onChange={onInputChange}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="">Nom</label>
                <input
                  value={stagiaire.nom}
                  name="nom"
                  className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
                  type="text"
                  onChange={onInputChange}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="">Ville</label>
                <input
                  value={stagiaire.ville}
                  name="ville"
                  className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
                  type="text"
                  onChange={onInputChange}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="">CodePostal</label>
                <input
                  value={stagiaire.codePostal}
                  name="codePostal"
                  className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
                  type="number"
                  onChange={onInputChange}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="">Moyenne</label>
                <input
                  value={stagiaire.moyenne}
                  name="moyenne"
                  className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
                  type="number"
                  onChange={onInputChange}
                />
              </div>
              <p className="text-red-700 text-xs"></p>
              <div className="flex space-x-7">
                <button
                  className="mt-2 w-20 flex justify-center s-center bg-gray-700 text-white  h-8 rounded-md  "
                  onClick={ajouterStagiaire}
                >
                  Ajouter
                </button>
                <button className="mt-2 flex justify-center s-center bg-gray-700 text-white w-36 h-8 rounded-md  ">
                  Filtrer ville et nom
                </button>
                <button
                  className="mt-2 flex justify-center s-center bg-gray-700 text-white w-20 h-8 rounded-md  "
                  onClick={(e) => {
                    e.preventDefault();
                    viderInputs();
                  }}
                >
                  Vider
                </button>
                <button className="mt-2 flex justify-center s-center bg-gray-700 text-white w-40 h-8 rounded-md  ">
                  Initialiser recherche
                </button>
              </div>
              {/* <ul className="list-disc">
                <li>La Moyenne générale la plus Elévée:</li>
                <li>La Moyenne générale la moins Elévée:</li>
                <li>La Moyenne de la classe:</li>
              </ul>
              <ul className="list-disc">
                return (
                <>
                  {" "}
                  <li>Id:</li>
                  <li>Matricule:</li>
                  <li>Nom:</li>
                  <li>Ville:</li>
                  <li>Codepostal:</li>
                  <li>Moyenne:</li>
                </>
                );
              </ul> */}
              {/* ) : (<h1 className="text-red-700">Tableau de recherche vide</h1>) */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
