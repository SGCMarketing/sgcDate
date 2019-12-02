module.exports.firstDayOfYear = firstDayOfYear
module.exports.lastDayOfYear = lastDayOfYear

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function firstDayOfYear(date) {
    //
    return new Date(date.getFullYear(), 0, 1, 00, 00, 00, 0)
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function lastDayOfYear(date) {
    //
    d = new Date(date.getFullYear() + 1, 0, 0)
    return d
}
