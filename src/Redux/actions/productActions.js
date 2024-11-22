export function ajouterProduitAction(newProduct) {
  return {
    type: "ADD_PRODUCT",
    payload: newProduct,
  };
}
export function modifierProduitAction(newProduct) {
  return {
    type: "UPDATE_PRODUCT",
    payload: newProduct,
  };
}
export function supprimerProduitAction(idProduct) {
  return {
    type: "DELETE_PRODUCT",
    payload: idProduct,
  };
}
export function modifierSelectedProduitAcion(newProduct) {
  return {
    type: "UPDATE_SELECTEDPRODUCT",
    payload: newProduct,
  };
}
