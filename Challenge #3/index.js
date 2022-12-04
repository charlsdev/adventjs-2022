const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

function distributeGifts(packOfGifts, reindeers) {
   if(packOfGifts.length === 0 && reindeers === 0) return 0
   
   const pack = packOfGifts.reduce((resp, item) => resp += item.length, 0)
   const rein = reindeers.reduce((resp, item) => resp += (item.length * 2), 0)
   
   return Math.trunc(rein / pack)
}

distributeGifts(packOfGifts, reindeers) // 2