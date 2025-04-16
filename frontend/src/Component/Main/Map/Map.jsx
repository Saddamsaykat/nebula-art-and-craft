import {
    MapContainer,
    TileLayer,
    Marker, Popup
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const Map = () => {
    return (
        <div>
             <MapContainer
            style={{ height:"400px",marginTop:"80px", marginBottom:'90px'
            }}
             center={[23.1447, 90.4364]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        
        </div>
    );
};

export default Map;