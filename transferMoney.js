function myFunction(){
    var my_select=document.getElementById('select').value;
    var x=document.getElementById('input').value;
    var y;
    switch(my_select)
    {
        case 'USD':
            y=(x*23236.50).toFixed(2);
            break;
        case 'Yen':
            y=(x*207.91).toFixed(2);
            break;
        case 'Euro':
            y=(x*25097.86).toFixed(2);
            break;
        case 'CNY':
            y=(x*3304.39).toFixed(2);
            break;

    }
    document.getElementById('output').innerHTML=y;
};
var rectangel=[2,3,4,5];
var square=rectangel.map(function(x){
    return x*x;
});
square;