export default function Table({
  stagiaires,
  setStagiaire,
  setStagiaires,
  deletedStagiaires,
  setDeletedStagiaires,
  setEditId,
}) {
  return (
    <>
      <div className=" bg-stone-300  min-h-screen w-1/2 flex flex-col items-center justify-center">
        <div className="relative overflow-x-auto shadow-md w-full ">
          <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Nom Complet
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Groupe</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Age</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Gender</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">SPORT</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {stagiaires.map((stagiaireInfos) => {
                return (
                  <tr
                    className="bg-zinc-600/60   text-white"
                    key={stagiaireInfos.id}
                  >
                    <td className="px-6 py-4">{stagiaireInfos.id}</td>
                    <td className="px-6 py-4">
                      {stagiaireInfos.nom} {stagiaireInfos.prenom}
                    </td>
                    <td className="px-6 py-4">{stagiaireInfos.groupe}</td>
                    <td className="px-6 py-4">{stagiaireInfos.age}</td>
                    <td className="px-6 py-4">{stagiaireInfos.gender}</td>
                    <td className="px-6 py-4">
                      {stagiaireInfos.sport.map((item) => {
                        return item + " ";
                      })}
                    </td>
                    <td className="px-6 flex justify-between  py-4 text-right">
                      <a
                        onClick={function () {
                          setStagiaire(
                            stagiaires.find(
                              (item) => stagiaireInfos.id === item.id
                            )
                          );

                          setEditId(stagiaireInfos.id);
                        }}
                        className="-ml-6 cursor-pointer font-medium text-green-700  hover:underline"
                      >
                        Edit
                      </a>
                      <input
                        onChange={(e) => {
                          if (e.target.checked) {
                            setDeletedStagiaires([
                              ...deletedStagiaires,
                              stagiaireInfos.id,
                            ]);
                          } else {
                            setDeletedStagiaires(
                              deletedStagiaires.filter((item) => {
                                return item.id != stagiaireInfos.id;
                              })
                            );
                          }
                        }}
                        type="checkbox"
                        className="ml-8"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => {
            console.log(deletedStagiaires)
            setStagiaires(
              stagiaires.filter((item) => !deletedStagiaires.includes(item.id))
            );
          }}
          className="bg-red-700 h-7 text-white  rounded-md"
        >
          Supprimer
        </button>
      </div>
    </>
  );
}
