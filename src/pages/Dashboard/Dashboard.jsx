import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div className="text-special italic text-center text-lg md:text-2xl mt-6 md:mt-16 space-y-10">
                <h2>Your purchased services and total expense will appear here</h2>
                <h1 className="flex justify-center items-center h-[40vh]">No services here to show. Add your first!</h1>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Dashboard;