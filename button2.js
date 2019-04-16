// JavaScript source code
{
     var secLevel =  [
          
         { "name": "010A", "height": 1, "size": 5.0 },
         { "name": "010C", "height": 3, "size": 2.1 },
         { "name": "010B", "height": 5, "size": 2.1 },
         { "name": "010A", "height": 3, "size": 2.2 },
         { "name": "101B", "height": 3, "size": 2.1 },
         { "name": "101C", "height": 3, "size": 2.3 },
         { "name": "101A", "height": 3, "size": 2.1 },
         { "name": "102B", "height": 1, "size": 2.4 },
         { "name": "102C", "height": 3, "size": 2.1 },
         { "name": "100C", "height": 5, "size": 1.1 },
         { "name": "020A", "height": 3, "size": 2.5 },
         { "name": "020C", "height": 3, "size": 2.6 },
         { "name": "201B", "height": 3, "size": 2.5 },
         { "name": "201C", "height": 3, "size": 5.0 },
         { "name": "100C", "height": 3, "size": 2.7 },
         { "name": "301", "height": 1, "size": 2.5 }
];

function newDive2() {
       var randomNumbertwo = Math.floor(Math.random() * (secLevel.length));
  
   
   document.getElementById("level2code").innerHTML = secLevel[randomNumbertwo].name;
   document.getElementById("level2height").innerHTML = secLevel[randomNumbertwo].height; 
   document.getElementById("level2DD").innerHTML = secLevel[randomNumbertwo].size;
   }

}



/*var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var obj = JSON.parse(this.responseText);
 
    

//Level 2
//diving code name......
    document.getElementById("level2code").innerHTML = obj.children[1].children[0].name;
 // height......
    document.getElementById("level2height").innerHTML = obj.children[1].children[0].height;
 //difficulty......  
    document.getElementById("level2DD").innerHTML = obj.children[1].children[0].size;
    
//...............................................................................
  }
  
  $('.Show').click(function() {
    $('#targetl2').show(500);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function() {
    $('#targetl2').hide(500);
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
