import { useSelector } from "react-redux";
import { getUser } from "../store/user";

export function RateTable({ currencyData, amount }) {
  const user = useSelector(getUser);

  return (
    <table className="ExchangeRate-table">
      <tbody>
        {Object.entries(currencyData).map(([code, rate]) => {
          // NOTE: normally avoid floating point math in JS
          const exchangeAmount = amount * rate || 0.0;
          return (
            <tr key={code}>
              <td>{code}</td>
              <td>
                {exchangeAmount.toLocaleString("en", {
                  style: "currency",
                  currency: code
                })}
              </td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Report prepared for {user}</td>
        </tr>
      </tbody>
    </table>
  );
}
