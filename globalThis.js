// globalThis es la variable global por excelencia,todo lo que es GLOBAL sale de ella,
// en el caso de Node la variable window no existe, se usa global
// pero exite globalThis y es mejor usar esta última

console.log(globalThis);

// hace lo mismo ya que console.log sale de globalThis
globalThis.console.log(globalThis);