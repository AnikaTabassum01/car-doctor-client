import { Link } from "react-router-dom";
import { ArrowRightIcon } from '@heroicons/react/24/solid';


const ServiceCard = ({service}) => {
    const { _id, title, img, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="cars" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center">
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <Link to={`/checkout/${_id}`}><ArrowRightIcon className='w-5 h-5 text-[#FF3811]'/></Link> 
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;