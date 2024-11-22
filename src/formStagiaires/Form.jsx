import Inputs from "./Inputs";
export default function Form({
  stagiaires,
  setStagiaires,
  stagiaire,
  setStagiaire,

  setEditId,
  editId,
}) {
  const groupes = [
    { id: 1, nom: "TDD101" },
    { id: 2, nom: "TDD102" },
    { id: 3, nom: "TDD103" },
    { id: 4, nom: "TDD104" },
    { id: 5, nom: "TDD105" },
    { id: 6, nom: "TDD106" },
  ];

  function handleSave(e) {
    e.preventDefault();
    if (editId) {
      setStagiaires(
        stagiaires.map((item) => (item.id === editId ? stagiaire : item))
      );
      setEditId(false);
    } else {
      setStagiaires([...stagiaires, stagiaire]);
    }

    setStagiaire({
      id: "",
      nom: "",
      prenom: "",
      age: "",
      gender: "",
      groupe: "",
      sport: [],
    });
  }
  return (
    <div className="h-screen rounded-xl flex justify-center items-center w-1/2">
      <form action="" className="h-[28rem] px-3  w-80 rounded-md bg-stone-300">
        <div className="h-20 flex   items-center justify-between ">
          <Inputs
            placeHolder={"Nom"}
            value={stagiaire.nom}
            onChange={(e) => {
              setStagiaire({ ...stagiaire, nom: e.target.value });
            }}
            name="nom"
            width={"140px"}
          />
          <Inputs
            placeHolder={"Id"}
            value={stagiaire.id}
            name="id"
            width={"140px"}
            onChange={(e) => {
              setStagiaire({ ...stagiaire, id: e.target.value });
            }}
          />
        </div>
        <div className="flex   items-center justify-between ">
          <Inputs
            placeHolder={"Prenom"}
            value={stagiaire.prenom}
            name="prenom"
            width={"140px"}
            onChange={(e) => {
              setStagiaire({ ...stagiaire, prenom: e.target.value });
            }}
          />
          <Inputs
            placeHolder={"Age"}
            type="number"
            name="age"
            value={stagiaire.age}
            width={"140px"}
            onChange={(e) => {
              setStagiaire({ ...stagiaire, age: e.target.value });
            }}
          />
        </div>

        <br />
        <div className=" font-semibold ">Gender</div>
        <div className="mt-[5px] w-44 justify-between flex items-center">
          <Inputs
            labelName={"Masculin"}
            type="radio"
            style="  hover:shadow-none cursor-pointer"
            value={"Masculin"}
            name="gender"
            onChange={(e) => {
              setStagiaire({ ...stagiaire, gender: e.target.value });
            }}
            checked={stagiaire.gender == "Masculin"}
          />
          <Inputs
            labelName="Féminin"
            name="gender"
            type="radio"
            style="  hover:shadow-none cursor-pointer"
            value={"Féminin"}
            checked={stagiaire.gender == "Féminin"}
            onChange={(e) => {
              setStagiaire({ ...stagiaire, gender: e.target.value });
            }}
          />
        </div>
        <div className="mt-[10px] font-semibold ">Groupe</div>
        <select
          onChange={(e) => {
            setStagiaire({ ...stagiaire, groupe: e.target.value });
          }}
          value={stagiaire.groupe}
          name="groupe"
          className="mt-[10px] cursor-pointer w-24 rounded-md"
        >
          {groupes.map((groupe) => {
            return (
              <option key={groupe.id} value={groupe.nom}>
                {groupe.nom}
              </option>
            );
          })}
        </select>
        <div className="mt-[10px] font-semibold ">Sport</div>
        <div className="mt-[5px] w-full justify-between flex items-center">
          <Inputs
            labelName="Football"
            name="sport"
            type="checkbox"
            style="  hover:shadow-none cursor-pointer"
            value={"football"}
            checked={
              stagiaire.sport.find((item) => {
                return item == "football";
              }) == "football"
                ? true
                : false
            }
            onChange={(e) => {
              setStagiaire({
                ...stagiaire,
                sport: !e.target.checked
                  ? stagiaire.sport.filter((item) => {
                      return item != e.target.value;
                    })
                  : [...stagiaire.sport, e.target.value],
              });
            }}
          />
          <Inputs
            labelName="Volleyball"
            name="sport"
            type="checkbox"
            style="  hover:shadow-none cursor-pointer"
            value={"volleyball"}
            checked={
              stagiaire.sport.find((item) => {
                return item == "volleyball";
              }) == "volleyball"
                ? true
                : false
            }
            onChange={(e) => {
              setStagiaire({
                ...stagiaire,
                sport: !e.target.checked
                  ? stagiaire.sport.filter((item) => {
                      return item != e.target.value;
                    })
                  : [...stagiaire.sport, e.target.value],
              });
            }}
          />
          <Inputs
            labelName="Handball"
            name="sport"
            type="checkbox"
            style="  hover:shadow-none cursor-pointer"
            value={"handball"}
            checked={
              stagiaire.sport.find((item) => {
                return item == "handball";
              }) == "handball"
                ? true
                : false
            }
            onChange={(e) => {
              setStagiaire({
                ...stagiaire,
                sport: !e.target.checked
                  ? stagiaire.sport.filter((item) => {
                      return item != e.target.value;
                    })
                  : [...stagiaire.sport, e.target.value],
              });
            }}
          />
        </div>
        <div className="mt-[15px] w-full justify-center flex items-center">
          <Inputs
            type="submit"
            style="flex items-center justify-center bg-blue-700 text-white w-32 pl-0 cursor-pointer"
            value={editId ? "Modifier" : "Ajouter"}
            onClick={handleSave}
          />
        
        </div>
      </form>
    </div>
  );
}
