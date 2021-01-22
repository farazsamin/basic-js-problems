// https://github.com/farazsamin/basic-js-problems
function kilometerToMeter(km = 0) {
    if (km <= 0) {
        return "Kilometer must be greater than zero";
    } else
        return km * 1000;
}


function budgetCalculator(watch = 0, phone = 0, laptop = 0) {
    if (watch < 0)
        return "Number of Watches can't be negative";
    if (phone < 0)
        return "Number of phones can't be negative";
    if (laptop < 0)
        return "Number of laptops can't be negative";
    if (watch === 0 && phone === 0 && laptop === 0)
        return "You must buy something!";
    else
        return watch * 50 + phone * 100 + laptop * 500;
}


function hotelCost(days = 0) {
    if (days <= 0)
        return "Days must be greater than 0";
    else if (days <= 10) {
        return days * 100;
    } else if (days <= 20) {
        return 10 * 100 + (days - 10) * 80;
    } else {
        return 10 * 100 + 10 * 80 + (days - 20) * 50;
    }
}



function megaFriend(friends) {
    var longestName = "";
    var longestNameLength = 0;
    if (friends.length == 0)
        return "Name can't be empty ";
    else {
        for (var i = 0; i < friends.length; i++) {
            if (friends[i].length > longestNameLength) {
                longestNameLength = friends[i].length;
                longestName = friends[i];
            }
        }
        return longestName;
    }

}