const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {
   return gifts.map(item => {
      const left = `${'*'.repeat(item.length + 2)}`
      return `${left.split('').join('')}\n*${item}*\n${left.split('').reverse().join('')}`
   })
}

wrapping(gifts)