let Svoris = prompt('Koks jusu svoris? (kg)')

if(Svoris>=400 || Svoris<=10){
    alert('Neteisingai ivestas svoris');
}else{
    document.write(`Jusu svoris kilogramais : <b>${Svoris}kg</b> <br>`);
    document.write(`Jusu svoris gramais : <b>${Svoris * 1000}g</b>`);
}