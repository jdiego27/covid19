const express = require('express');
const router = express.Router();
const engine = require('ejs');

// GET THE HOMEPAGE SITE
router.get('/', async (req, res) => {
    //const tests = await Tests.find();
    //console.log(test);
    //res.render('test', {
    //    tasks
   // });
    res.render('home');
  });
  
router.get('handlers/contact', async (req, res) => {
  res.render('contact');
});

  module.exports = router;