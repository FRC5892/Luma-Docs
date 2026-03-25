

# Wiring

## Powering LumaSwitch

LumaSwitch can be powered via unregulated battery voltage directly from the PDH/PDP/MPM via the Wago lever terminal. The lever terminal can accept 26 to 16 AWG wire. If you are using LumaSwitch to power other devices with PoE, 16 or 18 AWG wire is recommended, with a 15A-20A fuse protecting the switch, depending on what is legally allowed in the port you're using. If not using PoE, you can safely use any compatible wire with a 5A fuse.

When LumaSwitch is powered on, all ethernet status lights will blink once to indicate it is powered and working properly.

## Connecting Non-PoE Devices

LumaSwitch has one port that does not support PoE on the same side as the power input. This port is recommended to be used to connect LumaSwitch to the robot radio. 

The remaining four ports can also be used with non-PoE devices. Ensure that no fuse is installed for the ports being used in this manner; PoE output will be disabled for those ports.

## Powering Passive PoE Devices
LumaSwitch can provide passive, unregulated PoE to up to 4 supported devices simultaneously, such as Luma P1. Enable PoE output on the desired ports by installing a 5A fuse for each port you would like to power a device with. The red "PoE" indicator LED will illuminate if PoE is being delivered and the installed fuse is good.

!!! note
    Ensure that the fuses you use for PoE on LumaSwitch are each rated for a lower amperage than the fuse being used to protect the switch itself. This ensures that a short in one of the downstream devices will only blow its PoE fuse, not the fuse for the whole switch.

---

## Next Steps

- [Troubleshooting](troubleshooting.md)
- [Luma Networking](../../p1/networking.md)
