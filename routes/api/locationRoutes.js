const router = require('express').Router();
const { Location, Traveler, trip } = require('../../models');

router.get('/', async (req,res) => {
    try {
        const allLocations = await Location.findAll( {
            include: [ { model: Traveler }, { model: Trip } ]
        });
        res.status(200).json(allLocations);
    } catch (err) {
        res.status(400).json(err);
    };
});