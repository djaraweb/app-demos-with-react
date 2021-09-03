import React from "react";

export default function CoinRow({ coin, index }) {
  return (
    <tr>
      <td>{index}</td>
      <td>
        <img
          src={coin.image}
          alt={coin.name}
          className="me-4"
          style={{ width: "3%" }}
        />
        <span>{coin.name}</span>
        <span className="ms-2 text-muted text-uppercase">{coin.symbol}</span>
      </td>
      <td className={coin.current_price > 2 ? "text-success" : "text-danger"}>
        {coin.current_price}
      </td>
      <td>{coin.price_change_percentage_24h}</td>
      <td>{coin.total_volume}</td>
    </tr>
  );
}
