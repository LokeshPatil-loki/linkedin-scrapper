import ExtractProfileURLs from "./ExtractProfileURLs.js";
import ScrapeProfiles from "./ScrapeProfile.js";
import fs from "fs";

// const cookie = JSON.parse(fs.readFileSync("./cookie.json"));

// const ScrapeLinkedinWithKeywords = async (keywords) => {
//   const profileURLS = await ExtractProfileURLs(keywords);
//   const profiles = await ScrapeProfiles(profileURLS);
//   console.log(profiles)
//   fs.writeFileSync("export.json",JSON.stringify(profiles));
//   return profiles;
// }

// export default ScrapeLinkedinWithKeywords;
const startTime = new Date().toLocaleTimeString();
let keywords = "Sarvesh";
const profileURLS = await ExtractProfileURLs(keywords);
const profiles = await ScrapeProfiles(profileURLS);
console.log(profiles);
const endTime = new Date().toLocaleTimeString();
console.log("Start Time: " + startTime);
console.log("End Time: " + endTime)
fs.writeFileSync("export.json",JSON.stringify(profiles));








