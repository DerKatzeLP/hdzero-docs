# Firmware

## Betaflight firmware

- Download and install the [Betaflight Configurator](https://github.com/betaflight/betaflight-configurator/releases/tag/10.10.0).

- Launch the Betaflight Configurator to flash firmware. 
<img src="/aio15media/image6.png" id="image6">

1. Select the target port

2. Click "Update Firmware" to enter Firmware Flasher tab

3. Select target "HDZero_AIO15" and version, The factory version is 4.4.2[01-Jun-2023]

4. Click "Load Firmware[Online] " to download the firmware

5. Click "Flash Firmware" to Flash the Flight controller

## BlueJay ESC firmware

<img src="/aio15media/image7.png" id="image7">

The factory firmware: Z_H_30_48_v0.19.2.HEX. To flash a new ESC firmware, here is [a Youtube tutorial](https://www.youtube.com/watch?v=yEDhnBUFQNI).

After flashing firmware, it is needed to set the Startup Power of each ESC to 1.00 through [BLHeliSuite 16.7.14.9.0.3]https://github.com/4712/BLHeliSuite/releases/tag/16714903

Please note that heat dissipation and full charged battery are needed for flashing ESC firmware.

## HDZero firmware

- Purchase [HDZero VTX Programmer](https://www.hd-zero.com/product-page/hdzero-vtx-programmer) if you don’t have one;

- Download HDZero Programmer application from https://www.hd-zero.com/document

<img src="/aio15media/image8.png" id="image8">

- Plug the HDZero VTX Programmer into AIO15's VTX FW Connector. And use the USBC cable to connect the programmer tool and PC

- Launch the HDZeroProgrammer.exe on a Windows PC

    1. Select the AIO15

    2. Click "Load Online Firmware" and select the version number

    3. Click "Flash VTX". "Connecting VTX ..." will be displayed at the bottom

<img src="/aio15media/image9.jpeg" id="image9">
<img src="/aio15media/image10.png" id="image10">

The application will automatically download the firmware and flash it.