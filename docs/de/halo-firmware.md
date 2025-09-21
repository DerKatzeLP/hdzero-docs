# Firmware

## Flash Betaflight firmware

- Download and install the [Betaflight Configurator](https://github.com/betaflight/betaflight-configurator/releases/tag/10.10.0).

- Launch the Betaflight Configurator

- To flash firmware: 

    <img src="/halomedia/image23.jpg" id="image23">

    1) Select the target port

    2) Click "Update Firmware" to enter Firmware Flasher tab

    3) Select target "HAZERO_HALO" and version, The factory version is 4.5.1[27-Jun-2024]

    4) Click "Load Firmware [Online] " to download the firmware

    5) Click "Flash Firmware" to Flash the Flight controller

- DFU flash:

    *If you have lost communication with your board follow these steps to restore communication:*

    1)    Power off HALO FC

    2)    Enable ‘No reboot sequence’, enable ‘Full chip erase’

    3)    Hold FC BOOT button and Power on via USB-C into PC, then release BOOT button

    4)    Install all STM32 drivers and Zadig if required (see  section of Betaflight manual)

    5)    Close Betaflight configurator, Restart Betaflight configurator

    6)    Click "Update Firmware" to enter Firmware Flasher tab

    7)    Select target " HAZERO_HALO " and version, The factory version is 4.5.1[27-Jun-2024]

    8)    Click "Load Firmware [Online] " to download the firmware

    9)    Click "Flash Firmware" to Flash the Flight controller

## Execute CLI

- HDZero HALO online firmware already contains the required CLI, predefined cli are available if needed by following these steps:

Download the file from Flight Configurator tab at https://www.hd-zero.com/document, and unzip HDZEROHALO_RevXYZ.zip into a temporary directory, i.e. c:\123

<img src="/halomedia/image24.png" id="image24">

1)  Switch to Betaflight Configurator CLI tab 

2)  Click “Load from file”, and select file c:\123\ HDZERO_HALO.txt for HDZero HALO

3)  Click “Execute”

<img src="/halomedia/image25.png" id="image25">

- VTX table is not included in the HDZero HALO online firmware, but it can be added in several ways:

1)  When you use HDZero VTX with HDZero HALO,

the VTX will provide this over MSP, and VTX firmware needs to be version 1.7.0 or newer, or

2)  The CLI file HDZERO_HALO.txt provides, or

3)  Use Betaflight Configurator preset, search for

HDZero VTXs to find this preset

<img src="/halomedia/image26.png" id="image26">

<img src="/halomedia/image27.png" id="image27">

## Flash ELRS firmware

The HDZero Halo factory ELRS firmware version is Released 3.5.1, If you need to update the firmware, please refer to the ELRS update tutorials ([Typical Updating Steps](https://www.expresslrs.org/quick-start/receivers/updating/)), and the Device Category and Device target&nbsp;are as follow:

Device Category: HDZero

Device target: HDZero Halo FC 2.4G Gemini RX

<img src="/halomedia/image28.jpg" id="image28"><div class="page"></div>

## Switchable 9v BEC

- Launch the Betaflight Configurator

- Switch to CLI tab

- Enter CLI:
```shell
resource PINIO 1 E03

set pinio_config = 1

set pinio_box = 40

save
```
- Switch to Modes tab

- Add Range for USER1 mode

- Then you can use the remote control to switch 9v BEC

<img src="/halomedia/image29.jpeg" id="image29">

<img src="/halomedia/image30.jpeg" id="image30">