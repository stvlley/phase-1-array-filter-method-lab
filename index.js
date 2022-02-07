
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

function fuzzyMatch(array, stringMatch) {
    return array.filter(element => element.startsWith(stringMatch))
}


function matchName (array, string) {
    return array.filter(el => el.name == string )

}
