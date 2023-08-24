// Code your solution in this file!


function distanceFromHqInFeet(pickupLoc) {
        return distanceFromHqInBlocks(pickupLoc) * 264
};

function distanceFromHqInBlocks(pickupLoc) {
        return Math.abs(pickupLoc - 42) 
};

function distanceTravelledInFeet(start, destination) {
        return (Math.abs(start - destination))*264
};

function calculatesFarePrice(start, destination) {
    //let dist = Math.abs(destination - start)*264
    let price = 0
    let dist = distanceTravelledInFeet(start, destination)
   
    if (dist <= 400) {
        return 0

    } else if (dist <= 2000) {
        return (dist-400) *0.02

    } else if (dist > 2000 && dist < 2500) {
        return  25
    }
    
    else if (dist > 2500) {
        return "cannot travel that far"
    } else {
    return price}
};

