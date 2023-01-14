const boxes = [
   { l: 1, w: 1, h: 1 },
   { l: 2, w: 2, h: 2 },
   { l: 3, w: 1, h: 3 }
]

function fitsInOneBox(boxes) {
   var resp
   
   for (let a = 1; a < boxes.length; a++) {
      if(
         (boxes[a - 1].l > boxes[a].l) && 
         (boxes[a - 1].w > boxes[a].w) && 
         (boxes[a - 1].h > boxes[a].h)
      ) {
         resp = true
      } else {
         if(
         (boxes[a - 1].l >= boxes[a].l) || 
         (boxes[a - 1].w >= boxes[a].w) || 
         (boxes[a - 1].h >= boxes[a].h)
         ) {
         resp = false
         } else {
         resp = true
         }
      }
   }
   
   return resp
}

fitsInOneBox(boxes) // false