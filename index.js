//! This application that generates and outputs a hash every 5 seconds 
const getHashNow = () => {
  const randomHash = Math.random().toString(36).substr(2, 8)
  console.log(randomHash)
  setTimeout(getHashNow, 5000)
}
getHashNow()