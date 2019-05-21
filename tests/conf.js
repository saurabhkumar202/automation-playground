// conf.js
exports.config = {
  params: {

    ulcOptions: {

      //ulcURL: 'https://precisionlmstest.ptc.com/ulc',
      appURL: 'https://learn-docker.com',
    },
  },
    jasmineNodeOpts: {
      defaultTimeoutInterval: 550000
    },

    allScriptsTimeout: 550000,
    getPageTimeout: 550000,

    onPrepare: function () {

      browser.manage().window().maximize();
      // browser.executeScript("document.querySelector('#mainHeader').style.position='relative'");


    },
    framework: 'jasmine',
    seleniumAddress: 'http://selenium-hub:4444/wd/hub',
   // directConnect: true,
   /* capabilities: {
      'browserName': 'chrome'
    },
    specs: ['tests/regression.spec.js']*/

     multiCapabilities: [{
       'browserName': 'chrome',
       shardTestFiles: true,
       maxInstances: 2,
       specs: ['tests/regression.spec.js','tests/sanity.spec.js'] // Capacity specific specs
     }
     , {
         'browserName': 'firefox',
         shardTestFiles: true,
         maxInstances: 2,
         specs: ['tests/regression.spec.js','tests/sanity.spec.js'] // Capacity specific specs
     }
     ]
   }

