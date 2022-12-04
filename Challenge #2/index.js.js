const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

function countHours(year, holidays) {
   const hours =  holidays
                     .reduce((resp, item) => {
                     const day = new Date(`${item}/${year}`)
                     if(day.getDay() !== 0 && day.getDay() !== 6) ++resp
                     return resp
                     }, 0)
   
   return (hours * 2)
}

countHours(year, holidays) // 2 días -> 4 horas extra en el año