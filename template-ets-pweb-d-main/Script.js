ShowAll.addEventListener('click', function(){
    allEmployees();

})

function allEmployees(){
var xmlhttp = new XMLHttpRequest();
var url = "http://it-its.id/api/books";
xmlhttp.open('GET', url,true);
xmlhttp.onload = function(){
    if(this.readyStat== 4&& this.status==200){
        allData =JSON.parse(this.responseText);

    }
    dataStore ="";
    for(single in allData){
       dataStore +='<div class="card" style="width: 18rem">'
     }
    console.log(allData)
}
xmlhttp.send();
}