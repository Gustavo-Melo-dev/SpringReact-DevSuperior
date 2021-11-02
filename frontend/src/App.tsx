import NavBar from "components/NavBar";
import DataTable from "components/DataTable";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <DataTable></DataTable>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
