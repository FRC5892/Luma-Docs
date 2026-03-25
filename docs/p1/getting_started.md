
# Getting Started with Luma P1

!!! info "About This Page"
    This guide will help you set up your Luma P1 camera for the first time, from unboxing to first use with PhotonVision.

---

## Initial Setup Steps

1. **Check Firmware:**  
   Your P1 ships pre-flashed with the latest PhotonVision image available at assembly. You only need to re-flash if a newer version is released. If needed, follow the [flashing instructions](flashing.md).

2. **Wiring:**  
   Connect P1 to your robot or test bench using the [wiring instructions](wiring.md). If you have multiple devices, set up and power them one at a time to simplify network identification.

3. **Power Up and Access:**  
   Power on the robot. In your browser, go to `photonvision.local:5800` to access the PhotonVision web interface.

    !!! warning "Multiple Devices Detected"
        If you have more than one PhotonVision device on your robot, `photonvision.local:5800` may connect to any of them. Set up each device individually, assign a static IP and unique hostname as described in the [networking instructions](networking.md) and [PhotonVision networking documentation](https://docs.photonvision.org/en/latest/docs/quick-start/networking.html#networking).

4. **Calibrate:**  
   Calibrate the camera using [calibration.md](calibration.md) and the [PhotonVision docs](https://docs.photonvision.org/en/latest/index.html) to complete setup and start using vision features.

---

!!! tip "Need More Help?"
    For troubleshooting or advanced setup, see the [troubleshooting guide](troubleshooting.md) or reach out to the FRC 5892 community.