module.exports = {
    getNextKey: function (key) {
        var currentLocation = locations[key] ? locations[key].location : undefined;
        for (var key in locations) {
            if (locations[key].location === (currentLocation + 1)) {
                return key;
            }
        }
        return;
    },

    getLocationObj: function (key) {
        return locations[key];
    }
};

var locations = {
    seville: {
        title: 'Seville',
        url: '/seville',
        location: 0
    },
    canary: {
        title: 'The Canary Islands',
        url: '/canary',
        location: 1
    },
    capeverde: {
        title: 'Cape Verde',
        url: '/capeverde',
        location: 2
    },
    straitofmagellan: {
        title: 'Strait of Magellan',
        url: '/straitofmagellan',
        location: 3
    },
    guam: {
        title: 'Guam',
        url: '/guam',
        location: 4
    },
    philippines: {
        title: 'The Philippines',
        url: '/philippines',
        location: 5
    }
};

