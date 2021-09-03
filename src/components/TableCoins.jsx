import React from "react";
import CoinRow from "./CoinRow";

export function TableCoins({ coins, search }) {
  const headers = ["#", "Coin", "Price", "Price Change", "24h Volume"];
  const filterCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="table table-dark table-hover mt-4">
      <thead>
        <tr>
          {headers.map((title, index) => (
            <td key={index}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filterCoins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}
