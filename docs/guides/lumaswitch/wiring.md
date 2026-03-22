# LumaSwitch Wiring

This page covers powering LumaSwitch and connecting PoE and non-PoE devices.

!!! info "Unofficial Docs"
    This is an unofficial community guide. For the official Luma documentation, see
    [docs.luma.vision/p1](https://docs.luma.vision/p1/).

---

## Powering LumaSwitch

- Power from unregulated battery voltage via PDH/PDP/MPM into the WAGO lever terminal
- WAGO input accepts `26 AWG` through `16 AWG`
- If powering downstream PoE loads, `16 AWG` or `18 AWG` is recommended
- Typical upstream protection:
  - `15A` to `20A` if you are powering PoE devices (subject to legal wiring rules for your robot)
  - `5A` is typically sufficient when not using PoE

When LumaSwitch powers on, Ethernet status LEDs should blink once.

---

## Connecting Non-PoE Devices

- Use the non-PoE port on the same side as the power input for uplink (typically the robot radio)
- The four PoE-capable ports can still be used for non-PoE devices
- Remove the fuse on a PoE-capable port to disable PoE output for that port

---

## Powering Passive PoE Devices

- Install a fuse on each PoE-capable port you want to energize
- Red PoE indicator LED means PoE is active and fuse path is intact
- Luma P1 is a common passive PoE load for these ports

!!! warning "Fuse Coordination"
    Use downstream PoE fuses with lower amperage than the upstream fuse protecting LumaSwitch.
    This helps ensure a downstream short opens only that port fuse instead of taking down the
    entire switch power feed.

---

## Next Steps

Continue with [Luma Networking](../../p1/networking.md).
