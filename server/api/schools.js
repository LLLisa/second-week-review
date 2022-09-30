const { School } = require('../db');

const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const schools = await School.findAll();
    res.send(schools);
  } catch (error) {
    next(error);
  }
});

//between this and th users slice, which route configuration is better and why?
//what type of data is this route expecting?
router.get('/:id', async (req, res, next) => {
  try {
    const school = await School.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(school);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
