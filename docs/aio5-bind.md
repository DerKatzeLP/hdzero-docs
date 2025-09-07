# Bind with TX radio

*There are two ways to bind the receiver, as shown below:*

1. Button Binding

Put the receiver into bind mode using any of these procedures:

- "Bind" button in the Betaflight Configurator, Receiver Page (if can't be found, update the Betaflight firmware).

- Using the CLI, type in&nbsp;bind rx&nbsp;and press enter once.

- Using the CLI, type in&nbsp;set expresslrs uid = 0, press enter once, then save and reboot

Once the SPI receiver is in binding mode (the ELRS LED will start to blink faster), insert the ELRS TX module into your OpenTX Radio transmitter, select External RF mode and set it to the CRSF protocol. You will find the ELRS menu in the Radio system (ensure the ELRS.LUA file is copied to the SD-Card tools first). Enter the ELRS menu and press [Bind]. The RX LED on the flight controller will become solid if the binding is successful.

2. Binding Phrase

As of Betaflight 4.4 (with Betaflight Configurator version 10.9.0 or newer), your ExpressLRS Binding Phrase can be set directly on the receiver tab in Betaflight Configurator.

<img src="/aio5media/image11.png" id="image1">

Proper configuration of the Betaflight Receiver tab for ExpressLRS SPI Receivers. Receiver Mode 
(1) should be set to SPI RX. SPI Bus Receiver Provider 
(2) should be set to EXPRESSLRS. Enter your binding phrase in the box
(3) and it will be converted to UID bytes 
(4) and saved to your Betaflight config. You can also take this opportunity to enable Telemetry 
(5) if desired, and make sure RSSI_ADC 
(6) and RSSI Channel 
(7) are disabled as shown.

::: warning
SPI&nbsp;ELRS receivers&nbsp;DO NOT&nbsp;support D(D250, D500), F(F500, F1000) and Full Res(100Hz Full Res, 333Hz Full Res) Modes (Packet Rates) and thus will not bind or sync with a TX module in any of these modes.

**These are the packet rates that will work: 50Hz, 150Hz, 250Hz, 500Hz.**
:::

## ELRS LED status

* Solid means bind successful or Connection established;
* Faster Blink (500ms) means in bind mode;
* Slowly Blink (1s) means no signal established with the TX module
