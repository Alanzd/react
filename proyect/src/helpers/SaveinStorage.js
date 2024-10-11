// lo hago reutilizable pasandole dos params, el item que quiero guardar (key) y el item en si (movie)
// tengo que exportarlo

export const SaveInStorage = (key, elem) => {

  //conseguir los elem del localStorage

  let elements = JSON.parse(localStorage.getItem(key)) || [];

  // comprobar que sea un array

  if(Array.isArray(elements)) {
    elements.push(elem)
  } else {
    elements = [elem]
  }

 // guardo en el localStorage, solo permite guardar numeros o strings

  localStorage.setItem(key, JSON.stringify(elements))
  // devolver el objeto guardado
   return elem
    
}