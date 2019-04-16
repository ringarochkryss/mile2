// JavaScript source code
{
    var thirdLevel = [

        { "name": "201C", "height": 1, "size": 5.0 },
        { "name": "201C", "height": 3, "size": 2.1 },
        { "name": "010B", "height": 7.5, "size": 2.1 },
        { "name": "100B", "height": 5, "size": 2.5 },
        { "name": "010C", "height": 5, "size": 5.0 },
        { "name": "103C", "height": 1, "size": 2.7 },
        { "name": "103C", "height": 3, "size": 1.7 },
        { "name": "100A", "height": 10, "size": 2.1 },
        { "name": "301C", "height": 3, "size": 2.7 },
        { "name": "302C", "height": 1, "size": 2.2 },
        { "name": "302C", "height": 3, "size": 4.7 },
        { "name": "200A", "height": 5, "size": 2.7 },
        { "name": "200A", "height": 3, "size": 4.7 },
        { "name": "101A", "height": 1, "size": 3.7 },
        { "name": "100A", "height": 7.5, "size": 2.7 },
        { "name": "401A", "height": 1, "size": 2.5 }
    ];

    function newDive3() {
        var randomNumber = Math.floor(Math.random() * (thirdLevel.length));


        document.getElementById("level3code").innerHTML = thirdLevel[randomNumber].name;
        document.getElementById("level3height").innerHTML = thirdLevel[randomNumber].height;
        document.getElementById("level3DD").innerHTML = thirdLevel[randomNumber].size;
    }

}

function newDive3() {
    var x = document.getElementById("newDive3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}