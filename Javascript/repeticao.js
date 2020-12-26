//while

var i=0;

while(i<3){
    console.log("while: "+i);
    i++;
}

for (var j=0; j<3; j++){
    console.log("For: "+j);
}

var lista = ["Arroz","Feijao","Batata",1234];
var i=0;
for(i in lista){
    console.log(lista[i]);
}