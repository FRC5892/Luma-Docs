# Luma P1 Overview

!!! info "Unofficial Docs"
    This is an unofficial community guide. For the official Luma documentation, see
    [docs.luma.vision/p1](https://docs.luma.vision/p1/).

## Overview

The **Luma P1** is an affordable FRC-focused vision co-processor and camera system released
for the **2026 FRC REBUILT season**. It is designed to give FRC teams a capable, budget-friendly
vision solution that works out of the box.

Under the hood, the Luma P1 is built around a **Raspberry Pi Compute Module 5 (CM5)** and
runs [PhotonVision](https://photonvision.org/) as its vision processing software.

## How It Compares

If you have run a Limelight before, the Luma P1 will look familiar — it's decently
similar to running a Limelight with PhotonVision. The key differences are:

| Feature | Luma P1 | Typical Limelight |
|---------|---------|-------------------|
| Vision Software | PhotonVision | Limelight OS (or PhotonVision) |
| Co-processor | Raspberry Pi CM5 | Varies |
| PoE Support | Yes |  Varies by model |
| Price | ~100 usd (each) | ~300 usd (each) |
| Open-source software | PhotonVision | N/A |

!!! tip
    Teams already using PhotonVision on a coprocessor will find the transition to Luma P1
    very straightforward — the interface and WPILib integration are identical.

## Key Features

- **PoE (Power over Ethernet)** — Run a single Ethernet cable for both power and data.
  This simplifies wiring significantly on a competition robot.
- **PhotonVision** — Industry-standard FRC vision software with AprilTag detection,
  object tracking, and WPILib integration.
- **Raspberry Pi CM5** — Powerful, well-supported hardware with an active community.
- **Affordable** — Built with FRC team budgets in mind.
- **FRC 2026 ready** — Designed for the 2026 FRC season.

## How It Works (High Level)

```
Robot Code (RoboRIO)
       │
       │  NetworkTables / PhotonLib
       ▼
   Luma P1 Camera
   ┌─────────────────────────────┐
   │  Camera Sensor              │
   │        ↓                    │
   │  Raspberry Pi CM5           │
   │  (running PhotonVision)     │
   │        ↓                    │
   │  Ethernet (PoE)             │
   └─────────────────────────────┘
       │
       ▼
  POE Switch / Radio
```

The Luma P1 connects to your robot network over Ethernet. PhotonVision processes the camera
feed and publishes pose estimates and target data over NetworkTables, which your robot code
reads using [PhotonLib](https://docs.photonvision.org/en/latest/docs/programming/photonlib/index.html).

## Next Steps

Ready to get started? Check out the [Prerequisites](prerequisites.md) page to see what
you need before flashing your Luma P1.
