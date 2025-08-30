# HDZero Race V1 Video Transmitter (EOL)

The HDZero Race VTX is a digital HD 720p 60fps video transmitter capable of delivering up to 200mw on 5.8GHz.

The power input range is 7V – 17V (2S – 4S).

<img src="https://raw.githubusercontent.com/hd-zero/hdzero-vtx-docs/main/img/HDZero_RaceV1_intro_1.png" style="width:100">

| No. | Description                                            |
| :-: | :----------------------------------------------------- |
|  1  | Power/UART Connector                                   |
|  2  | FW Update Connector                                    |
|  3  | MIPI Connector                                         |
|  4  | u.FL Antenna Connector                                 |
|  5  | u.FL Antenna Retention Holes                           |
|  6  | Power on LED(red)                                      |
|  7  | Status LED(blue)                                       |
|  8  | Mounting Holes (20x20 M4)                              |
|  9  | Zip Ties (4x)                                          |
| 10 | u.FL Antenna Retention<br />Scews(4x)/Nut(4x)/Plate    |
| 11 | Rubber Grommet(M4 to M3 4x)                            |
| 12 | Power/UART harness (20cm) and a PH2.0 connector (6P) |

<img src="https://raw.githubusercontent.com/hd-zero/hdzero-vtx-docs/main/img/HDZero_RaceV1_intro_2.png" style="width:100">

| Power/UART Connector | Cable Color | Connected with |
| :------------------- | ----------- | -------------- |
| Ground               | Black       | Ground         |
| Power                | Red         | Power          |
| T1                   | Green       | FC.RX          |
| R1                   | Yellow      | FC.TX          |
| T2                   | White       | DO NOT CONNECT |
| R2/SA, Optional     | Gray        | FC.SA(TX)      |

## Connection between Race V1 VTX and FC

There are 3 methods to connect the VTX and flight controller:

- Plug the included harness, cut the cables to appropriate length, and solder them on FC
- Use solder pads on the back of the connector
- For FCs having BEC and UART connector, install harness to the included PH2.0 connector (Shown above), and connect the harness with FC without any soldering.

**Warning: Check that pinout matches the FC pinout before installing to be safe if plugging directly.**

## Mounting an u.FL antenna or pigtail

<img src="https://raw.githubusercontent.com/hd-zero/hdzero-vtx-docs/main/img/HDZero_RaceV1_intro_3.png" style="width:100">

There are 2 methods to mount antenna on VTX:

- Use included retention screws, nuts and plate.
- Use included zip-ties.