var voyageModel = require('../models/voyagemodel.js');

module.exports = {
    location: function(req, res) {
        //var locationName = req.params.location;
        var locationName = req.param("location");

        if (locationName){
            if (voyageModel.getLocationObj(locationName)){
                res.render("main-view", {
                    locObj: voyageModel.getLocationObj(locationName),
                    nextObjKey: voyageModel.getNextKey(locationName)
                });
            }
            else{
                res.render("absent-view");
            }
        }
        else {
            res.redirect('/seville');
        }
    },

    nextjson: function(req, res){
        var current = req.param('location');
        var next = voyageModel.getNextKey(current);
        var currentObj = voyageModel.getLocationObj(current);
        var nextObj = voyageModel.getLocationObj(next);

        console.log(currentObj);
        console.log(nextObj);


        res.send({
            location: currentObj ? currentObj.title : 'no such location',
            nextLocation: nextObj ? nextObj.title : 'no more locations'
        });
    }
};
