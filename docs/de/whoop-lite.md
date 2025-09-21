# Whoop Lite VTX

The HDZero Whoop lite VTX is a digital HD video transmitter capable of delivering up to 200mW on 5.8GHz. It supports all the HDZero cameras with MIPI connector, including Nano90.

The power input range is 2.8V – 13V.

- **This VTX does not have reverse polarity protection circuit, it will be permanently damaged if voltage input is reversely connected. This is number one failure cause.**

- When powered by a 5V pad of FC/BEC, make sure that 5V has 1.5A current output.

- When powered by an 1S battery directly, note that a rapid throttle up may cause voltage drop below to 2.8V instantly, and that will cause video drop.

- There is no need for an external capacitor when connected with FC/BEC or 1S battery. However, it is strongly suggested to install a capacitor when powered by a 3S battery.

This VTX has protection cases mounted on both sides. These metal cases are grounded, and to provide protection from crash. They can be removed for any light weight build for which every gram matters.<{tag_name}>

This VTX includes M2 gummies for soft mounting, and zip ties for antenna retention. Though the VTX can be mounted on a racing and other high-speed aircraft, it is highly recommended to consider HDZero Race V3 for such applications.

<img src="/media/image38.png" >

<table id="table12">
<tr>
<td>1</td>
<td>MIPI Connector</td>
</tr>
<tr>
<td>2</td>
<td>Status LEDs</td>
</tr>
<tr>
<td>3</td>
<td>Power/UART/SA solder pads</td>
</tr>
<tr>
<td>4</td>
<td>u.FL Connector</td>
</tr>
<tr>
<td>5</td>
<td>Protection Case</td>
</tr>
<tr>
<td>6</td>
<td>Protection case clipper</td>
</tr>
</table>

Solder pads:

<table id="table13">
<tr>
<td>G</td>
<td>Ground</td>
</tr>
<tr>
<td>V</td>
<td>2.8V -13V</td>
</tr>
<tr>
<td>RX</td>
<td>FC.TX</td>
</tr>
<tr>
<td>TX</td>
<td>FC.RX</td>
</tr>
<tr>
<td>SA</td>
<td>FC.SA (TX), Optional</td>
</tr>
</table>

::: tip
Notes:

1. Read first: [General Consideration for VTX Installation](vtx-general.md)

2. This VTX does not support using a keypad to tune channel and RF output power level. It is designed to work with a flight controller.
:::
