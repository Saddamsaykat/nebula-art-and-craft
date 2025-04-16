// import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Card = () => {
    const handleType = () => {
       
     
    };

    const handleDone = () => {
        console.log(`Done after 5 loops!`);
    };

    return (
        <div>
            <div className='App flex justify-center text-3xl'>
                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                    
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        
                        <Typewriter
                            words={['', 'Terracotta is a type of earthenware.', 'Terracotta is often left unglazed.']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default Card;



{/* "https://i.ibb.co/br1WXyD/1.jpg"      
            https://i.ibb.co/DD8gvKV/2.jpg     
            https://i.ibb.co/bzNjMjG/3.jpg    
            "https://i.ibb.co/VYZzLJK/images.jpg"
            "https://i.ibb.co/Tv4Gpnj/1.jpg"      
            https://i.ibb.co/9Gtcnww/2.jpg      
            "https://i.ibb.co/FmRQWW3/3.jpg"
            "https://i.ibb.co/2KDQfWk/2.jpg" 
            "https://i.ibb.co/5FMg1Sj/3.jpg" 
            "https://i.ibb.co/JnbcpFX/4.jpg" 
            https://i.ibb.co/zbgBTQD/1.jpg 
            "https://i.ibb.co/Ytm83S0/3.jpg" 
            "https://i.ibb.co/G2pmvrj/4.jpg" 
            "https://i.ibb.co/gdh4tXS/1.jpg" 
            "https://i.ibb.co/ZcPvjrh/2.jpg"
            https://i.ibb.co/V9jLhp5/1.jpg 
            "https://i.ibb.co/2y90MRG/2.jpg" 
            "https://i.ibb.co/94VZtQ3/3.jpg" 
            "https://i.ibb.co/yd9HW3q/4.jpg" 
            https://i.ibb.co/ZYVpPyv/1.jpg 
            "https://i.ibb.co/YfJVL22/2.jpg" 
            "https://i.ibb.co/j8grMQJ/3.jpg" 
            "https://i.ibb.co/Z1Pfj9N/4.jpg"
            https://i.ibb.co/C9HH47m/4.jpg    */}