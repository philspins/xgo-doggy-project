radio.onReceivedString(function (receivedString) {
    if (receivedString == "savePose") {
        xgo.GetPosestate(xgo.pose_enum.pose1)
    } else if (receivedString == "restorePose") {
        xgo.SetPosestate(xgo.pose_enum.pose1)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "dogX") {
        if (value < 0) {
            xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_left, value, 0.1)
        } else if (value < 0) {
            xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_right, value, 0.1)
        }
    } else if (name == "dogY") {
        if (value > 0) {
            xgo.translational_step(xgo.translation_direction_enum.Forward, value)
        } else if (value < 0) {
            xgo.translational_step(xgo.translation_direction_enum.Backward, value)
        }
    } else if (name == "armX") {
        xgo.Manipulator_clampX(value)
    } else if (name == "armZ") {
        xgo.Manipulator_clampZ(value)
    } else if (name == "openVise") {
        xgo.Manipulator_clamp(255)
    } else if (name == "closeVise") {
        xgo.Manipulator_clamp(0)
    }
})
xgo.init_xgo_serial(SerialPin.P14, SerialPin.P13)
radio.setGroup(1)
basic.showIcon(IconNames.Giraffe)
basic.forever(function () {
	
})
