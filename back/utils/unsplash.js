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
        return results
      } catch (error) {
        console.log(error);
        return null;
      }
}