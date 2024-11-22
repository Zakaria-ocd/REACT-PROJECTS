/* 2023 EFM2023 V1*/
import { useState, useEffect } from "react";

export default function AppEfm2023() {
  const [unvalid, setUnvalid] = useState(false);

  const [stagiaires, setStagiaires] = useState([]);

  const [stagiaire, setStagiaire] = useState({
    id: 0,
    matricule: "",
    nom: "",
    ville: "",
    codepostal: "",
    moyenne: 0,
  });

  const [updateId, setUpdateId] = useState(false);

  const [stagiaires2, setStagiaires2] = useState([]);

  let moyenneClass = 0;
  let moyenneGenerale = [];

  useEffect(function () {
    const initialStagiaires = [
      {
        id: 1,
        matricule: 1454,
        nom: "Alaoui",
        codepostal: 20400,
        ville: "casa",
        moyenne: 12.56,
      },
      {
        id: 2,
        matricule: 1455,
        nom: "Mansouri",
        codepostal: 20400,
        ville: "casa",
        moyenne: 14.67,
      },
      {
        id: 3,
        matricule: 1456,
        nom: "El Fassi",
        codepostal: 20300,
        ville: "rabat",
        moyenne: 15.2,
      },
      {
        id: 4,
        matricule: 1457,
        nom: "Naciri",
        codepostal: 20500,
        ville: "marrakech",
        moyenne: 11.45,
      },
      {
        id: 5,
        matricule: 1458,
        nom: "Chafik",
        codepostal: 20200,
        ville: "fes",
        moyenne: 13.75,
      },
    ];
    setStagiaires([...initialStagiaires]);
  }, []);

  useEffect(
    function () {
      if (stagiaires.length > 0) {
        setStagiaire({
          id: stagiaires[stagiaires.length - 1].id + 1,
          matricule: "",
          nom: "",
          ville: "",
          codepostal: "",
          moyenne: 0,
        });
      } else {
        setStagiaire({
          id: 1,
          matricule: "",
          nom: "",
          ville: "",
          codepostal: "",
          moyenne: 0,
        });
      }
    },
    [stagiaires]
  );
  function ajouter() {
    if (updateId) {
      setStagiaires(
        stagiaires.map((item) => {
          if (updateId == item.id) {
            return stagiaire;
          }
          return item;
        })
      );
    } else {
      stagiaire.id &&
      stagiaire.matricule &&
      stagiaire.nom &&
      stagiaire.ville &&
      stagiaire.codepostal &&
      stagiaire.moyenne
        ? setStagiaires([...stagiaires, stagiaire])
        : setUnvalid("Veuillez remplir tous les champs");
    }
  }

  return (
    <>
      {/* 2023 EFM2023 V1 */}
      <div className="w-full flex justify-center pt-10">
        <div className="w-80 flex flex-col items-center">
          <div className="flex justify-center flex-col">
            <h1 className="text-center">Listes des Stagiaires</h1>
            {stagiaires.length > 0 ? (
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
                <tbody>
                  {stagiaires.map((item, index) => {
                    moyenneClass += item.moyenne;
                    moyenneGenerale = [...moyenneGenerale, item.moyenne];
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.matricule}</td>
                        <td>{item.nom}</td>
                        <td>{item.ville}</td>
                        <td>{item.codepostal}</td>
                        <td>{item.moyenne}</td>
                        <td>
                          <button
                            className="mt-2 flex justify-center items-center bg-gray-700 text-white w-20 h-7 rounded-md  "
                            onClick={() => {
                              setStagiaires(
                                stagiaires.filter(
                                  (stagiaire) => stagiaire.id != item.id
                                )
                              );
                            }}
                          >
                            Supprimer
                          </button>
                        </td>
                        <td>
                          <button
                            className="mt-2 flex justify-center items-center bg-gray-700 text-white w-20 h-7 rounded-md  "
                            onClick={() => {
                              setStagiaire(item);
                              setUpdateId(item.id);
                            }}
                          >
                            Editer
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <h1 className="text-red-700 ">Tableau des stagiaires vide</h1>
            )}
          </div>
          <div>
            <form className="flex flex-col h-72 justify-evenly">
              <div className="flex justify-between">
                <label htmlFor="">Id</label>
                <input
                  className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
                  value={stagiaire.id}
                  type="number"
                  readOnly
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="">Matricule</label>
                <input
                  className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
                  onChange={(e) => {
                    if (e.target.value) {
                      setUnvalid("");
                      setStagiaire({
                        ...stagiaire,
                        matricule: e.target.value,
                      });
                    } else {
                      setUnvalid("Veuillez remplir tous les champs");
                      setStagiaire({
                        ...stagiaire,
                        matricule: "",
                      });
                    }
                  }}
                  value={stagiaire.matricule}
                  type="text"
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="">Nom</label>
                <input
                  className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
                  onChange={(e) => {
                    if (e.target.value) {
                      setUnvalid("");
                      setStagiaire({
                        ...stagiaire,
                        nom: e.target.value,
                      });
                    } else {
                      setUnvalid("Veuillez remplir tous les champs");
                      setStagiaire({
                        ...stagiaire,
                        nom: "",
                      });
                    }
                  }}
                  value={stagiaire.nom}
                  type="text"
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="">Ville</label>
                <input
                  className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
                  onChange={(e) => {
                    if (e.target.value) {
                      setUnvalid("");
                      setStagiaire({
                        ...stagiaire,
                        ville: e.target.value,
                      });
                    } else {
                      setUnvalid("Veuillez remplir tous les champs");
                      setStagiaire({
                        ...stagiaire,
                        ville: "",
                      });
                    }
                  }}
                  value={stagiaire.ville}
                  type="text"
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="">CodePostal</label>
                <input
                  className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
                  onChange={(e) => {
                    if (e.target.value) {
                      setUnvalid("");
                      setStagiaire({
                        ...stagiaire,
                        codepostal: e.target.value,
                      });
                    } else {
                      setUnvalid("Veuillez remplir tous les champs");
                      setStagiaire({
                        ...stagiaire,
                        codepostal: "",
                      });
                    }
                  }}
                  value={stagiaire.codepostal}
                  type="number"
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="">Moyenne</label>
                <input
                  className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
                  onChange={(e) => {
                    if (
                      e.target.value &&
                      e.target.value >= 0 &&
                      e.target.value <= 20
                    ) {
                      setUnvalid("");
                      setStagiaire({
                        ...stagiaire,
                        moyenne: e.target.value,
                      });
                    } else {
                      setUnvalid("Veuillez remplir tous les champs");
                      setStagiaire({
                        ...stagiaire,
                        moyenne: "",
                      });
                    }
                  }}
                  value={stagiaire.moyenne}
                  type="number"
                />
              </div>
              <p className="text-red-700 text-xs">{unvalid}</p>
              <div className="flex space-x-7">
                <button
                  className="mt-2 w-20 flex justify-center items-center bg-gray-700 text-white  h-8 rounded-md  "
                  onClick={(e) => {
                    e.preventDefault();
                    ajouter();
                  }}
                >
                  Ajouter
                </button>
                <button
                  className="mt-2 flex justify-center items-center bg-gray-700 text-white w-36 h-8 rounded-md  "
                  onClick={(e) => {
                    e.preventDefault();
                    setStagiaires2(
                      stagiaires.filter((item) => {
                        return (
                          item.nom == stagiaire.nom &&
                          item.ville == stagiaire.ville
                        );
                      })
                    );
                  }}
                >
                  Filtrer ville et nom
                </button>
                <button
                  className="mt-2 flex justify-center items-center bg-gray-700 text-white w-20 h-8 rounded-md  "
                  onClick={(e) => {
                    e.preventDefault();
                    setStagiaire({
                      ...stagiaire,
                      matricule: "",
                      nom: "",
                      ville: "",
                      codepostal: "",
                      moyenne: 0,
                    });
                  }}
                >
                  Vider
                </button>
                <button
                  className="mt-2 flex justify-center items-center bg-gray-700 text-white w-40 h-8 rounded-md  "
                  onClick={(e) => {
                    e.preventDefault();
                    setStagiaires2([]);
                  }}
                >
                  Initialiser recherche
                </button>
              </div>
              <ul className="list-disc">
                <li>
                  La Moyenne générale la plus Elévée:
                  {Math.max(...moyenneGenerale)}
                </li>
                <li>
                  La Moyenne générale la moins Elévée:
                  {Math.min(...moyenneGenerale)}
                </li>
                <li>
                  La Moyenne de la classe: {moyenneClass / stagiaires.length}
                </li>
              </ul>
              {stagiaires2.length > 0 ? (
                <ul className="list-disc">
                  {stagiaires2.map((item) => {
                    return (
                      <>
                        {" "}
                        <li>Id:{item.id}</li>
                        <li>Matricule:{item.matricule}</li>
                        <li>Nom:{item.nom}</li>
                        <li>Ville:{item.ville}</li>
                        <li>Codepostal:{item.codepostal}</li>
                        <li>Moyenne:{item.moyenne}</li>
                      </>
                    );
                  })}
                </ul>
              ) : (
                <h1 className="text-red-700">Tableau de recherche vide</h1>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
