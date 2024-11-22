import { useState } from "react";

export default function RevApp() {
  const [client, setClient] = useState({
    id: "",
    nom: "",
    prenom: "",
    cout: "",
    quantite: "",
  });
  const [clients, setClients] = useState([]);
  const [updateClient, setUpdateClient] = useState(false);
  let total = 0;
  let totalGeneral = 0;
  let color = "";
  function ajouter() {
    if (updateClient) {
      setClients(clients.map((item)=>{
         if(item.id==updateClient){
          item={...client}
         }
         return item
      }))
      setUpdateClient(false)
    } else {
      setClients([...clients, client]);
    }

    setClient({
      id: "",
      nom: "",
      prenom: "",
      cout: "",
      quantite: "",
    });
  }
  return (
    <>
      <div className="flex justify-evenly h-[400px] mt-10">
        <form
          action=""
          className="flex flex-col justify-evenly items-center  w-80 rounded-md  bg-gray-400"
        >
          <input
            value={client.id}
            onChange={(e) => {
              setClient({ ...client, id: e.target.value });
            }}
            type="text"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Id"
          />
          <input
            value={client.nom}
            onChange={(e) => {
              setClient({ ...client, nom: e.target.value });
            }}
            type="text"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Nom"
          />
          <input
            value={client.prenom}
            onChange={(e) => {
              setClient({ ...client, prenom: e.target.value });
            }}
            type="text"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Prénom"
          />
          <input
            value={client.cout}
            onChange={(e) => {
              setClient({ ...client, cout: e.target.value });
            }}
            type="number"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Coût"
          />{" "}
          <input
            value={client.quantite}
            onChange={(e) => {
              setClient({ ...client, quantite: e.target.value });
            }}
            type="number"
            className="w-40 pl-3 outline-none h-8 rounded-md"
            placeholder="Quantité"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              ajouter();
            }}
            className="bg-blue-600 text-white w-28 h-7 rounded-md"
          >
            Ajouter
          </button>
        </form>
        <div className="relative w-[600px] flex flex-col   text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
          <table className="w-[600px] text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Id
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Nom
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Prenom
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Cout
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Quantité
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Total
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((item, index) => {
                total = item.quantite * item.cout;
                totalGeneral += total;
                if (total < 10) {
                  color = { color: "red" };
                } else if (total >= 10 && total < 100) {
                  color = { color: "blue" };
                } else {
                  color = { color: "green" };
                }
                return (
                  <tr key={index}>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {item.id}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {item.nom}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {item.prenom}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {item.cout}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {item.quantite}
                      </p>
                    </td>
                    <td className="p-4">
                      <p
                        style={color}
                        className="block  font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                      >
                        {total}
                      </p>
                    </td>
                    <td className="p-4 flex justify-between">
                      <a
                        onClick={() => {
                          setClient(item);
                          setUpdateClient(item.id);
                        }}
                        href="#"
                        className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          setClients(
                            clients.filter((client) => {
                              return client.id != item.id;
                            })
                          );
                        }}
                        href="#"
                        className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={6} className="bg-gray-300">
                  Total général :{totalGeneral}{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
