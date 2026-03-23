
# Troubleshooting

This page collects common issues and solutions for flashing, networking, and calibration.

---

## Flashing Issues

| Problem                          | Solution                                                                 |
|-----------------------------------|--------------------------------------------------------------------------|
| `mmcblk0` does not appear         | Ensure RPIBoot completed successfully and the Luma is still connected.   |
| RPIBoot does not show "cm5" result| Try reinstalling RPIBoot or using a different USB port.                  |
| Flash fails partway through       | Restart from Step 1; ensure the USB-C cable is secure.                   |
| Luma not recognized after flashing| Wait about 60 seconds for the Pi to boot after its first flash.          |

---

## Networking Issues

| Problem                              | Solution                                                                 |
|---------------------------------------|--------------------------------------------------------------------------|
| Camera feed not visible in PhotonVision| Check Ethernet wiring and ensure both laptop and camera are on the same network. |
| Device hostname does not resolve      | Confirm unique hostname in PhotonVision settings and reboot the device.  |
| Cannot reach static IP                | Verify team number/IP format and reboot robot and coprocessor.           |

---

## Calibration Issues

| Problem                      | Solution                                                                 |
|------------------------------|--------------------------------------------------------------------------|
| Calibration board not detected| Ensure the board is flat, well-lit, and fully in frame.                  |
| High reprojection error       | Delete outlier images; recapture with better coverage and lighting.      |
| Changes not saving            | Make sure you click **Save** after calibrating.                          |

---

## Next Steps

If you still have issues:

1. Re-check the relevant guide for your current task:
   - [Flashing](flashing.md)
   - [Networking](networking.md)
   - [Calibration](calibration.md)
2. Check the official PhotonVision documentation for device-specific behavior: [docs.photonvision.org](https://docs.photonvision.org/)
