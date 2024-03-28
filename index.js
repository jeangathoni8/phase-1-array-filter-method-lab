// Code your solution here
// Code your solution here
function findMatching(drivers, name) {

    const lowerCaseName = name.toLowerCase();
    
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === lowerCaseName);
    
    return matchingDrivers;
}

module.exports = findMatching;



function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}



function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

module.exports = matchName;


