
import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div className="flex container mx-auto mt-4">
            <button className="btn btn-danger rounded-xl">Latest Update</button>
            <Marquee pauseOnHover={true} speed={80}>
                <span className="font-bold">Earthenware:</span> Earthenware is a type of ceramic made from clay fired at relatively low temperatures. Its porous and often glazed to make it waterproof. Earthenware has been used for thousands of years for pottery, dishes, and decorative items.
                 <span className="font-bold">Stoneware:</span> Stoneware is a type of ceramic fired at higher temperatures than earthenware, resulting in a denser, less porous material. Its durable and often used for dishes, cookware, and decorative items. Stoneware can be glazed or left unglazed.
                 <span className="font-bold">Porcelain:</span> Porcelain is a type of ceramic made from fine clay fired at very high temperatures, resulting in a strong, non-porous material. Its known for its translucent quality, white color, and smooth texture. Porcelain is commonly used for dishes, figurines, and decorative items.
                 <span className="font-bold">Bone China:</span> Bone china is a type of porcelain made with bone ash, which gives it added strength and translucency. Its lightweight and has a delicate appearance, making it popular for fine dinnerware and decorative pieces.
                 <span className="font-bold">Raku:</span>  Raku is a type of pottery originating from Japan. It involves rapid firing and quick cooling, often in outdoor kilns. This process creates unique and unpredictable glaze effects, with crackled surfaces and metallic finishes. Raku pottery is prized for its beauty and spontaneity.
                <span className="font-bold">Terracotta: </span> Terracotta is a type of earthenware made from reddish-brown clay. Its commonly used for pottery, sculpture, and architectural elements. Terracotta is often left unglazed and has a rustic appearance.
            </Marquee>


        </div>
    );
};

export default Slider;