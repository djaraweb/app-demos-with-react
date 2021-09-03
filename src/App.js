import { useEffect, useState } from "react";
import { TableCoins } from "./components/TableCoins";
import logo from "./assets/images/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getCoins = async () => {
    // 20210903094532
    // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
    const res = await fetch("api.coingecko.json");
    const coins = await res.json();
    setCoins(coins);
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <div className="container">
      <div className="row mt-2">
        <span>
          <img src={logo} style={{ width: "4%" }} alt="LogoReact" />
          App de Precios Crypto Monedas con API GoinGecko
        </span>
      </div>
      <div className="row">
        <input
          type="text"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          placeholder="Search a Coin"
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
