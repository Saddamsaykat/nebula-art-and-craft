import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const MyArtCraftListCard = ({ findCard, handleDelatedUser }) => {
    const { _id, image, itemname, description, price, rating, processingtime, agree, subcatagory, customization } = findCard;

    
    return (
        <div className="animate__animated animate__zoomIn">
             
            <div>
                <div className="card container mx-auto mt-5 lg:card-side bg-base-100 shadow-xl">
                    <div className="">
                        <img className="rounded-xl max-h-56 mt-3 mb-3 ml-4 mr-4" src={image} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Name: {itemname}</h2>
                        <h2 className="card-title">Catagory: {subcatagory}</h2>
                        <div className="divider divider-primary"></div>
                        <p>{description}</p>
                        <div className="divider divider-accent"></div>
                        <div className="flex justify-around">
                          
                            <h1 className="font-semibold">Price: <span>$</span>{price}</h1>
                            <h1 className="font-semibold">Rating: {rating}</h1>
                        </div>
                        <div className="divider divider-accent"></div>
                        <div className="flex justify-around">
                            <h1 className="font-semibold">Processing Time: {processingtime}</h1>
                           
                            <h1 className="font-semibold">In Stock: {agree}</h1>
                            <h1 className="font-semibold">Customization: {customization}</h1>
                        </div>
                        <div>
                            <div className="divider divider-accent"></div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-success btn-outline mr-4 font-bold">
                                    <Link to={`/update/${_id}`}>Update</Link>
                                </button>
                                
                                   
                                        <button className="btn btn-error" onClick={() =>handleDelatedUser(_id)}>Detated</button>
                                       
                              
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyArtCraftListCard;

MyArtCraftListCard.propTypes = {
    name: PropTypes.string
};