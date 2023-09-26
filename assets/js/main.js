// *******+ level 1-1 ******
let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]
const myDrinks = (getraenke) =>{
    getraenke.sort();
    console.log(getraenke);
    getraenke.forEach(element => { document.write(`${element} </br>`)
        
    });
}
myDrinks(getraenke);

// *******+ level 1-2 ******
console.log("######## Array-Iteration-Level-1_2 ######## ");
const upperDrinks= getraenke.map((element) => element.toUpperCase());
console.log(upperDrinks);

// *******+ level 1-3 ******
console.log("######## Array-Iteration-Level-1_3 ######## ");
let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

const multi = (array) => {
    const newArray= array.map((elm) => elm * 2);
    return newArray.sort((a,b) => a-b);
}
console.log(multi(array));

// *******+ level 1-4 ******
console.log("######## Array-Iteration-Level-1_4 ######## ");
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
const faToCel = (fahrenheitArr) =>{
    const celsiusArr= fahrenheitArr.map((elm) => ((elm - 32) / 1.8).toFixed(0))
    return celsiusArr;
}
console.log(faToCel(fahrenheit));

// *******+ level 1-5 ******
console.log("######## Array-Iteration-Level-1_5 ######## ");
let checkNumber = [
    18,16,80,51,47,38,95,42,68,61,34,51,20,17,56,31,100,6,5,30,74,97,28,
    99,91,27,73,12,92,6,27,71,26,15,78];
const newNumber = checkNumber.map((elm) => 
    {
        if ((elm % 3)== 0)
        {return elm+100}
        else { return elm}
    }
);
console.log(newNumber);

// *******+ level 1-6 ******
console.log("######## Array-Iteration-Level-1_6 ######## ");
let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
]
const newAlbum= album.map((elm) => {
    if (elm.indexOf(".") != -1){
        return((elm.slice(0, elm.indexOf(".")).toLocaleLowerCase()))
    } else{
        return "invalid";
    }
})
console.log(newAlbum);
