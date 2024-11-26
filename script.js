function filterByCity(targetCity, listingCityArray) {
  //target city is what the user types in
  //empty array
  let cityMatch = [];
  //loop through listing city array // think of i as the listing
  for (let i = 0; i < listingCityArray.length; i++) {
    //comparing if the searched city matches one in the array
    //tolowercase for case sensitivity
    if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
      cityMatch.push(i);
    }
  }
  return cityMatch;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  // Note: Comment out the following line when you start working on this function!
  //return [...listingPriceArray.keys()];
  let priceMatch = [];
  for (i = 0; i < listingPriceArray.length; i++) {
    if (listingPriceArray[i] > minPrice && listingPriceArray[i] < maxPrice) {
      priceMatch.push(i);
    }
  }
  return priceMatch;
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  // Note: Comment out the following line when you attempt the LevelUp!
  //return [...listingTypeArray.keys()];
  let targetArray = [];

  for (i = 0; i < listingTypeArray.length; i++) {
    for (f = 0; f < targetTypes.length; f++) {
      if (listingTypeArray[i] === targetTypes[f]) {
        targetArray.push(i);
      }
    }
  }
  return targetArray;
}
