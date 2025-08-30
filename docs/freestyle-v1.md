# HDZero Freestyle V1 Video Transmitter(EOL)

The HDZero Freestyle V1 VTX offers unprecedented range and performance for the HDZero 5.8GHz digital FPV system. With its high maximum output power and robust construction, this VTX is perfect for freestyle and long-range builds.

<img src="https://raw.githubusercontent.com/hd-zero/hdzero-vtx-docs/main/img/HDZero_FreestyleV1_intro_1.png" style="width:100">

With a tested maximum range of more than 18 miles, the Freestyle V1 VTX will transmit a digital FPV feed as far as you're willing to fly. Not interested in long range? You'll also see better performance in urban environments and around obstacles, with none of the color noise or multipath interference issues of analog video.

<img src="https://raw.githubusercontent.com/hd-zero/hdzero-vtx-docs/main/img/HDZero_FreestyleV1_intro_2.png" style="width:100">

| No. | Description            |
| :-: | ---------------------- |
|  1  | Secured MIPI Connector |
|  2  | Keypad Connector       |
|  3  | M3 Mouting Hole        |
|  4  | Secured u.FL Connector |
|  5  | FW Update Connector    |
|  6  | Power/UART Connector   |
| 7* | BEC Power In (2S-6S)   |
|  8  | BEC Power Out Pad      |
|  9  | RHCP Antenna           |
| 10 | Power/UART Harness     |

***: BEC is included for first Batch only.**

| Power/UART Connector | Cable Color | Connected with       |
| -------------------- | ----------- | -------------------- |
| Ground               | Black       | Ground               |
| Power                | Red         | Power*               |
| RX                   | Green       | FC TX                |
| TX                   | Yellow      | FC RX                |
| SA                   | Blue        | FX SA (TX), Optional |

***: The 1st batch supports 4S MAX.**

The 1st batch of Freestyle V1 VTX, supports 2S-4S, A BEC supporting 2S-6S is included.

The 2nd batch and later, supports 2S-6S, and the BEC is *not* included.

<img src="https://raw.githubusercontent.com/hd-zero/hdzero-vtx-docs/main/img/HDZero_FreestyleV1_intro_3.png" style="width:100">

**Important Notes:**

- **Do not directly power this VTX with a 5S/6S battery for the 1st batch.**
    - **Use 2S-4S VBAT, or included BEC, or FC with built-in BEC**
    - **The Freestyle VTX consumes up to 15W. If it is connected with FC that has a built-in BEC output, make sure the BEC can provide enough current. For example, if the BEC provides 10V, it needs a minimum of 1.5A current output.**
- **Removing the heat sink is not recommended because it is part of the design.**
- **Rotate the antenna as shown above before detaching it to reduce the risk of peeling off the UFL connector.**