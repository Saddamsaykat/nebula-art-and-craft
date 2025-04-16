import { useLoaderData } from "react-router-dom";
import AllArtCraftItemCard from "./AllArtCraftItemCard";
import { Helmet } from "react-helmet";

const AllArtCrafitem = () => {

    const users = useLoaderData()
    return (
        <div className="container mx-auto
        "
        >
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Art and Craft item</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

<div className="flex justify-center mt-7 text-xl">
    Total Item: {users.length}
</div>

            <div className="overflow-x-auto mb-4 mt-4">

                <table className="table rounded-xl">
                    <thead className="rounded-xl border-4 mb-3">
                        <tr>
                            <th className="text-center border-4">Image</th>
                            <th className="text-center border-4">Name</th>
                            <th className="text-center border-4">Description</th>
                            <th className="text-center border-4">Rating</th>
                            <th className="text-center border-4">customization</th>
                            <th className="text-center border-4">Show Details</th>

                        </tr>

                    </thead>
                    <tbody className="rounded-xl border-4 mb-3">
                        {
                            users.map(user => <AllArtCraftItemCard key={user._id} cardItem={user}></AllArtCraftItemCard>)
                        }
                    </tbody>
                </table>


            </div>



        </div>
    );
};

// 

export default AllArtCrafitem;