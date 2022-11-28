//ingredients

let spaghetti = 400;
let guanciale = 250;
let eggYolk = 18 * 6;
let gratedPecorinoRomano = 50;
let blackPepper = 4;
let salt = 1;

//Prepare guanciale

let cutGuanciale = guanciale;
console.log("Cut", cutGuanciale, "g of guanciale.")

//Prepare the egg and cheese mix

let combineEggYolkAndCheese = eggYolk + gratedPecorinoRomano;
console.log("Combine", eggYolk, "g of egg yolk with", gratedPecorinoRomano, "g of Pecorino.");

let roastPepper = 4;
console.log("Roast", blackPepper, "g of fresh black pepper.");

let bitOfPepper = roastPepper * 0.2;
let restOfPepper = roastPepper - bitOfPepper;
let combineBitPepperWithEggAndCheese = combineEggYolkAndCheese + bitOfPepper;
console.log("Combine small amount of the", roastPepper, "g of the roasted pepper with the", combineEggYolkAndCheese, "g of egg and cheese.");

//Keep working on the guanciale

let brownGuanciale = cutGuanciale * 0.9;
console.log("Fry the", cutGuanciale, "g of guanciale for 3min at medium, then 1min on high.\nLeave the grease in the pan.")

//Preparing the pasta

let boilPasta = spaghetti + salt;
let ladlefulPastaWater = 20;
console.log("Boil the", spaghetti, "g of spaghetti with", salt, "g of salt until al dente.\nPut a ladleful of the pasta water (approximatly", ladlefulPastaWater, "g) aside. \nStrain the pasta once al dente.")

let twoSpoonsPastaWater = ladlefulPastaWater * 0.2;
let pastaWaterAndGuanciale = twoSpoonsPastaWater + brownGuanciale;
console.log("Stir two spoons of the pasta water (approximatly", twoSpoonsPastaWater, "g) with the", brownGuanciale, "g of brown guanciale.\nTurn on the heat")

//Mixing the main ingredients

let combinePastaAndGuanciale = pastaWaterAndGuanciale + boilPasta;
console.log("Turn off the heat and set aside for 1min. Add the", boilPasta, "g of boiled pasta to the", pastaWaterAndGuanciale, "g of guanciale.");

let addEggAndCheeseMixToPastaAndGuanciale = combinePastaAndGuanciale + combineBitPepperWithEggAndCheese;
console.log("Add the", combineBitPepperWithEggAndCheese, "g of egg and cheese mixture quickly into the", pastaWaterAndGuanciale, "g of pasta with guanciale.");

let addPepperToFinishMeal = addEggAndCheeseMixToPastaAndGuanciale + restOfPepper;
console.log("Add the remaining", restOfPepper, "g of Pepper to the meal.");

//Serving the carbonara

let carbonara = addPepperToFinishMeal;
console.log("Immediatly serve", carbonara, "g of carbonara.");