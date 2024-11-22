function Affiche({ produits }) {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-10 h-screen space-y-10">
        <h1>Liste des produits</h1>
        <table className="border-2 border-black w-[90%]">
          <thead>
            <th className="border-2 border-black">Référence</th>
            <th className="border-2 border-black">Nom Produit</th>
            <th className="border-2 border-black">Description</th>
            <th className="border-2 border-black">Prix</th>
            <th className="border-2 border-black">Catégorie</th>
            <th className="border-2 border-black">Image</th>
          </thead>
          <tbody>
            {produits.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="border-2 border-black">{item.id}</td>
                  <td className="border-2 border-black">{item.nomP}</td>
                  <td className="border-2 border-black">{item.descP}</td>
                  <td className="border-2 border-black">{item.prixP}</td>
                  <td className="border-2 border-black">{item.categorie.nomC}</td>
                  <td className="border-2 border-black">{item.thumbnail}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Affiche;
