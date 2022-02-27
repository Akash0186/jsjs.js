//https://github.com/Akash0186/jsjs.js


function countAnimal(depth){
    var animal= 0;
    if (depth<=10){
        animal= depth*50;
    }else if(depth<=20) {
        var firstPart=10*50;
        var remaining= depth - firstPart;
        var secondPart= remaining* 100;
        animal = firstPart + secondPart;
    }else
        var firstPart= 10*50;
        var secondPart= 10*100;
        var remaining= depth-20;
        var thirdPart= remaining*300;
        animal= firstPart+secondPart+thirdPart;
  return animal;
}
console.log(countAnimal(27));

function kilometerToMeter(kilometer){
    var meter= kilometer*1000;
    return meter;
    }
    console.log(kilometerToMeter(45));

function budgetCalculator(watch, phone, laptop){
    var wPrice = watch*50;
    var pPrice = phone*100;
    var lPrice = laptop*500;
    var total = wPrice+pPrice+lPrice;
    return total; 
}
console.log(budgetCalculator(56, 78, 25));

function hotelCost(numberOfDays){
    var totalTaka= 0;
    if(numberOfDays<=10){
        totalTaka= numberOfDays*100;
    }else if(numberOfDays<=20){
       var first10= 10*100;
       var remaining= numberOfDays-10;
       var after10= remaining* 80;
       totalTaka=first10+after10;
    }else
        var first10= 10*100;
        var after10= 10*80;
        var remaining= numberOfDays-20;
        var after20= remaining*50;
        totalTaka= first10+after10+after20;
    return totalTaka;
}

console.log(hotelCost(65));
console.log(55);



const megaFriends = ["Ashique", "shanjidur", "Mizanur", "shohidul", "ariyan"];
var longest= ''
for(var i=1; i< megaFriends.length; i++){
    var mega = megaFriends[i];
    if (mega.length> longest.length){
        longest= mega;
        console.log(longest);
    }

}

