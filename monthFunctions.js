module.exports.firstXOfMonth = firstXOfMonth

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function firstXOfMonth(date, day) {
    //
    if (typeof date === 'undefined') {
        date = new Date()
    }

    firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1, 00, 00, 00)

    if (firstOfMonth.getDay() === day) {
        return firstOfMonth
    } else if (firstOfMonth.getDay() < day) {
        return new Date(firstOfMonth.getFullYear(), firstOfMonth.getMonth(), day - firstOfMonth.getDay() + 1, 00, 00, 00)
    } else {
        return new Date(firstOfMonth.getFullYear(), firstOfMonth.getMonth(), 8 - firstOfMonth.getDay() + day, 00, 00, 00)
    }
}
