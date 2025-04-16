import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const FilterCardValue = ({ e }) => {
    const {_id, image, itemname, description, price, rating, subcatagory, customization, processingtime } = e;
    return (
        <div>
            <div className="card glass mb-4 mt-4">
                <figure><img className="max-h-44 mt-4 rounded-2xl" src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {itemname}</h2>
                    <h1>Catagory: {subcatagory}</h1>
                    <p>{description}</p>
                    <div className="divider divider-success"> </div>
                    <div className="flex justify-around">
                        <p>Price: {price}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <div className="divider divider-accent"> </div>
                    <div className="flex justify-between">
                        <h1>Customization: {customization}</h1>
                        <h1>Processingtime: {processingtime} <span>Days</span></h1>
                    </div>
                    <div className="divider divider-accent"> </div>
                    <div className="card-actions justify-end">
                        <Link to={`/ceramicsDetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterCardValue;
FilterCardValue.propTypes = {
    name: PropTypes.object
  };