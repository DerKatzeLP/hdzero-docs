# FAQ

## Discussion

HDZero Facebook Group: https://www.facebook.com/groups/HDZero

HDZero Discord Server: https://discord.gg/JPesSHpmCU

##  Troubleshooting

**Q1. What causes the red LED on my VTX to blink, or not show up at all?**

A1: The RED LED should be on and not blinking. Please check the following:

- Check power connection to your VTX;
- Make sure input voltage is within range, see Power Input;
- Ensure the power source can provide sufficient current. A 200mW VTX draws around 5 watts, while a Freestyle VTX can require up to 15 watts. Keep in mind, some flight controllers (FCs) may not be capable of supplying adequate amperage.
- The VTX's power circuit may be damaged, which can result in no red LED or a blinking red LED indicator.

---

**Q2. What causes the blue LED on my VTX to blink, or not show up at all?**

A2:  The blue LED reflects the current status of the VTX as follows:

- Absence of the blue LED suggests a critical failure—your VTX may be completely non-operational.
- Upon boot, three rapid blue LED flickers confirm MSP communication is active, if it is connected with a flight controller
- The blue LED should remain steadily lit under normal operating conditions.
- Check LED pattern table if the blue LED blinks

---

**Q3. Why am I experiencing snow noise at minimal range?**

A3: Under normal conditions, video quality should remain clear at short distances. Please verify the following:

- Check if the VTX is set to P1MW mode—this is indicated by one long flash followed by two short blue LED flashes.
- The VTX is configured for high RF power output, and placing the goggles or receiver too close causes signal saturation.
- Position the radio receiver (RX) and its antenna away from the video transmitter (VTX) on the drone to minimize signal interference.
- Lower the transmit (TX) RF power and increase the separation between the TX and your HDZero goggles or receiver.
- Do not place VTX next to ESC board.
- VTX (antenna side) must have 5mm vertical clearance.
- Replace VTX antenna or pigtail to ensure proper signal transmission.
- Verify if another VTX (analog, DJI, HDZero) is operating on the same channel.
- Identify potential Wi-Fi interference; overlapping frequencies typically produce diagonal noise patterns.
-  Faulty RF circuit on the VTX

---

**Q4: My video feed is working but why is no OSD displayed?**

A4: Here is how HDZero OSD works: HDZero VTX communicates using the MSP protocol to retrieve telemetry data from the flight controller, then transmits this data wirelessly to the goggles or receiver, where it's overlaid onto the video stream.

Ensure proper VTX–FC connection by checking the following:

- VTX/Goggle/Receiver Firmware mismatch: Update both VTX/Goggle/Receiver to the latest firmware
- Wire connection: UART TX/RX of FC board should be connected with RX and TX pads of VTX respectively.
- Betaflight setting:  See OSD instruction
- The UART port on the FC could be damaged. Try another UART port on FC (avoid using soft-serial and SA ports),
- Try another FC

---

**Q5: Why does my video signal become noisy when I arm the quad and apply throttle?**

A5: This might be caused by noisy/insufficient power to VTX. Verify the following:

- If VTX is powered by a BEC of FC, make sure the BEC is capable of supplying adequate amperage.
- Install a large capacitor (≥350µF, 50V) across the battery leads.
- It may be due to the radio transmitter affecting the video receiver. Lower TX power and place well away from the goggles or video receiver.

---

**Q6: Why can’t I receive video with my goggle?**

A6: It’s a complex issue that could involve multiple components—namely the camera, MIPI cable, VTX, or goggles. Verify the following

- Blue LED is not solid on:
- If the blue LED is completely off, it means VTX is bad;
- If the blue LED flashes one long and one short periodically, the VTX is in 0mW mode. Use stick command to exit 0mW mode
- If the blue LED flashes 2 shorts periodically, it indicates that the VTX is unable to detect the camera, it could be (1) damaged camera; (2) bad MIPI cable; (3) loose MIPI cable connection; (4) damaged MIPI connectors on camera and/or VTX; (5) damaged VTX
- Check other blue LED patterns
- Blue LED is solid on:
- Verify whether the VTX is set to Low Band while the goggles are configured differently, or vice versa.
- If the Nano90 camera is configured to 540p60 mode, the goggles must be set to HDZero BW = Narrow via the following path: Goggle Menu → Source → HDZero BW.

---

**Q7. Why does the VTX fail to flash properly?**

<img src="/media/image28.png" id="image25">

A7: Make sure all pins on the VTX and the firmware (FW) port of your goggles are perfectly straight—any bent or misaligned pins can disrupt the flashing process. Even a single crooked pin on the VRX module has been known to trigger flashing failures.

---

**Q8: Why is my FC dropping to bootloader when connected to a HDZero VTX?**

A8. It has been reported that some flight controllers may randomly enter bootloader mode when connected to early-production HDZero VTX modules. To resolve this issue, add a 200-ohm resistor in-line between the FC UART.TX and VTX UART.RX wires.

All HDZero VTX units produced after 2023 already include this resistor by default, eliminating the need for manual fixes on newer hardware.