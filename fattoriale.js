/**
* Scrivere qui il codice della funzione fattoriale(n)
**/
let i = function(j) {
    if (j <= 1){
      return  1
    }
  return g = i(j - 1) * j
  
}
console.log(i(4))

/**stack chiamate ricorsive
* la funzione j va per 3 volte al return g che a sua volta torna alla funzione j, 
* dopo tre cicli si verifica la codizione dell'if e dà il valore finale
**7
