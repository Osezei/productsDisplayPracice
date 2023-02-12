const reducer = function (state, action) {
  if (action.type === "SORT_HANDLE" && action.payload === "lowest") {
    const products = [...state.products].sort((a, b) => a.price - b.price);
    return {
      ...state,
      products,
    };
  }
  if (action.type === "SORT_HANDLE" && action.payload === "highest") {
    const products = [...state.products].sort((a, b) => b.price - a.price);
    return {
      ...state,
      products,
    };
  }
  if (action.type === "SORT_HANDLE" && action.payload === "ascending") {
    const products = [...state.products].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return {
      ...state,
      products,
    };
  }
  if (action.type === "SORT_HANDLE" && action.payload === "descending") {
    const products = [...state.products].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    return {
      ...state,
      products,
    };
  }
  return { ...state };
};

export default reducer;
