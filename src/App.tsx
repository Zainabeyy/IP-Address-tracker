import React from "react";
import Map from "./components/Map";
import SearchResults from "./components/SearchResults";
import type { ipData } from "./type";

const apiKey = import.meta.env.VITE_IPIFY_API_KEY;



function App() {
  const [ipData, setData] = React.useState<null | ipData>(null);

  // 🔹 fetch user IP on first load
  React.useEffect(() => {
    async function fetchUserIP() {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`
        );
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchUserIP();
  }, []);

  async function searchIP(formData: FormData) {
    const query = formData.get("ipAddress");

    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${query}`
      );
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div className="backgroundImg flex flex-col items-center relative p-5 md:p-10">
        <h1 className="text-white text-[1.65rem] text-center flex flex-col justify-center">
          IP Address Tracker
        </h1>
        <form className="flex items-center max-w-xl w-full" action={searchIP}>
          <input
            type="text"
            name="ipAddress"
            placeholder="Search for any IP address or domain"
            className="bg-white rounded-l-2xl px-4 sm:px-5 py-3 sm:py-4 placeholder-Gray-400 text-base w-full my-5"
          />
          <button
            type="submit"
            className="bg-black h-12 sm:h-14 w-16 sm:w-[4.5rem] rounded-r-2xl  flex items-center justify-center hover:bg-Gray-950"
          >
            <img src="icon-arrow.svg" alt="arrow icon" />
          </button>
        </form>
        {ipData ? <SearchResults data={ipData} /> : <p>Loading...</p>}
      </div>

      <Map lat={ipData?.location.lat} lng={ipData?.location.lng}/>
    </div>
  );
}

export default App;
