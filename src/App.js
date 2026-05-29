import axios from "axios";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const top = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top"
      );

      const latest = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/new"
      );

      setTopAlbums(top.data);
      setNewAlbums(latest.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar searchData={[...topAlbums, ...newAlbums]} />
      <Hero />

      <Section
        title="Top Albums"
        data={topAlbums}
      />

      <Section
        title="New Albums"
        data={newAlbums}
      />
    </>
  );
}

export default App;