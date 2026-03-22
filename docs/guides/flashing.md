# Flashing a Luma P1

This guide walks you through flashing the latest PhotonVision image onto your Luma P1 camera.

!!! info "Unofficial Docs"
    This is an unofficial community guide. For the official Luma documentation, see
    [docs.luma.vision/p1](https://docs.luma.vision/p1/).

!!! warning "Read Before You Start"
    Make sure you have completed all steps on the [Prerequisites](../getting-started/prerequisites.md)
    page before continuing.

---

## What Is Flashing?

**Flashing** is the process of connecting a device to a computer and using a specialized tool
to write an image file (the newest release of PhotonVision) to the device's internal storage.
This overwrites the existing firmware and calibration data on the device.

!!! tip "Don't Want to Lose Calibration?"
    If you are updating a **previously calibrated** Luma to a newer PhotonVision version, use
    the **Offline Update** feature in PhotonVision instead of flashing the OS. This preserves
    your calibration settings. *(Offline Update docs coming soon.)*

---

## Supplies

- Luma P1 camera
- USB-C cable
- Programming laptop with prerequisites installed
- Tape or labels (to mark flashed cameras)

---

## Steps

### Step 1 — Enter Flash Mode

1. Connect the **USB-A** end of your cable to your computer.
2. Connect the **USB-C** end to the **USB-C flash port** on the Luma P1.
3. Run the **RPIBoot** tool to mount the Luma P1 as a USB mass-storage device:

=== "Windows"
    Search for **"cm5"** in the Windows Start Menu, then run:
    > **rpiboot-CM4-CM5 - Mass Storage Gadget**

=== "macOS / Linux"
    Run `rpiboot` from the terminal according to the RPIBoot documentation.

4. Wait until the application says you can press any key to close — press ++enter++.
5. The Luma is now in **flash mode** ✅

!!! danger "Do NOT Unplug"
    **Do not unplug the Luma P1 while it is in flash mode.** Unplugging it will exit flash
    mode and you will need to start over from Step 1.

---

### Step 2 — Flash with Raspberry Pi Imager

1. Open **Raspberry Pi Imager**.
2. Work through each menu in order. For **every single menu**, scroll to the **bottom** and
   select the **last option** (no filtering, custom config, etc.).
3. When prompted for a custom image, a file picker will appear — select the
   **PhotonVision image for Luma P1** that you downloaded earlier.
4. When you reach the step for selecting a **drive to flash to**, pause and read the next
   warning carefully.

!!! danger "System Drives — Critical Warning"
    Make sure the **"Show system drives"** toggle is **OFF**.

    **Do NOT enable "Show system drives." Do NOT touch that toggle.**

    You should see a device named **`mmcblk0`** appear in the list — this is the Luma P1's
    internal storage. Select `mmcblk0`.

5. When prompted to confirm that you want to erase everything on `mmcblk0`, press **OK**.
6. A progress bar will appear. Wait for the flash to complete — the imager will tell you
   when the camera is successfully flashed.

---

### Step 3 — Mark and Unplug

7. Mark the Luma with tape or a label to indicate it has been flashed.
8. Unplug the Luma P1 from your computer.

---

## Flashing Multiple Cameras

If you have **more than one** Luma P1 to flash, **do not close Raspberry Pi Imager** after
flashing the first one.

1. Unplug the flashed Luma (mark it with tape first).
2. Repeat **Steps 1** above with the next Luma to put it into flash mode.
3. Switch back to Raspberry Pi Imager — you will see a **"Flash Another"** button.
4. Click **"Flash Another"** and flash the new Luma.
5. Mark it as flashed and repeat for any remaining cameras.

---

## Troubleshooting

See the **[Troubleshooting Guide](troubleshooting.md)** for common flashing issues.

---

## Next Steps

Once all your cameras are flashed, proceed to the **[Calibration Guide](calibration.md)**.
