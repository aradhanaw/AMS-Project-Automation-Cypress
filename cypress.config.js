const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    "USERNAME":"ARADHANA",

  },
  
  e2e: {
    baseUrl:"https://asset-management-system-one.vercel.app",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
