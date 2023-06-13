import { proxy } from "valtio";

const state = proxy({
  intro: true, // checks if you are on the home page
  color: "#EFBD48",
  isLogoTexture: true, // checks if you are on the logo texture page
  isFullTexture: false, // checks if you are on the full texture page
  logoDecal: "./threejs.png", // initial logo decal
  fullDecal: "./threejs.png", // initial full decal
});

export default state;
