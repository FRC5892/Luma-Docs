
# Prerequisites

Before you can flash and use your Luma P1, you need to gather a few tools and downloads.

---

## Hardware

You will need the following physical items:

- [x] **Luma P1 camera** (one or more)
- [ ] **LumaSwitch** *(optional but recommended for multi-camera PoE setups)*
- [x] **USB-C cable** — used to connect the Luma to your programming laptop for flashing
- [x] **Ethernet cables** (×3 recommended) — for networking during calibration
- [x] **Programming laptop** — Windows, macOS, or Linux
- [x] **Vision calibration board** — for the calibration step
- [x] **Surface to prop the Luma on** — during calibration
- [x] **Tape or labels** — to mark which cameras have been flashed

---

!!! note "Using LumaSwitch?"
    For switch mounting, wiring, fuse setup, and PoE behavior, see the [LumaSwitch Guide](../guides/lumaswitch/overview.md).

---

## Software Downloads

Download and install the following on your **programming computer** before you start:

### 1. RPIBoot

RPIBoot is required to put the Luma P1 (Raspberry Pi CM5) into USB mass-storage mode so you can flash it.

!!! note "Download Link"
    See the [official Luma docs](https://docs.luma.vision/p1/) for the current download link.

=== "Windows"
    Install the RPIBoot executable. After installation, search for **"cm5"** in the Windows Start Menu—you should see an entry called **rpiboot-CM4-CM5 - Mass Storage Gadget**.

=== "macOS / Linux"
    Follow the instructions in the official Raspberry Pi documentation for building RPIBoot from source.

### 2. Raspberry Pi Imager

The Raspberry Pi Imager is used to write the PhotonVision image to the Luma P1.

!!! warning "Use Raspberry Pi Imager — not Balena Etcher"
    The flashing process requires Raspberry Pi Imager specifically. **Do not use Balena Etcher or other imaging tools**, as they do not support the required options.

!!! note "Download Link"
    Download from [raspberrypi.com/software](https://www.raspberrypi.com/software/).

### 3. Latest PhotonVision Image for Luma P1

This is the firmware image that will be written to the camera.

!!! note "Download Link"
    See the [official Luma docs](https://docs.luma.vision/p1/) for the current release download.

### 4. FRC Game Tools *(for calibration)*

FRC Game Tools includes the Driver Station and other utilities needed during setup.

!!! note "Download Link"
    See the [official Luma docs](https://docs.luma.vision/p1/) for the current download link.

---

## Summary Checklist

Before proceeding to the [Flashing Guide](flashing.md), confirm you have everything:

- [x] Luma P1 camera(s)
- [x] USB-C cable
- [x] RPIBoot installed
- [x] Raspberry Pi Imager installed
- [x] Latest PhotonVision image for Luma P1 downloaded
- [x] Programming laptop ready

Once all boxes are checked, head over to **[Flashing your Luma P1](flashing.md)**.
