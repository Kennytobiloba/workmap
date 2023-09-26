import React, { useState } from "react";
import './App.css';
import CategoryList from './CategoryList';
import list from './list'

function App() {
  const [data, setData] = useState(list);

  return (
    <div className="App">
      
      <CategoryList data={data} />
    </div>
  );
}

export default App;
