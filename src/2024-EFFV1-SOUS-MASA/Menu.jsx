import { Link } from "react-router-dom";

function Menu() {
    return (
      <>
        <ul className="w-full flex justify-evenly items-center h-36 mt-10">
          <li>
            <Link rel="stylesheet" to="/InfoProd">
              InfoProd
            </Link>
          </li>
          <li>
            <Link rel="stylesheet" to="/Affiche">
              Affiche
            </Link>
          </li>
          <li>
            <Link rel="stylesheet" to="/Recherche">
              Recherche
            </Link>
          </li>
        </ul>
      </>
    );
}

export default Menu;