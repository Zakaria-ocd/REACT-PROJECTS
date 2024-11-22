import { useState } from "react";

export default function Composant1() {
  const [infos, setInfos] = useState({
    matricule: "",
    marque: "",
    dateMiseEnCirculation: "",
    couleur: "",
  });
  const [afficherInfos, setAfficherInfos] = useState({
    matricule: "",
    marque: "",
    dateMiseEnCirculation: "",
    couleur: "",
  });
  return (
      <div className="w-[400px] px-4  text-gray-700 bg-teal-500/70 rounded mt-10 ">
        <form action="" className="flex flex-col ">
          <label htmlFor="" className="font-bold text-2xl">
            Gestion Voitures
          </label>
          <label htmlFor="">Matricule :</label>
          <input
            onChange={(e) => {
              setInfos({ ...infos, matricule: e.target.value });
            }}
            value={infos.matricule}
            type="text"
            className="pl-2 outline-none  border-2 border-gray-700/40  rounded bg-slate-50 "
          />
          <label htmlFor="">Marque :</label>
          <select
            onChange={(e) => {
              setInfos({ ...infos, marque: e.target.value });
            }}
            value={infos.marque}
            className="pl-2 outline-none border-2 border-gray-700/40  rounded bg-slate-50 "
          >
            <option value="toyota">Toyota</option>
            <option value="mercedeces">Mercedeces</option>
            <option value="dacia">Dacia</option>
            <option value="bmw">Bmw</option>
          </select>
          <label htmlFor="">Date de mise en circulation :</label>
          <input
            onChange={(e) => {
              setInfos({ ...infos, dateMiseEnCirculation: e.target.value });
            }}
            value={infos.dateMiseEnCirculation}
            type="date"
            className="pl-2 outline-none border-2 border-gray-700/40  rounded bg-slate-50 "
          />
          <label htmlFor="">Couleur :</label>
          <input
            onChange={(e) => {
              setInfos({ ...infos, couleur: e.target.value });
            }}
            value={infos.couleur}
            type="text"
            className="pl-2 outline-none border-2 border-gray-700/40  rounded bg-slate-50 "
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              setAfficherInfos(infos);
              setInfos({
                matricule: "",
                marque: "",
                dateMiseEnCirculation: "",
                couleur: "",
              });
            }}
            className="mt-2 flex justify-center items-center bg-gray-700 text-white w-20 h-8 rounded-md  "
          >
            Confirmer
          </button>
        </form>
        <div className="h-40 mt-7">
          <label className="text-2xl font-bold" htmlFor="">
            Récapitulatif des informations :
          </label>
          <ul className=" list-disc pl-7 flex flex-col h-28 justify-evenly">
            <li className="">Matricule :{afficherInfos.matricule}</li>
            <li>Marque :{afficherInfos.marque}</li>
            <li>Date Mise en circulation :{afficherInfos.dateMiseEnCirculation}</li>
            <li>Couleur :{afficherInfos.couleur}</li>
          </ul>
        </div>
      </div>
  );
}
