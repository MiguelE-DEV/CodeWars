var greet = function(name) {
    name = name.split('')
    name[0] = name[0].toUpperCase()
    name = name.join('')
    for(let i = 1; i < name.length; i++){
      name = name.split('')
      name[i] = name[i].toLowerCase()
      name = name.join('')
    }
    return `Hello ${name}!`
  };