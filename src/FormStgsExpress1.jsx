import { useEffect, useState } from "react";

export default function FormStgsExpress1() {
  const [filieres, setFilieres] = useState([]);
  const [editId, setEditId] = useState("");
  const [stagiaire, setStagiaire] = useState({
    id: "",
    nom: "",
    prenom: "",
    age: "",
    filiere: "",
    groupe: "",
  });
  const [stagiaires, setStagiaires] = useState([]);
  const [groupes, setGroupes] = useState([]);
  const [groupeUpdated, setGroupeUpdated] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/filieres")
      .then((response) => response.json())
      .then((data) => {
        setFilieres(data);
      });
    fetch("http://localhost:3000/groupes")
      .then((response) => response.json())
      .then((data) => {
        setGroupes(data);
      });
  }, []);

  useEffect(() => {
    setGroupeUpdated(groupes.filter((item) => item.filiereId == 1));
  }, [groupes]);

  function ajouter() {
    let newStagiaire = !stagiaire.filiere
      ? {
          ...stagiaire,
          filiere: { id: filieres[0].id, name: filieres[0].name },
        }
      : { ...stagiaire };
    !stagiaire.groupe
      ? (newStagiaire = {
          ...newStagiaire,
          groupe: { id: groupeUpdated[0].id, name: groupeUpdated[0].name },
        })
      : { ...newStagiaire };
    if (editId) {
      setStagiaires(
        stagiaires.map((stagiaire) =>
          stagiaire.id == editId ? newStagiaire : stagiaire
        )
      );
      setEditId(false);
    } else {
      setStagiaires([...stagiaires, newStagiaire]);
    }
    setGroupeUpdated(groupes.filter((item) => item.filiereId == 1));

    setStagiaire({
      id: "",
      nom: "",
      prenom: "",
      age: "",
      filiere: filieres[0],
      groupe: "",
    });
  }
  return (
    <>
      <div className="w-full flex flex-col mt-10 items-center">
        <form className="flex flex-col w-72 items-center gap-[2px]" action="">
          <label htmlFor="">Id</label>
          <input
            className="bg-slate-300 rounded-md w-48 h-7 "
            value={stagiaire.id}
            onChange={(e) => {
              setStagiaire({ ...stagiaire, id: e.target.value });
            }}
            type="text"
          />
          <label htmlFor="">Nom</label>
          <input
            className="bg-slate-300 rounded-md w-48 h-7"
            value={stagiaire.nom}
            onChange={(e) => {
              setStagiaire({ ...stagiaire, nom: e.target.value });
            }}
            type="text"
          />
          <label htmlFor="">Prénom</label>
          <input
            className="bg-slate-300 rounded-md w-48 h-7"
            value={stagiaire.prenom}
            onChange={(e) => {
              setStagiaire({ ...stagiaire, prenom: e.target.value });
            }}
            type="text"
          />
          <label htmlFor="">Age</label>
          <input
            className="bg-slate-300 rounded-md w-48 h-7"
            value={stagiaire.age}
            onChange={(e) => {
              setStagiaire({ ...stagiaire, age: e.target.value });
            }}
            type="number"
          />
          <label htmlFor="">Filiere</label>
          <select
            className="bg-slate-300 rounded-md w-48 h-7"
            value={stagiaire.filiere.name}
            onChange={(e) => {
              const filiere = filieres.find(
                (item) => item.name == e.target.value
              );
              let groupeNames = groupes.filter(
                (item) => item.filiereId == filiere.id
              );
              setGroupeUpdated(groupeNames);
              setStagiaire({
                ...stagiaire,
                filiere: { id: filiere.id, name: e.target.value },
                groupe: { id: groupeNames[0].id, name: groupeNames[0].name },
              });
            }}
            type="text"
          >
            {filieres.map((item) => (
              <option key={item.id} className="text-center">
                {item.name}
              </option>
            ))}
          </select>
          <label htmlFor="">Groupe</label>

          <select
            className="bg-slate-300 rounded-md w-48  h-7"
            value={stagiaire.groupe.name}
            onChange={(e) => {
              setStagiaire({
                ...stagiaire,
                groupe: {
                  id: groupeUpdated[0].filiereId,
                  name: e.target.value,
                },
              });
            }}
            type="text"
          >
            {groupeUpdated.map((item) => (
              <option key={item.id} className="text-center">
                {item.name}
              </option>
            ))}
          </select>

          <button
            onClick={(e) => {
              e.preventDefault();
              ajouter();
            }}
            className="bg-cyan-600 w-20 h-7 mt-3 rounded-sm text-white"
          >
            Ajouter
          </button>
        </form>

        <table className="w-[600px] border-green-600 mt-7">
          <thead className="border-[3px] border-green-600 ">
            <tr className="h-10">
              <th className="border-[3px] border-green-600 ">Id</th>
              <th className="border-[3px] border-green-600 ">Nom</th>
              <th className="border-[3px] border-green-600 ">Prenom</th>
              <th className="border-[3px] border-green-600 ">Age</th>
              <th className="border-[3px] border-green-600 ">Filiere</th>
              <th className="border-[3px] border-green-600 ">Groupe</th>

              <th className=" ">Action</th>
            </tr>
          </thead>
          <tbody>
            {stagiaires.map((item) => {
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
                    {item.filiere.name}
                  </td>
                  <td className="border-[3px] border-green-600 ">
                    {item.groupe.name}
                  </td>
                  <td className="flex justify-evenly items-center ">
                    <button
                      onClick={function (e) {
                        e.preventDefault();
                        setGroupeUpdated(
                          groupes.filter(
                            (groupe) => groupe.filiereId == item.filiere.id
                          )
                        );
                        setStagiaire(item);

                        setEditId(item.id);
                      }}
                      className="bg-cyan-600 rounded-lg text-white w-24 h-8"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={function (e) {
                        e.preventDefault();
                        setStagiaires(
                          stagiaires.filter(
                            (stagiaire) => stagiaire.id !== item.id
                          )
                        );
                      }}
                      className="bg-red-600 rounded-lg text-white w-24 h-8"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
