// 'use client'

// import React, { useEffect } from "react";
// import L from "leaflet";
// import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-geosearch/dist/geosearch.css";
// // import "./App.css"
// import markerIcon2x from "/images/marker-icon.png";
// import markerIcon from "/images/marker-icon.png";
// import markerShadow from "/images/marker-shadow.png";
// // delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });
// // Component to add search bar
// // function SearchField() {
// //   const map = useMap();
// //   useEffect(() => {
// //     const provider = new OpenStreetMapProvider();
// //     const searchControl = new GeoSearchControl({
// //       provider: provider,
// //       style: "bar",
// //       showMarker: true,
// //       showPopup: true,
// //       autoClose: true,
// //       retainZoomLevel: false,
// //       animateZoom: true,
// //       keepResult: true,
// //     });
// //     map.addControl(searchControl);
// //     return () => map.removeControl(searchControl);
// //   }, [map]);
// //   return null;
// // }



// function SearchField() {
//   const map = useMap();

//   useEffect(() => {
//     const provider = new OpenStreetMapProvider();
//     // TypeScript workaround: declare GeoSearchControl globally or above the component if needed
//     // @ts-ignore
//     const searchControl = new GeoSearchControl({
//       provider,
//       style: "bar",
//       showMarker: true,
//       showPopup: true,
//       autoClose: true,
//       retainZoomLevel: false,
//       animateZoom: true,
//     });

//     map.addControl(searchControl);

//     // Cleanup: remove the control from the map
//     return () => {
//       map.removeControl(searchControl);
//     };
//   }, [map]);

//   return null;
// }
// export default function AutoComplete() {
//   return (
//     <div className=" m-10 w-200 h-200">
//       <MapContainer
//         center={[51.505, -0.09]}
//         zoom={13}
//         scrollWheelZoom={true}
//         className="w-full h-full"
//       >
//          <TileLayer
//     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//         <Marker position={[51.505, -0.09]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//         <SearchField />
//       </MapContainer>
//     </div>
//   );
// }