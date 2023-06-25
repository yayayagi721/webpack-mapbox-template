import mapboxgl from "mapbox-gl";
import "./style.scss";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.MAP_BOX_TOKEN;

const map = new mapboxgl.Map({
  container: "map-container", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
