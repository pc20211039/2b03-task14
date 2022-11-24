loops.everyInterval(3000, function () {
    datalogger.log(
    datalogger.createCV("light", input.lightLevel()),
    datalogger.createCV("temp", input.temperature()),
    datalogger.createCV("head", input.compassHeading())
    )
})
