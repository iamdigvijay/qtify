import axios from "axios";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const top = await axios.get(
          "https://qtify-backend.labs.crio.do/albums/top"
        );

        const latest = await axios.get(
          "https://qtify-backend.labs.crio.do/albums/new"
        );

        const songsResponse = await axios.get(
          "https://qtify-backend.labs.crio.do/songs"
        );

        setTopAlbums(top.data);
        setNewAlbums(latest.data);
        setSongs(songsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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

      <Section
        title="Songs"
        data={songs}
        type="song"
      />
    </>
  );
}

export default App;
