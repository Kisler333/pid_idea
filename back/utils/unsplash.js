#!/usr/bin/env node
const axios = require('axios');
exports.getImages = async(topic)=>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.unsplash.com/search/photos?query=${topic}&per_page=50&page=1`,
        headers: { 
          'Authorization': 'Client-ID f5Aim0Bwur7eXCLiiTKn3UH6khgxotKmi3RIyHv8_Xc'
        }
      };
      try {
        console.log('topic', topic)
        const res = await axios.request(config);
        results = res.data.results;// [] if no results
        // console.log(results);
        return results;
      } catch (error) {
        console.log(error);
        return null;
      }
}
//04/05 00:08
// window.addEventListener('scroll', () => {
//   // Code to be executed when the user scrolls
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     console.log("walabala");
//     // Code to be executed when the user has scrolled to the bottom of the page
//   }
  
// });

// const axios = require('axios');
// const readline = require('readline');

// // Constants for Unsplash API
// const CLIENT_ID = 'f5Aim0Bwur7eXCLiiTKn3UH6khgxotKmi3RIyHv8_Xc';
// const PER_PAGE = 50;

// // Constants for UI
// const SCREEN_HEIGHT = process.stdout.rows;
// const IMAGE_WIDTH = 50;
// const IMAGE_HEIGHT = 20;
// const SEARCH_BOX_WIDTH = 60;

// // Function to get images from Unsplash API
// const getImages = async (topic, page) => {
//   const config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: `https://api.unsplash.com/search/photos?query=${topic}&per_page=${PER_PAGE}&page=${page}`,
//     headers: {
//       'Authorization': `Client-ID ${CLIENT_ID}`
//     }
//   };
//   try {
//     const res = await axios.request(config);
//     const results = res.data.results;
//     return results;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

// // Function to display images on screen
// const displayImages = (images) => {
//   images.forEach((image) => {
//     console.log(`${image.urls.regular.padEnd(IMAGE_WIDTH)}\n`.repeat(IMAGE_HEIGHT));
//   });
// }

// // Function to clear screen
// const clearScreen = () => {
//   readline.cursorTo(process.stdout, 0, 0);
//   readline.clearScreenDown(process.stdout);
// }

// // Function to draw search box
// const drawSearchBox = (query) => {
//   const searchBox = `[${query.padEnd(SEARCH_BOX_WIDTH)}]`;
//   console.log(searchBox);
// }

// // Function to handle user input
// const handleInput = async () => {
//   // Set up readline interface
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   // Initialize variables
//   let query = '';
//   let page = 1;

//   // Display initial screen
//   clearScreen();
//   drawSearchBox(query);

//   // Set up event listener for user input
//   rl.on('line', async (input) => {
//     // Handle search query
//     if (input.startsWith('/')) {
//       query = input.slice(1).trim();
//       page = 1;
//       clearScreen();
//       drawSearchBox(query);
//       const images = await getImages(query, page);
//       displayImages(images);
//     }
//     // Handle scrolling
//     else if (input === 'j') {
//       page++;
//       const images = await getImages(query, page);
//       if (images && images.length > 0) {
//         clearScreen();
//         drawSearchBox(query);
//         displayImages(images);
//       } else {
//         page--;
//       }
//     }
//     // Handle exiting program
//     else if (input === 'q') {
//       process.exit(0);
//     }
//   });
// }

// // Start program
// handleInput();



