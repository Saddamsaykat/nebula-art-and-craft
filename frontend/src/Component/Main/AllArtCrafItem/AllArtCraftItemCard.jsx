import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import 'animate.css';
const AllArtCraftItemCard = ({ cardItem }) => {
    const { _id, image, itemname, description, rating, customization

    } = cardItem


    return (



        <tr className="border-4">
            <td className="border-4">

                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} />
                    </div>
                </div>
            </td>
            <td className="border-4">
                <div className="flex">
                    <div className="font-bold">{itemname}</div>

                </div>

            </td>


            <td className=" border-4">
                <div>

                    {description}

                </div>
            </td>



            <td className="border-4">

                <div className="text-center">
                    {rating}
                </div>

            </td>

            <td className="border-4">

                <div className="text-center">
                    {customization}
                </div>

            </td>

            <td className="border-4">
                <div className="flex">
                    <Link className=" btn btn-info" to={`/ceramicsDetails/${_id}`}>Details
                    </Link>

                </div>
            </td>

        </tr>




    );
};

export default AllArtCraftItemCard;

AllArtCraftItemCard.propTypes = {
    name: PropTypes.string
};


