import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import DetailsOfService from "./DetailsOfService";

const ServiceDetails = () => {
    const [detail, setDetail] = useState([]);

    const { id } = useParams();

    const services = useLoaderData();

    useEffect( () => {
        const findService = services.find(service => service.id == id);
        setDetail(findService);
    }, [id, services]);
    
    return (
        <div>
            <Navbar></Navbar>
            <DetailsOfService detail={detail}></DetailsOfService>
        </div>
    );
};

export default ServiceDetails;