radio.onReceivedString(function (receivedString) {
    if (receivedString == "stand") {
        xgo.execution_action(xgo.action_enum.Stand)
    }
})
xgo.init_xgo_serial(SerialPin.P14, SerialPin.P13)
radio.setGroup(1)
basic.forever(function () {
	
})
