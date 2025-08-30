# HDZero Whoop Lite Video Transmitter

The HDZero Whoop lite VTX is a digital HD 720p 60fps video transmitter capable of delivering up to 200mw on 5.8GHz.

The power input range is 2.8V – 13V (1S-3S).

- **This VTX does not have reserve polarity protection circuit, it will be permanently damaged if voltage input is reservedly connected. This is number one failure cause.**
- When it is powered by a 5V pad of FC/BEC, make sure that 5V has 1.5A current output.
- When it is powered by an 1S battery directly, note that a rapid throttle up may cause voltage drop below to 2.8V instantly, and that will cause video drop.
- There is no need for an external capacitor when it connects with FC/BEC or 1S battery. However, it is strongly suggested to put on capacitor when powered by a 3S battery.

This VTX has protection cases mounted on both sides. These metal cases are grounded, and to provide protection from crash. They can be removed for tiny whoop quad which cares about every added gram.

This VTX includes M3/M2 gummies for soft mounting, and zip ties for antenna retention. Though the VTX can be mounted on a racing and other high-speed quad, it is highly recommended to consider HDZero Race (V1 or V2) for such application.

<img src="https://raw.githubusercontent.com/hd-zero/hdzero-vtx-docs/main/img/HDZero_WhoopLite_intro.png" style="width:100">

| No. | Description               |
| :-: | :------------------------ |
|  1  | MIPI Connector            |
|  2  | Status LEDs               |
|  3  | Power/UART/SA solder pads |
|  4  | u.FL Connector            |
|  5  | Protection Case           |
|  6  | Protection case clipper   |

Solder pad:

| Pad | Function            |
| :-: | :------------------ |
|  G  | Ground              |
|  V  | 2.8V-13V            |
| RX | FC.TX               |
| TX | FC.RX               |
| SA | FC.SA(TX), Optional |

**Notes:**

- Read first: **General Consideration for VTX installation**
- This VTX does not support using keypad to tune channel and RF output power level. Ir is designed to work with flight controller.