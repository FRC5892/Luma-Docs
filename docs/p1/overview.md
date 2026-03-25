
# Luma P1 Overview

!!! info "Unofficial Docs"
    This is an unofficial community guide. For the official Luma documentation, see [docs.luma.vision/p1](https://docs.luma.vision/p1/).

## Overview

The **Luma P1** is an affordable, FRC-focused vision co-processor and camera system released for the **2026 FRC REBUILT season**. It is designed to provide FRC teams with a capable, budget-friendly vision solution. 

![Luma P1](../assets/p1/P1%20Cover.jpg){width="700"}

## Hardware Specs
* Reliable Buck-Boost power stage
    * 3.3V - 22.5V Input range
    * Reverse voltage protection
    * Passive PoE + Weidmuller power input
* Powered by Raspberry Pi CM5
* Actively cooled to eliminate thermal throttling and maintain max performance
* Integrated, pre-focused OV9281 global shutter camera
* Up to 1280x800 at 120fps capture
* 80 degree horizontal FOV
* 56 degree vertical FOV
* USB 3 port for additional external cameras/USB devices
* 3D printed PA-CF enclosure
* 0.22 lbs (99g)

Under the hood, the Luma P1 is built around a **Raspberry Pi Compute Module 5 (CM5)** and runs [PhotonVision](https://photonvision.org/) as its vision processing software. It can stream in both 1280x800 and 600x400 resolution. 

## How It Compares

If you have used a Limelight before, the Luma P1 will feel familiar—it is similar to running a Limelight with PhotonVision. The key differences are:

| Feature              | Luma P1         | Typical Limelight         |
|----------------------|-----------------|--------------------------|
| Vision Software      | PhotonVision    | Limelight OS (or PhotonVision) |
| Co-processor         | Raspberry Pi CM5| Varies                   |
| PoE Support          | Yes             | Varies by model          |
| Price                | ~100 USD (each) | ~300 USD (each)          |
| Open-source software | PhotonVision    | N/A                      |

!!! tip
    Teams already using PhotonVision on a coprocessor will find the transition to Luma P1 very straightforward—the interface and WPILib integration are identical.

## Key Features

- **PoE (Power over Ethernet):** Run a single Ethernet cable for both power and data, greatly simplifying wiring on a competition robot.
- **PhotonVision:** Industry-standard FRC vision software with AprilTag detection, object tracking, and WPILib integration.
- **Raspberry Pi CM5:** Powerful, well-supported hardware with an active community.
- **Affordable:** Built with FRC team budgets in mind.

  
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
  PoE Switch / Radio
```

The Luma P1 connects to your robot network over Ethernet. PhotonVision processes the camera feed and publishes pose estimates and target data over NetworkTables, which your robot code reads using [PhotonLib](https://docs.photonvision.org/en/latest/docs/programming/photonlib/index.html).

## Quick Links
* [Store Page](https://luma.vision/products/p1)
* [PhotonVision Docs](https://docs.photonvision.org/en/latest/)
* [STEP file](files/P1%20Assembly%20Public.step)
* [Mounting Diagram](files/P1%20Assembly%20Public%20Drawing.pdf)
* [Enclosure 3D printing files](https://makerworld.com/en/models/1925518-luma-p1-printable-enclosure)
* [Airflow spacer 3D printing files](https://makerworld.com/en/models/1939322-luma-p1-airflow-spacer)

## Next Steps

Ready to get started? Check out the [Prerequisites](prerequisites.md) page to see what you need before flashing your Luma P1.
