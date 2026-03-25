
# Luma Networking

This guide covers the physical wiring and networking setup for Luma coprocessors using PhotonVision.

---


# Physical Networking & Wiring Options

This section covers the recommended and alternative ways to power and connect your P1 coprocessor, including detailed diagrams, safety notes, and best practices for both new and legacy setups.

---

## Off-Robot Networking Requirement

!!! warning "Off-Robot Networking Requirement"
    When using PhotonVision off the robot, you must connect the coprocessor to a physical router or radio and connect your laptop to that same network. Other networking setups are unreliable and generally unsupported.

---

## New Radio (2025–Present) & LumaSwitch (Recommended)

The simplest and most reliable method of wiring P1 is by utilizing the Vivid Hosting radio or [LumaSwitch](https://luma.vision/products/lumaswitch)'s PoE output.

![Radio PoE Diagram](../../Radio%20PoE%20Diagram.png){width="600"}

**Radio:**

Simply connect the radio to P1 with an ethernet cable and switch on the [PoE dipswitch](https://frc-radio.vivid-hosting.net/overview/wiring-your-radio#power-over-ethernet-poe-for-downstream-devices) for the port its plugged into.

**LumaSwitch:**

Connect an ethernet cable between P1 and one of the PoE ports on LumaSwitch. Use a 5A fuse to enable PoE on the chosen slot.

!!! warning
    When powering P1 via PoE, ensure you are using an ethernet cable that uses at least 24 AWG wire for each conductor. DO NOT use "low profile" ethernet cable.

!!! note "Using LumaSwitch"
    If you are using LumaSwitch, use the non-PoE uplink port for the radio connection and only install PoE fuses on ports that should provide passive PoE.

For full switch specifications, mounting, and wiring details, see the [LumaSwitch Guide](../guides/lumaswitch/overview.md).

---

## PoE Injector or Custom PoE Cable

If you do not wish to use PoE from the radio or would like to connect P1 to an ethernet switch, you can still power P1 via PoE by using a PoE injector or custom PoE cable. Use a 5A or 10A fuse in the slot powering the PoE injector or cable.

![PoE Diagram](../../PoE%20Diagram.png){width="600"}

!!! warning
    When powering P1 via PoE, ensure you are using an ethernet cable that uses at least 24 AWG wire for each conductor. DO NOT use "low profile" ethernet cable.

---

## Weidmuller Connector (Redundant/Alternative Power)

If not using PoE, or you would like to have redundant power, P1 can also be powered through the Weidmuller connector next to the ethernet port. Use a 5A or 10A fuse in the slot powering the device.

![Weidmuller Diagram](../../Weidmuller%20Diagram.png){width="600"}

---

## Old Radio (Pre-2025)

Direct radio/switch Ethernet networking can still work, but verify your topology and power settings before testing.

!!! danger
    Ensure DIP switches **1 and 2 are OFF** on the radio before connecting the coprocessor. Incorrect PoE settings can electrically damage the coprocessor.

Recommended wiring path:

- **radio → switch → coprocessor(s) + laptop**

---

## Network Hostname

Rename each device from the default `photonvision` hostname to a unique value, such as `Photon-OrangePi-Left` or `Photon-RPi5-Back`.

1. Open PhotonVision and go to **Settings → Networking**.
2. Change the hostname from `photonvision` to a unique value.
3. Use only letters (`A-Z`), numbers (`0-9`), and hyphens (`-`).

Unique hostnames help you manage multiple coprocessors reliably.

---

## Robot Networking (Static IP)

PhotonVision strongly recommends using static IPs on the robot network for reliability.

!!! warning
    Use static IP mode only on your robot network. Do not force static settings on random home networks unless you are comfortable managing local network configuration.

1. Power the robot and connect your laptop to the robot network.
2. Open PhotonVision at `photonvision.local:5800` (or your current device address).
3. Go to **Settings → Networking**.
4. Enter your team number.
5. Set IP mode to **Static**.
6. Set the coprocessor IP to `10.TE.AM.xx`, where `xx` is unique on your robot (commonly `.6` through `.19`).
7. Click **Save**.
8. Power-cycle the robot and coprocessor.
9. Reconnect using `10.TE.AM.xx:5800`.

!!! note "Team Number Field Tip"
    The team number field can also accept a hostname or IP (for example, `localhost`) when you are testing with a simulated robot program.

---

## Port Forwarding

!!! note
    If you are using a VH-109 radio (2025 and later, excluding China and Taiwan), prefer tethering to the dedicated DS Ethernet port instead of using port forwarding.

If you need to view an Ethernet-connected vision device while tethered over roboRIO USB, WPILib `PortForwarder` can forward the PhotonVision web UI port.

```java
PortForwarder.add(5800, "photonvision.local", 5800);
```

!!! note
    Replace `photonvision.local` with your actual coprocessor hostname if you changed it.

---

## Camera Stream Ports

- Camera streams start at ports `1181` and `1182` for camera 1.
- Each additional camera uses the next two ports (`1183/1184`, `1185/1186`, etc.).
- A quick way to identify a stream port is to double-click the stream in PhotonVision and check the opened page URL.

!!! warning
    If stream forwarding remaps to a different port than the original stream port, the stream may
    not render correctly in the UI.

---

## SSH Access (Advanced)

- SSH is available for advanced troubleshooting/configuration.
- Default credentials for image `v2026.0.3+` are `photon` / `vision`.
- Legacy credentials `pi` / `raspberry` may still work, but are expected to be removed in a
  future release.

---

## Next Steps

After networking is set up, continue with the **[Calibration Guide](calibration.md)**.
