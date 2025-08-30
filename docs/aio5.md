# HDZero AIO5

HDZero AIO5 is the world’s first digital video AIO, enabling bind and fly 65mm whoops to weigh less than 19.5g. AIO5 integrates a F4 flight controller, HDZero 5.8GHz digital video transmitter, SPI 2.4GHz ExpressLRS 3.0 receiver, DSHOT protocol 4-in-1 ESC, and a 5V/1A BEC. It is ideal for tiny whoop racing and freestyle.

The HDZero AIO5 is an excellent collaboration between Happymodel and HDZero. It is available at major FPV resellers worldwide, and also at Happymodel and HDZero official online shops.

<img src="https://raw.githubusercontent.com/hd-zero/hdzero-vtx-docs/main/img/HDZero_Aio5_intro_1.png" style="width:100">

<img src="https://raw.githubusercontent.com/hd-zero/hdzero-vtx-docs/main/img/HDZero_Aio5_intro_2.png" style="width:100">

## Specifications

* MCU: STM32F411 (100MHz, 512K Flash)
* Gyro: BMI270
* On board voltage and amperage meters
* Built-in 5A(each) BLHeli_S 4-in-1 ESC
    * MCU: EFM8BB21
    * HV Current: 5A continuous peak 6A (3 seconds)
    * Factory firmware: O_H_5_48_V0.19.2.HEX
    * Dshot600 ready
* Built-in 5.8G HDZero VTX
    * RF output: 25mW/200mW
    * Supported channels: R1-R8, F2/F4, L1-L8
    * UFL connector (ultra-lite linear antenna included)
* Built-in SPI ExpressLRS 2.4GHz receiver
    * Packet rate option: 25Hz/50Hz//150Hz/250Hz/500Hz
    * pre-soldered enamel wire antenna
    * Telemetry output power: <12dBm
* Built-in 5V 1A BEC
* Flight controller firmware target: CRAZYBEEF4SX1280
* Power supply: 1S battery(2.5V - 4.35V)
* Fully compatible with the popular whoop frames
    * Board sizeL 28.5x28.5mm with a 25.5x25.5 mounting hole size
* Weight: 5.7g(without motor plugs), 6.3g(with motor plugs)

## Installation notes

### ELRS antenna

A line antenna(1/4 wavelength) for the ELRS receiver is pre-soldered and positioned close to the board for low-profile and easy packaging. However, **the ELRS antenna needs to be lifted to a maintain at least 3mm of clearance from the board**.

<img src="https://raw.githubusercontent.com/hd-zero/hdzero-vtx-docs/main/img/HDZero_Aio5_elrs_antenna_1.png" style="width:100">

<img src="https://raw.githubusercontent.com/hd-zero/hdzero-vtx-docs/main/img/HDZero_Aio5_elrs_antenna_2.png" style="width:100">

### VTX antenna

The HDZero VTX integrated into the AIO5 has a specific requirement to prevent video noise caused by the video RF sighal being routed back to the onboard power amplifier.

**The VTX antenna should be mounted outward, not inward, on the board.**

<img src="https://raw.githubusercontent.com/hd-zero/hdzero-vtx-docs/main/img/HDZero_Aio5_vtx_antenna.png" style="width:100">
