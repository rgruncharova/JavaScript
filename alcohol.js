function alcohol(input){
    let whiskeyPrice = Number(input.shift());
    let beerQuantity = Number(input.shift());
    let wineQuantity = Number(input.shift());
    let rakiyaQuantity = Number(input.shift());
    let whiskeyQuantity = Number(input.shift());

    let rakiyaPrice = (0.5 * whiskeyPrice);
    let winePrice = rakiyaPrice - (0.4 * rakiyaPrice);
    let beerPrice = rakiyaPrice - (0.8 * rakiyaPrice);
    let rakiyaSum = rakiyaQuantity * rakiyaPrice;
    let wineSum = winePrice * wineQuantity;
    let beerSum = beerPrice * beerQuantity;
    let whiskeySum = whiskeyPrice * whiskeyQuantity;

    let obshto = whiskeySum + beerSum + wineSum + rakiyaSum;
    console.log(obshto.toFixed(2));
}
