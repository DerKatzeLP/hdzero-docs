# HDZero Video Transmitters

## Summary

|                          VTX | Weight | Size (mm) |  Mounting Pattern  | Voltage Input | Power Consumption |                RF Power Output                | Secured U.FL | Antenna | Tramp/SmartAudio | Keypad | Application |
| ---------------------------: | -----: | :-------: | :----------------: | :------------: | :---------------: | :-------------------------------------------: | :----------: | :-----: | :--------------: | :----: | :---------: |
|                         AIO5 |   5.7g | 28.5x28.5 | 25.5x25.5 M2(Soft) |   2.5V-4.35V   |         -         |                  25mW,200mW                  |      No      | Dipole |        No        |   No   |  TinyWhoop  |
|                **Eco** |   4.5g |   32x32   | 25.5x25.5 M2(Soft) |     4V-12V     |       5~6W       |                  25mW,200mW                  |     Yes     | Dipole |        No        |  Yes  |  TinyWhoop  |
|       **Freestyle V2** |  22.3g |   29x30   |      20x20 M2      |     7-25V     |       6~15W       | 25mW,200mW<br />(500mW,1W ***(a)*** ) |     Yes     |  RHCP  |    SmartAudio    |  Yes  |  Freestyle  |
| **Freestyle V1 (EOL)** |  28.0g |   40x40   |   30x30 M3(Soft)   | 2S-6S***(b)*** |       6~15W       | 25mW,200mW<br />(500mW,1W ***(a)*** ) |     Yes     |  RHCP  |    SmartAudio    |  Yes  |  Freestyle  |
|            **Race V3** |   5.5g |   28x32   |   20x20 M4(Soft)   |     4V-12V     |       5~6W       |                  25mW,200mW                  |     Yes     |   No   |      Tramp      |   No   |    Race    |
|       **Race V2(EOL)** |   6.0g |   34x34   |   20x20 M4(Soft)   |     7V-17V     |       5~6W       |                  25mW,200mW                  |     Yes     |   No   |    SmartAudio    |  Yes  |    Race    |
|       **Race V1(EOL)** |   7.0g |   27x45   |   20x20 M4(Soft)   |     7V-17V     |       5~6W       |                  25mW,200mW                  |     Yes     |   No   |    SmartAudio    |  Yes  |    Race    |
|         **Whoop Lite** |   4.5g |   32x32   | 25.5x25.5 M2(Soft) |     1S-3S     |       5~6W       |                  25mW,200mW                  |     Yes     |   No   |    SmartAudio    |   No   |  TinyWhoop  |
|         **Whoop(EOL)** |   5.3g |   32x32   |    25.5x25.5 M2    |     7V-17V     |       5~6W       |                  25mW,200mW                  |      No      |   No   |        No        |  Yes  |    Whoop    |

**(a)** Only in permitted regions with HAM Licence
**(b)** 2nd batch or later

## **General Consideration for VTX installation**

### **Caution: UFL Connectors Are Fragile**

All HDZero VTXes use an U.FL connector for its smaller footprint and lighter weight. However, it is not a mechanically strong connector. Treat it as if it’s made of glass. Here are notes for installing and uninstalling an antenna:

- Never run a cable from the UFL connector straight off the side of a board. Instead, run the antenna cable towards the middle of the board, and secure it in one of the following ways:
    - Hot glue or E6000 glue
        - Avoid using glue on top of the hot components on the board.
        - Preferably, apply glue to the side of the board where the cable leaves the top of the board.
    - Kapton tape to secure it to the surface of the VTX
    - Zip tie it to a nearby standoff
- Unless you need maximum RF performance or minimum weight, consider a UFL->SMA pigtail for larger builds. This allows you to thoroughly secure the SMA connector to your quad to prevent movement of the antenna cable.
- When removing the antenna, go very slowly and pull gently on the antenna so that one side of the UFL slides off first. There are tools designed to remove/insert UFL connectors from their sockets, which can help avoid damage to the UFL connector or socket.

Please visit the following link for more information:

[https://www.facebook.com/groups/hdzero/permalink/448657693828864/](https://www.facebook.com/groups/hdzero/permalink/448657693828864/)

### Powering the VTX: BEC or VBAT

Using a battery eliminator circuit (BEC) is highly recommended to avoid voltage spikes, which can damage the VTX. Although you can power the VTX directly from the battery (VBAT), a BEC will provide more consistent power and will help absorb any voltage spikes, protecting your VTX from over-voltage conditions.

It is important to select a BEC that provides voltage that is within the range of what the VTX accepts, and that is capable of supplying enough current to power the VTX. Whether you are using a BEC that is built into your flight controller or a standalone BEC, be sure to check its voltage and current ratings and compare them to the required voltage and current for your VTX.

All the FCs that include an integrated BEC for DJI VTXes should also work for HDZero VTXes.

To summarize:

- **All HDZero VTXes, except Freestyle Batch 2 VTX or later, do not support 6S VBAT.**
- Check your FC specs to see if you can run your VTX from the FC’s BEC;
- If not, you could run the VTX from a suitable standalone BEC;
- If not, solder a capacitor between the +V and Ground on the VTX. Running on VBAT is always the last choice due to the challenging voltage environment in a quad.

### Mounting Considerations

It is very important to keep some distance between the VTX and ESC/FC boards for the following reasons:

- The RF portion of VTX is vulnerable to electronic noise caused by ESC/motors;
- The RF signal can be bounced back from surfaces of boards or carbon fiber plate, and fed back to the power amplifier in the VTX. This will deteriorate the RF signal integrity and could damage the amplifier.

To avoid these concerns, follow this guidance for mounting the VTX:

- If the VTX is mounted on the top of the stack, please keep 5mm distance from the top carbon fiber plate.
- Avoid mounting the VTX in the middle of the stack.
- If the VTX is mounted on the bottom of the stack, the VTX needs to be upside down (U.FL socket faces down) and needs to have a minimum of 5mm distance from the  bottom carbon fiber plate.

## VTX Sockets

|                          VTX | f/w Update Socket | Keypad Socket | Power/UART Socket | HD VTX Plug | Camera Connector |
| ---------------------------: | :---------------: | :-----------: | :---------------: | :---------: | :--------------: |
|                         Aio5 |         B         |              |                  |            |                  |
|                **Eco** |         B         |       C       |                  |            |                  |
|       **Freestyle V2** |         B         |       C       |         E         |            |        G        |
| **Freestyle V1 (EOL)** |         A         |       C       |         E         |            |        G        |
|            **Race V3** |         B         |              |                  |      F      |        G        |
|       **Race V2(EOL)** |         A         |       C       |                  |            |        G        |
|       **Race V1(EOL)** |         A         |       C       |         D         |            |        G        |
|         **Whoop Lite** |         B         |              |                  |            |        G        |
|         **Whoop(EOL)** |         A         |       C       |                  |            |        G        |
|         **Foxeer VTX** |         A         |       C       |                  |            |        G        |

| f/w Update Socket            |
| :--------------------------- |
| **A:** 7-way SH 1.0mm  |
| **B:** 7-way SUR 0.8mm |

| Keypad Socket                |
| :--------------------------- |
| **C:** 6-way SUR 0.8mm |

| Power/UART Socket            |
| :--------------------------- |
| **D:** 6-way GH 1.25mm |
| **E:** 5-way GH 1.25mm |

| HD VTX Plug                  |
| :--------------------------- |
| **F:** 6-way GH 1.25mm |

| Camera Connector                        |
| :-------------------------------------- |
| **G:**  20 Pin 0.4mm Pitch (MIPI) |

| Miscellaneous                      |
| :--------------------------------- |
| Keypad PCB Socket: 6-way GH 1.25mm |