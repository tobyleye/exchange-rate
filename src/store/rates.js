const initialState = {
  amount: "12.00",
  currencyCode: "USD"
};

export default function ratesReducer(state = initialState, action) {
  if (action.type === CHANGE_AMOUNT) {
    return { ...state, amount: action.payload };
  }
  if (action.type === CHANGE_CURRENCY_CODE) {
    return { ...state, currencyCode: action.payload };
  }
  return state;
}

// selector
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;

// action types
const CHANGE_AMOUNT = "changeAmount";
const CHANGE_CURRENCY_CODE = "changeCurrencyCode";

// action creators
export const changeAmount = (amount) => ({
  type: CHANGE_AMOUNT,
  payload: amount
});

export const changeCurrencyCode = (amount) => ({
  type: CHANGE_CURRENCY_CODE,
  payload: amount
});
