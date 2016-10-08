var button = document.getElementById("counter");

button.onclick = function(){
 
 var request = new XMLHttpRequest();
 request.onreadystatechange = function(){
     if(request.readyState === XMLHttpRequest.DONE){
         if(request.state === 200){
            var counter = request.responseText;  
             var span = document.getElementById("counter");
             span.innerHTML = counter.toString();
         }
     }
 };
 
 request.open('GEET','http://floura71196.imad.hasura-app.io//counter',true);
 request.send(null);
 
};


//submit

var nameInput = document.getElementById("name");
var name1 = nameInput.value;
var sub = document.getElementById("sub_but");
sub.onclick = function(){
    //capture name and render as list
    var names = ['name1','name2'];
    var list = '';
    for(var i=0;i<names.length;i++){
        list += '<li>'+names[i]  +  '</li>';
    }
    var ol = document.getElementById('nameList');
    ol.innerHTML = list
};