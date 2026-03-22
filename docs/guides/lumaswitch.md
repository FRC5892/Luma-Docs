# LumaSwitch

This page covers the LumaSwitch hardware, mounting, and wiring basics for FRC robot use.

!!! info "Unofficial Docs"
    This is an unofficial community guide. For the official Luma documentation, see
    [docs.luma.vision/p1](https://docs.luma.vision/p1/).

---

## Overview

LumaSwitch is a five-port unmanaged Ethernet switch designed for FRC robots, with optional
per-port passive PoE output for supported devices such as Luma P1.

---

## Hardware Specs

- Same buck-boost power-stage family used on Luma P1
- Input range: `3.3V` to `22.5V`
- Reverse polarity protection
- WAGO 2601 power input
- Five-port `10/100` unmanaged switch
- Four ports with optional unregulated passive PoE
- Per-port fuse protection
- PoE activity indicator LED
- Per-port PoE can be disabled by removing that port fuse
- Lightweight design (under about `0.25 lb` with fuses installed)

---

## Mounting

- Four `5 mm` (`0.2 in`) through-holes, one at each corner
- Hole pattern is on `0.5 in` pitch
- Accepts `#10` or `M4` hardware
- Zip-tie notches are available on the enclosure for strap mounting

---

## Wiring

### Powering LumaSwitch

- Power from unregulated battery voltage via PDH/PDP/MPM into the WAGO lever terminal
- WAGO input accepts `26 AWG` through `16 AWG`
- If powering downstream PoE loads, `16 AWG` or `18 AWG` is recommended
- Typical upstream protection:
  - `15A` to `20A` if you are powering PoE devices (subject to legal wiring rules for your robot)
  - `5A` is typically sufficient when not using PoE

When LumaSwitch powers on, Ethernet status LEDs should blink once.

### Connecting Non-PoE Devices

- Use the non-PoE port on the same side as the power input for your uplink (typically robot radio)
- The four PoE-capable ports can still be used for non-PoE devices
- Remove the fuse on a PoE-capable port to disable PoE output for that port

### Powering Passive PoE Devices

- Install a fuse on each PoE port you want to energize
- Red PoE indicator LED means PoE is active and fuse path is intact
- Luma P1 is a common passive PoE load for these ports

!!! warning "Fuse Coordination"
    Use downstream PoE fuses with lower amperage than the upstream fuse protecting LumaSwitch.
    This helps ensure a downstream short opens only that port fuse instead of taking down the
    entire switch power feed.

---

## Next Steps

After switch wiring is complete, continue with the [Luma Networking Guide](networking.md).
