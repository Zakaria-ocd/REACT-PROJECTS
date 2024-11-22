const initialState = {
   categories: [
      { id: 1, libelle: "electorincs" },
      { id: 2, libelle: "vegetables" },
      { id: 3, libelle: "drinks" },
      { id: 4, libelle: "fruits" },
      { id: 5, libelle: "clothes" },
    ],
    produits:[
      {
        id: 1,
        libelle: "tomatos",
        categories: { id: 2, libelle: "vegetables" },
        prix: 100,
        quantite: 3,
      },
      {
        id: 2,
        libelle: "potatos",
        categories: { id: 2, libelle: "vegetables" },
        prix: 140,
        quantite: 5,
      },
      {
        id: 3,
        libelle: "tv",
        categories: { id: 1, libelle: "electorincs" },
        prix: 70,
        quantite: 1,
      },
      {
        id: 4,
        libelle: "milk",
        categories: { id: 3, libelle: "drinks" },
        prix: 90,
        quantite: 8,
      },
    ],
    selectedProduit:{
    id: "",
    libelle: "",
    categories: { id: "", libelle: "" },
    prix: 0,
    quantite: 0,
  }
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, produits: [...state.produits, action.payload] };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        produits: [
          ...state.produits.map((item) => {
            if (item.id === action.payload.id) {
              return action.payload;
            }
            return item;
          }),
        ],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        produits: [
          ...state.produits.filter(function (item) {
            return item.id != action.payload;
          }),
        ],
      };
    case "UPDATE_SELECTEDPRODUCT":
      return {
        ...state,
        selectedProduit: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
