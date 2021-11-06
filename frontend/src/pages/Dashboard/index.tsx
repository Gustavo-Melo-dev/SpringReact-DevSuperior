import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import NavBar from "components/NavBar";
import DataTable from "components/DataTable";
import Footer from "components/Footer";


const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Deshboard de Vendas</h1>

                <div className="row px-3 d-flex">
                    <div className="col-sm-12 justify-content-center">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todas vendas</h2>

                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
