import { useState, useEffect } from "react";
import { axiosGet, DEFAULT_URL } from "./RestCall";
import './App.css';
import { MonsterModel } from "./Model/MonsterModel";
import { MonsterList } from "./components/card-list/MonsterCard";
import { SearchBox } from "./components/search-box/SearchBox";

function App() {
  const [monster_array, setMonsters] = useState<MonsterModel[]>([]);
  const [search_monsters, setSearchMonsters] = useState<string | undefined>(undefined);

  useEffect(() => {
    axiosGet(
      DEFAULT_URL,
      data => setMonsters(data),
      (error) => console.log(error)
    );
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMonsters(e.target.value.toLocaleLowerCase());
  }

  const filterMonsters = () => {
    return search_monsters !== undefined
      ? monster_array.filter(
        monster => monster.name.toLocaleLowerCase().includes(search_monsters)
      )
      : monster_array;
  }

  return (
    <div className="App">
      <div style={{width:'40%', margin:'auto'}}>
        <SearchBox
          onChange={handleSearch}
        />
      </div>
      <MonsterList
        monsters={filterMonsters()}
      />
    </div>
  );
}

export default App;
