# Calibrating a Luma P1

This guide walks you through calibrating your Luma P1 camera for accurate vision measurements.

!!! info "Unofficial Docs"
    This is an unofficial community guide. For the official Luma documentation, see
    [docs.luma.vision/p1](https://docs.luma.vision/p1/).

!!! warning "Read Before You Start"
    Make sure you have completed all steps on the [Prerequisites](../getting-started/prerequisites.md)
    page and that your cameras have been [flashed](flashing.md) before continuing.

---

## What Is Calibration?

Calibration is the process of teaching the camera its own lens characteristics — things like
focal length and lens distortion — so that it can make accurate real-world measurements
(distances, angles, pose estimates).

Without calibration, AprilTag pose estimates will be inaccurate.

!!! tip "Preserve Calibration When Updating"
    If you are updating to a newer PhotonVision version on a **previously calibrated** camera,
    use the **Offline Update** feature in PhotonVision rather than re-flashing the OS.
    This preserves your calibration data. *(Offline Update docs coming soon.)*

---

## Supplies

- All flashed Luma P1 cameras
- Ethernet cables (×3)
- Programming laptop with FRC Game Tools installed
- Vision calibration board
- A surface to prop the Luma up on
- A second person to hold the calibration board
- sticky notes (or some other method of keeping track of which cameras are calibrated)

---

## Steps

### Step 1 — Connect the Luma to Your Network

1. Power the Luma coprocessor and connect it to your robot or bench network with Ethernet.
2. Verify your laptop is on the same network as the camera.

!!! note
    For full wiring and networking setup (radio wiring, hostname, static IP, port forwarding,
    stream ports, and SSH), see the **[Luma Networking Guide](networking.md)**.

### Step 2 — Access the PhotonVision UI

1. Open a browser and navigate to the PhotonVision dashboard.
   The default address is typically `http://photonvision.local:5800` or the device's IP address
   with port `5800`. Note that it is 'http://', not 'https://'.
2. You should see the PhotonVision interface with a live camera feed.

!!! note
    See the
    [PhotonVision docs](https://docs.photonvision.org/) for the exact default IP or hostname
    for your device, as well as troubleshooting instructions.

### Step 3 — Open the Calibration Tool

1. In the PhotonVision dashboard, navigate to the **Camera** tab.
2. Select your camera from the list.
3. Click on the **Calibration** section or tab.

### Step 4 — Capture Calibration Images

1. Select the appropriate **calibration board** type (e.g., chessboard, charuco).
2. Enter dimensions listed on bottom of board (you will have to convert to inches).
3. Have your second person **hold the calibration board** flat and steady.
4. Move the camera (or the board) to **many different angles and distances**,
   capturing images that cover the full frame — corners, edges, and center.
5. Capture a minimum of 12 images. **25–30 images** is better for a good calibration. More is better. Your goal is to blot out the feed with the multi colored dots. 

!!! tip "Tips for a Good Calibration"
    - Cover the **entire field of view** — don't just use the center.
    - Use a mix of distances and angles, including extreme ones.
    - Ensure the board is **flat** and the image is sharp (not blurry).
    - Good lighting helps — avoid harsh shadows on the board.

### Step 5 — Run the Calibration

1. Once you have enough images, click **Calibrate** (or equivalent button in PhotonVision).
2. PhotonVision will process the images and report a **reprojection error**.
3. A reprojection error below **1.0 px** is generally considered good for FRC use.
   Below **0.5 px** is excellent.

!!! warning "High Reprojection Error?"
    If your reprojection error is above 2–3 px, discard the calibration, delete blurry or
    poorly-angled images, and try again.

### Step 6 — Save and Label

1. Save the calibration in PhotonVision.
2. **Label the camera** (e.g., with a pen or tape) to indicate it has been calibrated and
   which position it will occupy on the robot (e.g., "Front Left", "Rear Right").

---

## Calibrating Multiple Cameras

Repeat Steps 1–6 for each Luma P1. Each camera must be calibrated **individually** because
each lens has its own unique characteristics.

!!! tip
    Keep a spreadsheet or notes of each camera's label and reprojection error for
    reference during competition.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Camera feed not visible in PhotonVision | Check Ethernet connection; allow more boot time |
| Calibration board not detected | Ensure the board is flat, well-lit, and fully in frame |
| High reprojection error | Delete outlier images; recapture with better coverage and lighting |
| Changes not saving | Make sure you click **Save** after calibrating |

---

## Next Steps

Once all cameras are calibrated and labeled, you are ready to mount them on your robot and
configure your robot code using PhotonLib.

See the [PhotonVision docs](https://docs.photonvision.org/) for WPILib / PhotonLib integration.
