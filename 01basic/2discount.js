// Discount calculator -operators
var listingPrice = 799;
var sellingPrice = 199;
var discountPercentage;
 
discountPercentage = ((listingPrice - sellingPrice) / listingPrice) * 100;
displayDiscountPercentage = Math.round(discountPercentage);

console.log(`
The listing Price is :${listingPrice}
The selling Price is :${sellingPrice}
and the discount is :${displayDiscountPercentage}%  offer
`);

var result = listingPrice > sellingPrice

console.log(typeof(result));

console.log(typeof(displayDiscountPercentage));
console.log(typeof(discountPercentage));