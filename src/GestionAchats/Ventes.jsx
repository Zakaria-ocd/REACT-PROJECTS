// import Menu from "./Menu";


// export default function Ventes(){



//     return(
//         <>
//               <div className="w-full flex justify-between h-56 flex-col items-center">
//         <Menu></Menu>
//         <div className="produits">
//           <table className="border-2 w-[500px] text-center border-black">
//             <thead>
//               <tr>
//                 <th>Id</th>
//                 <th>Libelle</th>
//                 <th>Categorie</th>
//                 <th>Prix</th>
//                 <th>Quantite</th>
//                 <th>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {.map((item, index) => {
//                 return (
//                   <tr
//                     className={`${
//                       item.id == selectdProduit.id ? "bg-slate-400" : "bg-white"
//                     } cursor-pointer`}
//                     onClick={() => {
//                       setSelectdProduit(item);
//                     }}
//                     key={index}
//                   >
//                     <td>{item.id}</td>
//                     <td>{item.libelle}</td>
//                     <td>{item.categories.libelle}</td>
//                     <td>{item.prix}</td>
//                     <td>{item.quantite}</td>
//                     <td>{item.prix * item.quantite}</td>
//                   </tr>
//                 );
//               })}
//                 </tbody>
//                 </table>
//                 </div>
//                 </div>


//         </>
//     )
// }