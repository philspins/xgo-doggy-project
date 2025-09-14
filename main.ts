radio.onReceivedString(function (receivedString) {
    if (receivedString == "savePose") {
        xgo.GetPosestate(xgo.pose_enum.pose1)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "joystick_x") {
        if (value < 0) {
            xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_left, value, 0.1)
        } else {
            xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_right, value, 0.1)
        }
    } else if (name == "joystick_y") {
        if (value > 0) {
            xgo.translational_step(xgo.translation_direction_enum.Forward, value)
        } else {
            xgo.translational_step(xgo.translation_direction_enum.Backward, value)
        }
    }
})
xgo.init_xgo_serial(SerialPin.P14, SerialPin.P13)
radio.setGroup(1)
basic.forever(function () {
	
})
