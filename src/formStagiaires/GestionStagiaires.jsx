import Table from "./Table";
import Form from "./Form";
import { useState } from "react";

export default function GestionStagiaires(){  
      const [stagiaire, setStagiaire] = useState({
        id: "",
        nom: "",
        prenom: "",
        age: "",
        gender: "",
        groupe: "",
        sport: [],
      });
    const [stagiaires,setStagiaires]=useState([])
    const [deletedStagiaires, setDeletedStagiaires] = useState([]);
    const [editId, setEditId] = useState("");


    return (
      <div className="w-full flex   min-h-screen bg-gradient-to-br from-stone-800 to-blue-900 ">
        <Table
          setDeletedStagiaires={setDeletedStagiaires}
          deletedStagiaires={deletedStagiaires}
          stagiaire={stagiaire}
          setStagiaire={setStagiaire}
          stagiaires={stagiaires}
          setStagiaires={setStagiaires}
          setEditId={setEditId}
          editId={editId}
        ></Table>
        <Form
          setDeletedStagiaires={setDeletedStagiaires}
          deletedStagiaires={deletedStagiaires}
          stagiaire={stagiaire}
          setStagiaire={setStagiaire}
          stagiaires={stagiaires}
          setStagiaires={setStagiaires}
          setEditId={setEditId}
          editId={editId}
        ></Form>
      </div>
    );
}