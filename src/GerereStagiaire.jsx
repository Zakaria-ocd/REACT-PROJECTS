import { useState } from "react";

export default function GerereStagiaire() {
  const [formStagiaire, setFormStagiaire] = useState({
    id: "",
    nom: "",
    prenom: "",
    age: "",
    groupe: "",
  });
  const [formStagiaires, setFormStagiaires] = useState([]);
  const [deletedStagiaires, setDeletedStagiaires] = useState([]);
  const [editId, setEditId] = useState("");

  function ajouter(e) {
    e.preventDefault();

    if (editId) {
      setFormStagiaires(
        formStagiaires.map((item) =>
          item.id === editId ? formStagiaire : item
        )
      );
      setEditId("");
    } else {
      setFormStagiaires([...formStagiaires, formStagiaire]);
    }

    setFormStagiaire({
      id: "",
      nom: "",
      prenom: "",
      age: "",
      groupe: "",
    });
  }

  return (
    <div className="w-full flex flex-col items-center">
      <form className="flex flex-col w-72 bg-slate-300" action="">
        <label htmlFor="">Id</label>
        <input
          value={formStagiaire.id}
          onChange={(e) => {
            setFormStagiaire({ ...formStagiaire, id: e.target.value });
          }}
          type="text"
        />
        <label htmlFor="">Nom</label>
        <input
          value={formStagiaire.nom}
          onChange={(e) => {
            setFormStagiaire({ ...formStagiaire, nom: e.target.value });
          }}
          type="text"
        />
        <label htmlFor="">Prénom</label>
        <input
          value={formStagiaire.prenom}
          onChange={(e) => {
            setFormStagiaire({ ...formStagiaire, prenom: e.target.value });
          }}
          type="text"
        />
        <label htmlFor="">Age</label>
        <input
          value={formStagiaire.age}
          onChange={(e) => {
            setFormStagiaire({ ...formStagiaire, age: e.target.value });
          }}
          type="number"
        />
        <label htmlFor="">Groupe</label>
        <input
          value={formStagiaire.groupe}
          onChange={(e) => {
            setFormStagiaire({ ...formStagiaire, groupe: e.target.value });
          }}
          type="text"
        />
        <button onClick={ajouter}>{editId ? "Modifier" : "Ajouter"}</button>
      </form>

      <table className="w-[600px] border-green-600 mt-7">
        <thead className="border-[3px] border-green-600 ">
          <tr className="h-10">
            <th className="border-[3px] border-green-600 ">Id</th>
            <th className="border-[3px] border-green-600 ">Nom</th>
            <th className="border-[3px] border-green-600 ">Prenom</th>
            <th className="border-[3px] border-green-600 ">Age</th>
            <th className="border-[3px] border-green-600 ">Groupe</th>
            <th className=" ">Action</th>
          </tr>
        </thead>
        <tbody>
          {formStagiaires.map((item) => {
            return (
              <tr
                className="h-12 w-[600px] border-[3px] border-green-600"
                key={item.id}
              >
                <td className="border-[3px] border-green-600 ">{item.id}</td>
                <td className="border-[3px] border-green-600 ">{item.nom}</td>
                <td className="border-[3px] border-green-600 ">
                  {item.prenom}
                </td>
                <td className="border-[3px] border-green-600 ">{item.age}</td>
                <td className="border-[3px] border-green-600 ">
                  {item.groupe}
                </td>
                <td className="flex justify-evenly items-center ">
                  <button
                    onClick={function (e) {
                      e.preventDefault();
                      setFormStagiaire(
                        formStagiaires.find(
                          (stagiaire) => stagiaire.id === item.id
                        )
                      );
                      setEditId(item.id);
                    }}
                    className="bg-cyan-600 rounded-lg text-white w-24 h-8"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={function (e) {
                      e.preventDefault();
                      setFormStagiaires(
                        formStagiaires.filter(
                          (stagiaire) => stagiaire.id !== item.id
                        )
                      );
                    }}
                    className="bg-red-600 rounded-lg text-white w-24 h-8"
                  >
                    Supprimer
                  </button>
                </td>
                <td className="border-l-[3px] w-10 pl-3   border-green-600">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDeletedStagiaires([...deletedStagiaires, item.id]);
                      } else {
                        setDeletedStagiaires(
                          deletedStagiaires.filter(
                            (stagiaire) => stagiaire != item.id
                          )
                        );
                      }
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
