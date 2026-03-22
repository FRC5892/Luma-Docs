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

1. Power the Luma coprocessor and connect it to your network with Ethernet.
2. For bench testing (off robot), connect the coprocessor to a **physical router/radio**,
   then connect your laptop to that same network.

!!! warning "Off-Robot Networking Requirement"
    When using PhotonVision off robot, you must plug the coprocessor into a physical
    router/radio and connect your laptop to that same network. Other networking setups are
    unreliable and generally unsupported.

!!! danger "2025+ Radio Safety (VH-109 and similar)"
    If you are using the newer radio generation (2025-present), ensure DIP switches **1 and 2
    are OFF** before connecting your coprocessor. Incorrect PoE settings can electrically damage
    the coprocessor.

3. If you are wiring through a switch, use this path:
   **radio -> switch -> coprocessor(s) + laptop**.
4. If you are on an older radio (pre-2025), direct radio/switch Ethernet networking still works,
   but verify your topology before calibration.

Wiring diagram reference:

![Example wiring using a network switch and newer radio](../assets/networking-diagram-vividhosting.webp){ width="900" }

### Step 1.5 — Set a Unique Hostname (Recommended)

1. Open PhotonVision and go to **Settings -> Networking**.
2. Change hostname from the default `photonvision` to a unique value such as
   `Photon-OrangePi-Left`.
3. Use only letters (`A-Z`), numbers (`0-9`), and hyphens (`-`).

Unique hostnames help avoid conflicts when calibrating or managing multiple coprocessors.

### Step 2 — Access the PhotonVision UI

1. Open a browser and navigate to the PhotonVision dashboard.
   The default address is typically `http://photonvision.local:5800` or the device's IP address
   with port `5800`. Note that it is 'http://', not 'https://'.
2. You should see the PhotonVision interface with a live camera feed.

!!! note
    See the
    [PhotonVision docs](https://docs.photonvision.org/) for the exact default IP or hostname
    for your device, as well as troubleshooting instructions.

### Step 2.5 — Robot Network Settings (Static IP Recommended)

PhotonVision strongly recommends static IPs on the robot network for reliability.

!!! warning
    Use static IP mode only on your robot network. Do not force static settings on random home
    networks unless you are comfortable managing local network configuration.

1. Power the robot and connect your laptop to the robot network.
2. Open PhotonVision at `photonvision.local:5800` (or your current device address).
3. Go to **Settings -> Networking**.
4. Enter your team number.
5. Set IP mode to **Static**.
6. Set the coprocessor IP to `10.TE.AM.xx` where `xx` is unique on your robot (commonly `.6`
   through `.19`).
7. Click **Save**.
8. Power-cycle robot and coprocessor.
9. Reconnect using `10.TE.AM.xx:5800`.

!!! note "Team Number Field Tip"
    The team number field can also accept a hostname or IP (for example `localhost`) when you
    are testing with a simulated robot program.

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

## Network Extras (Useful During Integration)

### Port Forwarding (Only if Needed)

!!! note
        If you are using a VH-109 radio (2025+), prefer tethering to the dedicated DS Ethernet port
        instead of using port forwarding.

If you need to view an Ethernet-connected vision device while tethered over roboRIO USB,
WPILib `PortForwarder` can forward the PhotonVision web UI port.

```java
PortForwarder.add(5800, "photonvision.local", 5800);
```

!!! note
        Replace `photonvision.local` with your actual coprocessor hostname if you changed it.

### Camera Stream Ports

- Camera streams start at ports `1181` and `1182` for camera 1.
- Each additional camera uses the next two ports (`1183/1184`, `1185/1186`, etc.).
- A quick way to identify a stream port is to double-click the stream in PhotonVision and check
    the opened page URL.

!!! warning
        If stream forwarding remaps to a different port than the original stream port, the stream may
        not render correctly in the UI.

### SSH Access (Advanced)

- SSH is available for advanced troubleshooting/configuration.
- Default credentials for image `v2026.0.3+` are `photon` / `vision`.
- Legacy credentials `pi` / `raspberry` may still work, but are expected to be removed in a
    future release.

---

## Next Steps

Once all cameras are calibrated and labeled, you are ready to mount them on your robot and
configure your robot code using PhotonLib.

See the [PhotonVision docs](https://docs.photonvision.org/) for WPILib / PhotonLib integration.
