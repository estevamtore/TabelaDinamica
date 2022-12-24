import Table from "./DataTable";
import data from "./data";

import "./styles.css";

function App() {
  const clickhandler = (name) => console.log("delete", name);

  return (
    <>
      <Table data={data} click={clickhandler} />
    </>
  );
}

export default App;
