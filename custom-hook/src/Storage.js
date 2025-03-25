import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const Storage = () => {
  const [country, setCountry] = useState("");
  const { saveData, getData } = useLocalStorage("country");

  const getCountry = () => {
    setCountry(getData());
  };

  return (
    <div className="storage">
      <div>
        <div>
          <button className="storageBtn" onClick={getCountry}>
            Get Country
          </button>
        </div>
        {country?.length > 0 ? <div className="country">{country}</div> : null}
      </div>
    </div>
  );
};

export default Storage;
