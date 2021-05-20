const initialState = {
  amount: "12.00",
  currencyCode: "USD"
};

export default function ratesReducer(state = initialState, action) {
  if (action.type === "changeAmount") {
    return { ...state, amount: action.payload };
  }
  if (action.type === "changeCurrencyCode") {
    return { ...state, currencyCode: action.payload };
  }
  return state;
}
