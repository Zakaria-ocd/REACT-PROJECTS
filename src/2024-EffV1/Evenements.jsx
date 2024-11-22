export default function Evenements({ evenements }) {
  let totalCouts = 0;
  return (
    <div>
      <table className="border-4 ">
        <thead>
          <tr>
            <th className="border-4 ">Thème</th>
            <th className="border-4 ">Date de début</th>
            <th className="border-4 ">Date de fin</th>
            <th className="border-4 ">Description</th>
            <th className="border-4 ">Coût journalier</th>
            <th className="border-4 ">Durée (jours)</th>
            <th className="border-4 ">Coût Total Evénements</th>
          </tr>
        </thead>
        <tbody>
          {evenements.map((item, index) => {
            {
              totalCouts += item.durée * item.cout_journalier;
            }

            return (
              <tr key={index}>
                <td className="border-4 ">{item.thème}</td>
                <td className="border-4 ">{item.date_debut}</td>
                <td className="border-4 ">{item.date_fin}</td>
                <td className="border-4 ">{item.description}</td>
                <td className="border-4 ">{item.cout_journalier}</td>
                <td className="border-4 ">{item.durée}</td>
                <td className="border-4 ">
                  {item.durée * item.cout_journalier}
                </td>{" "}
              </tr>
            );
          })}
          <tr>
            <td colSpan={7} className="border-4 ">
              Total des coûts des événements assurés est : {totalCouts} DH
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
