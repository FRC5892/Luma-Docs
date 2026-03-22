# Troubleshooting

This page collects common issues across flashing, networking, and calibration.

!!! info "Unofficial Docs"
    This is an unofficial community guide. For the official Luma documentation, see
    [docs.luma.vision/p1](https://docs.luma.vision/p1/).

---

## Flashing Issues

| Problem | Solution |
|---------|----------|
| `mmcblk0` does not appear | Make sure RPIBoot completed successfully and the Luma is still connected |
| RPIBoot does not show "cm5" result | Try reinstalling RPIBoot or using a different USB port |
| Flash fails partway through | Restart from Step 1; make sure the USB-C cable is secure |
| Luma not recognized after flashing | Wait about 60 seconds for the Pi to boot after its first flash |

---

## Networking Issues

| Problem | Solution |
|---------|----------|
| Camera feed not visible in PhotonVision | Check Ethernet wiring and ensure laptop and camera are on the same network |
| Device hostname does not resolve | Confirm unique hostname in PhotonVision settings and reboot the device |
| Cannot reach static IP | Verify team number/IP format and reboot robot and coprocessor |

---

## Calibration Issues

| Problem | Solution |
|---------|----------|
| Calibration board not detected | Ensure the board is flat, well-lit, and fully in frame |
| High reprojection error | Delete outlier images; recapture with better coverage and lighting |
| Changes not saving | Make sure you click **Save** after calibrating |

---

## Next Steps

If you still have issues:

1. Re-check the relevant guide for your current task:
   - [Flashing](flashing.md)
   - [Networking](networking.md)
   - [Calibration](calibration.md)
2. Check official PhotonVision docs for device-specific behavior:
   [docs.photonvision.org](https://docs.photonvision.org/)
