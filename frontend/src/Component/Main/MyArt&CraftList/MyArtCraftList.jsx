import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import MyArtCraftListCard from "./MyArtCraftListCard";
import { Helmet } from "react-helmet";
// import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyArtCraftList = () => {
    const [findCard, setFindCard] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const { user } = useContext(AuthContext)
    useEffect(() => {
        const loderData = async () => {
            const res = await fetch(`https://assignment-ten-crud.vercel.app/users`);
            const datas = await res.json();
            const craftData = datas.filter(datavalue => datavalue.email == user.email);
            console.log("Find Email And Array", datas, craftData);
            setFindCard(craftData);
            setFilteredData(craftData);

        }
        if (user?.email) {
            loderData()
        }
    }, [user])


    
    const handleDelatedUser = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-ten-crud.vercel.app/users/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {                          
                            const remaining = filteredData.filter(user => user._id !== _id)
                            setFilteredData(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                        
                    })
             
            }
          });

console.log("Delate Data",_id);

    
    };
console.log(filteredData);
    // Filter
   
    const filterShowData = (eventData) => {

        const dataYesNo = eventData.target.value;
        console.log(dataYesNo);

        let filteredResult;

        if (dataYesNo === "yes") {
            // Filter for customizable items
            filteredResult = findCard.filter(filterObj => filterObj.customization === "Yes");
        } else if (dataYesNo === "no") {
            // Filter for non-customizable items
            filteredResult = findCard.filter(filterObj => filterObj.customization === "No");
        } else {
            // Reset filtering if no option is selected
            filteredResult = findCard;
        }

        setFilteredData(filteredResult);
    }

    return (
        <div className="mb-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Art & Craft List</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="flex justify-center">
                
                <select
                    onChange={filterShowData}
                    className="flex justify-center border-2 p-3 rounded-xl" >
                    <option value="">Sort By</option>
                    <option value="yes">Customizable</option>
                    <option value="no">Non Customizable</option>
                </select>
            </div>

           

            {
                filteredData.map(myCreateItem => (
                    <MyArtCraftListCard key={myCreateItem._id} handleDelatedUser={handleDelatedUser} findCard={myCreateItem} />
                ))
            }
        </div>
    );
};

export default MyArtCraftList;


