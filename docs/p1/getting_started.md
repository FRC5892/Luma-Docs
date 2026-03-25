# Getting Started With P1

1. P1 ships pre-flashed with the latest PhotonVision image available at the time it was assembled. It is not required to flash PhotonVision out of the box unless a new version has been released. In that case, follow the [flashing instructions](flashing.md) to update the PhotonVision installation.
2. Wire P1 to your robot or test bench following the [wiring instructions](wiring.md). If you are setting up multiple devices, it is recommended to only set up/power one at a time to make it easier to find each device on the robot network.
3. Power up the robot and get comms. Navigate to `photonvision.local:5800` in your browser, this will bring you to the PhotonVision web configuration.

    !!! warning
        If you have multiple PhotonVision devices on the robot, this address may point to any of them. It is recommended to set up each device one at a time, giving each a static IP and unique hostname as outlined in [networking instructions](networking.md) and [PhotonVision networking documentation](https://docs.photonvision.org/en/latest/docs/quick-start/networking.html#networking)

4. Follow the instructions for calibrating the camera as described in [calibration.md](calibration.md) and in  [PhotonVision docs](https://docs.photonvision.org/en/latest/index.html) to finish setting up and using PhotonVision.