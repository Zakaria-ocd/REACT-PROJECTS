
export default function Composant2({salaries}) {
  return (
    <div className="mt-5">
      <label className="text-2xl" htmlFor="">
        Liste des Salariés
      </label>
      <table className="border-2 w-96 border-black">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Fonction</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.nomsal}</td>
                <td>{item.prenomsal}</td>
                <td>{item.fonction}</td>
                <td>{item.service.nomser}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}