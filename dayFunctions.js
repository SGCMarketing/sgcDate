module.exports.startOfDay = startOfDay
module.exports.endOfDay = endOfDay

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function startOfDay(date) {
    //
    // date.setHours(date.getHours() + 1)
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 00, 00, 00)
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function endOfDay(date) {
    //
    // date.setHours(date.getHours() + 0)
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 99)
}
