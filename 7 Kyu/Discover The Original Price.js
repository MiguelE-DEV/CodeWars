function discoverOriginalPrice(discountedPrice, salePercentage){
    let total = discountedPrice / (100 - salePercentage)*100
    return Math.round(total*100)/100
  }