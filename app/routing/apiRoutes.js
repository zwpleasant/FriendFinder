var friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body
        console.log(req.body)
        // run through loops to parse JSON friend array and check scores with absolute values
        // req.body is coming back in console, but is showing undefined in for loop..
        var findLowScore = [];
        for (var i = 0; i < friendsData.length; i++) {
            var differences = []
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                differences.push(Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriend.scores[j])));
            }
            findLowScore.push(differences.reduce((accumulator, currentValue) => accumulator + currentValue));
        }
        friendsData.push(newFriend);

        var k = findLowest.indexOf(Math.min.apply(null, findLowest))
        var match = {
            name: friendsData[k].name,
            photo: friendsData[k].photo
        }
        res.send(`<h1>You matched: <p>${match.name}</p></h1><br>
        <img src=${match.photo}>`)
    });
};