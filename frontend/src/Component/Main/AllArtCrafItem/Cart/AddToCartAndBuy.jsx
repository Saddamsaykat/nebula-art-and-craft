import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useLoaderData } from 'react-router-dom';
import { FaBuysellads, FaCartShopping } from 'react-icons/fa6';
import { useState } from 'react';




const AddToCartAndBuy = () => {
    const [tabIndex, setTabIndex] = useState(1);
    const lodadedUser = useLoaderData();
    console.log(tabIndex);


    console.log(lodadedUser);
    return (


        <div className="container mx-auto">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                <TabList>
                    <Tab>
                        <div className=" flex items-center gap-1">
                            <div>
                                <FaCartShopping></FaCartShopping>
                            </div>
                            <div>
                                Card
                            </div>
                        </div>
                    </Tab>
                    <Tab>
                        <div className=" flex items-center gap-1">
                            <div>
                                <FaBuysellads></FaBuysellads>
                            </div>
                            <div>
                                Buy
                            </div>
                        </div>
                    </Tab>
                </TabList>


                <TabPanel>
                    <div>
                       
                    </div>
                </TabPanel>
                <TabPanel>
                    
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default AddToCartAndBuy;