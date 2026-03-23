# LumaSwitch Troubleshooting

This page covers common LumaSwitch setup and power-distribution issues.

---

## Common Issues

| Problem | What To Check |
|---------|----------------|
| No link lights after power-up | Verify upstream fuse, polarity, and that battery voltage is present at the WAGO input |
| Radio has no network through switch | Confirm radio is connected to the non-PoE uplink port on the power-input side |
| Device should be non-PoE but is unstable | Remove the PoE fuse for that port to disable passive PoE output |
| PoE device not powering | Confirm the port has a properly seated fuse and the red PoE LED is lit |
| Entire switch dies on single downstream short | Recheck fuse coordination: downstream PoE fuses should be lower than upstream switch protection |

---

## Next Steps

- For full robot network setup, see [Luma Networking](../../p1/networking.md)
- For camera setup after network is working, see [Calibration](../../p1/calibration.md)
