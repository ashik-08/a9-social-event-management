import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="container mx-auto p-2">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;