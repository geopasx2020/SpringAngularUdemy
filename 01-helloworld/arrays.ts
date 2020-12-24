let reviews:number[]=[5,5,4.5,1,3];
for (let i=0; i < reviews.length; i++){
    console.log(reviews[i]);
}

//alternative for syntax opws python iterator
let sportsOne: string[]=["Golf", "Cricket", "Tennis", "Swimming"];
for (let tempSport of sportsOne){
    console.log(tempSport);
}
//methods
sportsOne.push("Basketball");
console.log(sportsOne);