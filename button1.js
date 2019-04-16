// JavaScript source code
{
    var firstLevel = [

        { "name": "102C", "height": 1, "size": 3.0 },
        { "name": "201A", "height": 1, "size": 2.1 },
        { "name": "100A", "height": 3, "size": 2.5 },
        { "name": "100B", "height": 1, "size": 1.1 },
        { "name": "100A", "height": 5, "size": 1.2 },
        { "name": "020C", "height": 1, "size": 2.1 },
        { "name": "020B", "height": 1, "size": 2.3 },
        { "name": "020A", "height": 1, "size": 2.1 },
        { "name": "020A", "height": 3, "size": 2.2 },
        { "name": "101A", "height": 1, "size": 2.7 },
        { "name": "101B", "height": 1, "size": 2.4 },
        { "name": "101B", "height": 3, "size": 1.7 },
        { "name": "101C", "height": 1, "size": 1.2 },
        { "name": "101C", "height": 3, "size": 2.7 },
        { "name": "100B", "height": 3, "size": 2.2 },
        { "name": "010B", "height": 1, "size": 2.7 },
        { "name": "010B", "height": 3, "size": 2.3 },
        { "name": "010C", "height": 1, "size": 2.7 },
        { "name": "010C", "height": 3, "size": 2.1 },
        { "name": "100C", "height": 1, "size": 2.5 }
    ];

    function newDive1() {
        var randomNumber = Math.floor(Math.random() * (firstLevel.length));


        document.getElementById("level1code").innerHTML = firstLevel[randomNumber].name;
        document.getElementById("level1height").innerHTML = firstLevel[randomNumber].height;
        document.getElementById("level1DD").innerHTML = firstLevel[randomNumber].size;
    }

}



/*var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var obj = JSON.parse(this.responseText);
 
//Level 1
//diving code name......
    document.getElementById("level1code").innerHTML = obj.children[0].children[0].name;
 // height......
    document.getElementById("level1height").innerHTML = obj.children[0].children[0].height;
 //difficulty......  
    document.getElementById("level1DD").innerHTML = obj.children[0].children[0].size;
    
//...............................................................................
  }
  
  $('.Show').click(function() {
    $('#targetl1').show(500);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function() {
    $('#targetl1').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
 
//....................................................................................
};

xmlhttp.open("GET", "/flare.json", true);
xmlhttp.send();

// document.getElementById("level1").innerHTML = obj.name + "," + obj.children[0].name;
// document.getElementById("level2").innerHTML = obj.name + "," + obj.children[1].name;
//document.getElementById("level3").innerHTML = obj.name + "," + obj.children[2].name;
// document.getElementById("level4").innerHTML = obj.name + "," + obj.children[3].name;

*/