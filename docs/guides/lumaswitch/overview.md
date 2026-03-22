# LumaSwitch Overview

This page introduces LumaSwitch and summarizes the hardware capabilities relevant to FRC robots.

!!! info "Unofficial Docs"
    This is an unofficial community guide. For the official Luma documentation, see
    [docs.luma.vision/p1](https://docs.luma.vision/p1/).

---

## About LumaSwitch

LumaSwitch is a five-port unmanaged Ethernet switch built for FRC robot use, with optional
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

## LumaSwitch Docs

- [Mounting](mounting.md)
- [Wiring](wiring.md)
- [Troubleshooting](troubleshooting.md)

---

## Next Steps

After reviewing the hardware basics, continue with [Wiring](wiring.md) and then
[Luma Networking](../networking.md).
