
 const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']





// function findMatching takes in array: 'drivers' and string
function findMatching(array, passedInString) {
    //create new variable to store return
    let driversNamedBobby = array.filter(driverName => driverName.toUpperCase() == passedInString.toUpperCase())
    // returns matching list of drivers
    return driversNamedBobby
}
// should have two matching results

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

let newDriver = []

function fuzzyMatch(array, string) {
    newDriver = array.filter( driver => driver == string)
    return newDriver.push()

}
