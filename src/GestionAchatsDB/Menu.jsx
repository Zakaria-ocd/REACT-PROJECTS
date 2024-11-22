import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="flex w-full  justify-center p-5">
        <ul className="w-60 flex justify-between ">
          <li className="cursor-pointer">
            <Link to={"/Produits"}>Produits</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/Ventes"}>Ventes</Link>
          </li>
          <li className="cursor-pointer">Achats</li>
          <li className="cursor-pointer">Clients</li>
        </ul>
      </div>
    </>
  );
}
