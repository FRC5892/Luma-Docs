

# Luma P1 Calibration Guide

This guide provides step-by-step instructions for calibrating your Luma P1 camera to ensure accurate vision measurements.

!!! warning "Before You Begin"
    Complete all steps on the [Prerequisites](prerequisites.md) page and ensure your cameras have been [flashed](flashing.md) before starting calibration.

---

## What Is Calibration?

Calibration teaches the camera its unique lens characteristics—such as focal length and lens distortion—so it can make accurate real-world measurements (distances, angles, pose estimates).

Without calibration, AprilTag pose estimates will be inaccurate.

!!! tip "Preserving Calibration When Updating"
    If updating a **previously calibrated** camera to a newer PhotonVision version, use the **Offline Update** feature in PhotonVision rather than re-flashing the operating system. This approach preserves your calibration data. *(Offline Update documentation coming soon.)*

---

## Required Materials

- Flashed Luma P1 cameras
- Ethernet cables (×3)
- Programming laptop with FRC Game Tools installed
- Vision calibration board
- Surface to prop up the Luma
- Second person to hold the calibration board
- Sticky notes or another method to track which cameras have been calibrated

---

## Calibration Procedure

### Step 1: Connect the Luma to Your Network

1. Power the Luma coprocessor and connect it to your robot or bench network using Ethernet.
2. Verify your laptop is on the same network as the camera.
3. Confirm network link or activity on the switch port for that camera (typically indicated by a flashing link light). Allow the device to complete its normal boot process before opening PhotonVision.

!!! note
    For full wiring and networking setup—including radio wiring, hostname, static IP, port forwarding, stream ports, and SSH—see the [Luma Networking Guide](networking.md).

!!! tip "Using LumaSwitch?"
    On power-up, LumaSwitch Ethernet status lights should blink once. The red PoE LED indicates PoE is active on fused PoE ports.

### Step 2: Access the PhotonVision UI

1. Open a browser and navigate to the PhotonVision dashboard. The default address is typically `http://photonvision.local:5800` or the device's IP address with port `5800`. (Note: use 'http://', not 'https://'.)
2. You should see the PhotonVision interface with a live camera feed.

!!! note
    See the [PhotonVision documentation](https://docs.photonvision.org/) for the exact default IP or hostname for your device, as well as troubleshooting instructions.

### Step 3: Open the Calibration Tool

1. In the PhotonVision dashboard, navigate to the **Camera** tab.
2. Select your camera from the list.
3. Click on the **Calibration** section or tab.

### Step 4: Capture Calibration Images

1. Select the appropriate **calibration board** type (e.g., chessboard, charuco).
2. Enter the board dimensions exactly as measured for your target.
3. Have your second person hold the calibration board flat and steady.
4. Move the camera (or the board) to many different angles and distances, capturing images that cover the full frame—corners, edges, and center.
5. Capture a minimum of 12 images. **25–30 images** is recommended for a good calibration. More is better. Your goal is to blot out the feed with the multicolored dots.

!!! tip "Tips for a Good Calibration"
    - Ensure the **entire field of view** is covered—not just the center.
    - Use a mix of distances and angles, including extreme ones.
    - Ensure the board is flat and the image is sharp (not blurry).
    - Good lighting helps—avoid harsh shadows on the board.

### Step 5: Run the Calibration

1. Once you have enough images, click **Calibrate** (or the equivalent button in PhotonVision).
2. PhotonVision will process the images and report a **reprojection error**.
3. A reprojection error below **1.0 px** is generally considered good for FRC use. Below **0.5 px** is excellent.

!!! warning "High Reprojection Error?"
    If your reprojection error is above 2–3 px, discard the calibration, delete blurry or poorly-angled images, and try again.

### Step 6: Save and Label

1. Save the calibration in PhotonVision.
2. Label the camera (e.g., with a pen or tape) to indicate it has been calibrated and which position it will occupy on the robot (e.g., "Front Left", "Rear Right").

---

## Calibrating Multiple Cameras

Repeat Steps 1–6 for each Luma P1. Each camera must be calibrated **individually** because each lens has its own unique characteristics.

!!! tip
    Keep a spreadsheet or notes of each camera's label and reprojection error for reference during competition.

---

## Troubleshooting

For common calibration and networking issues, see the [Troubleshooting Guide](troubleshooting.md).

---

## Next Steps

Once all cameras are calibrated and labeled, you are ready to mount them on your robot and configure your robot code using PhotonLib.

For WPILib / PhotonLib integration, see the [PhotonVision documentation](https://docs.photonvision.org/).
