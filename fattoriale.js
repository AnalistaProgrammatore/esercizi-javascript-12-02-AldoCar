/**
* Scrivere qui il codice della funzione fattoriale(n)
**/
let i = function(j) {
  var g = 0
  if (j <= 1){
    return  1
    
  }
  return g = i(j - 1) * j
  
}
console.log(i(4))
