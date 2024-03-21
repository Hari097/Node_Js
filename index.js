// Default Export

let greeting = (user) => {
    let userMsg = "Hi " + user + "Welcome Node Js"
    return userMsg 
}





// Named Export
let add = (a,b) => {
  return a + b
}

let sub = (a,b) => {
    return a - b
  }

export default add