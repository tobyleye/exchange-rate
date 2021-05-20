import { useState, useCallback, useEffect } from "react";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { getExchangeRates } from "../api";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAmount,
  changeCurrencyCode,
  getAmount,
  getCurrencyCode
} from "../store/rates";
const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

export function ExchangeRate() {
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);

  const dispatch = useDispatch();

  // fetch the exchange rates each time currency code changes
  useEffect(() => {
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      setCurrencyData(rates);
    });
  }, [currencyCode]);

  const handleCurrencyCode = useCallback(
    (e) => dispatch(changeCurrencyCode(e.target.value)),
    [dispatch]
  );

  const handleAmountChange = useCallback(
    (e) => {
      let newAmount = e.target.value;
      dispatch(changeAmount(newAmount));
    },
    [dispatch]
  );

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
            onChange={handleCurrencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} onChange={handleAmountChange} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
