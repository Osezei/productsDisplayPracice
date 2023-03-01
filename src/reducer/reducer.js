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
  if (action.type === "CATEGORY_HANDLE" && action.payload === "all") {
    return {
      ...state,
      products: state.allKicks,
      activeFilter: action.payload,
    };
  }
  if (action.type === "CATEGORY_HANDLE") {
    let products = state.allKicks;

    products = products.filter(
      (product) => product.category === action.payload
    );
    return {
      ...state,
      products,
      activeFilter: action.payload,
    };
  }
  if (action.type === "COMPANY_HANDLE" && action.payload === "all") {
    return {
      ...state,
      products: state.allKicks,
      activeFilter: action.payload,
    };
  }
  if (action.type === "COMPANY_HANDLE") {
    let products = state.allKicks;

    products = products.filter((product) => product.company === action.payload);
    return {
      ...state,
      products,
      activeFilter: action.payload,
    };
  }
  if (action.type === "SET_PRICE") {
    let maxPrice = state.products.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      max_price: maxPrice,
      price: maxPrice,
    };
  }
  if (action.type === "PRICE_UPDATE") {
    let tempProducts = state.allKicks.filter(
      (product) => product.price <= action.payload
    );
    return {
      ...state,
      price: action.payload,
      products: tempProducts,
    };
  }
  if (action.type === "CLEAR_FILTER") {
    let maxPrice = state.allKicks.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      products: state.allKicks,
      activeFilter: "all",
      min_price: 0,
      max_price: maxPrice,
      price: maxPrice,
    };
  }
  if (action.type === "ADD_TO_CART") {
    const { id, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id,
        name: product.name,
        image: product.image,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem], tempStock: 1 };
    }
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
      tempStock: 1,
    };
  }
  if (action.type === "INCREASE_AMOUNT") {
    const { value, stock } = action.payload;

    let tempValue = value + 1;
    if (tempValue > stock) {
      tempValue = stock;
      return { ...state };
    }
    return {
      ...state,
      tempStock: tempValue,
    };
  }
  if (action.type === "DECREASE_AMOUNT") {
    const { value, stock } = action.payload;

    let tempValue = value - 1;
    if (tempValue < 1) {
      tempValue = 1;
      return { ...state, tempValue };
    }
    return {
      ...state,
      tempStock: tempValue,
    };
  }
  if (action.type === "INCREASE_CART") {
    const { id } = action.payload;

    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount + 1;

        if (newAmount > item.max) {
          newAmount = item.max;
        }
        return {
          ...item,
          amount: newAmount,
        };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE_CART") {
    const { id } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount - 1;
        if (newAmount < 1) {
          newAmount = 1;
        }
        return {
          ...item,
          amount: newAmount,
        };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "REMOVE_ITEM") {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === "COUNT_CART_TOTALS") {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_items, total_amount };
  }
  throw new Error(`No Matching '${action.type}' - action type`);
};

//   return { ...state };
// };

export default reducer;
