# Race V1 VTX

The HDZero Race VTX is a digital HD 720p 60fps video transmitter capable of delivering up to 200mW on 5.8GHz.

The power input range is 7V – 17V.

<img src="/media/image39.png" id="image34">

<table id="table14">
<tr>
<td>1</td>
<td>Power/UART Connector</td>
</tr>
<tr>
<td>2</td>
<td>FW Update Connector</td>
</tr>
<tr>
<td>3</td>
<td>MIPI Connector</td>
</tr>
<tr>
<td>4</td>
<td>u.FL Antenna Connector</td>
</tr>
<tr>
<td>5</td>
<td>u.FL Antenna Retention Holes</td>
</tr>
<tr>
<td>6</td>
<td>Power on LED (red)</td>
</tr>
<tr>
<td>7</td>
<td>Status LED (blue)</td>
</tr>
<tr>
<td>8</td>
<td>Mounting Holes (20x20 M4)</td>
</tr>
<tr>
<td>9</td>
<td>Zip Ties (4x)</td>
</tr>
<tr>
<td>10</td>
<td>u.FL Antenna Retention Screws(4x)/Nut(4x)/Plate</td>
</tr>
<tr>
<td>11</td>
<td>Rubber Grommet (M4 to M3 4x)</td>
</tr>
<tr>
<td>12</td>
<td>Power/UART harness (20cm) and a PH2.0 connector (6P)</td>
</tr>
</table>

<img src="/media/image40.png" id="image35">

<table id="table15">
<tr>
<td>Power/UART Connector</td>
<td>Cable Color</td>
<td>Connected with</td>
</tr>
<tr>
<td>Ground</td>
<td>Black</td>
<td>Ground</td>
</tr>
<tr>
<td>Power</td>
<td>7-17V</td>
<td>Power</td>
</tr>
<tr>
<td>T1</td>
<td>Green</td>
<td>FC.RX</td>
</tr>
<tr>
<td>R1</td>
<td>Yellow</td>
<td>FC.TX</td>
</tr>
<tr>
<td>T2</td>
<td>White</td>
<td>DO NOT CONNECT</td>
</tr>
<tr>
<td>R2/SA</td>
<td>Gray</td>
<td>FC.SA (TX)</td>
</tr>
</table>

## Connection between Race V1 VTX and FC

There are 3 methods to connect the VTX and flight controller:

- Plug the included harness, cut the cables to

- appropriate length, and solder them on FC

- Use solder pads on the back of the connector

- For FCs having BEC and UART connector, install harness to the included PH2.0 connector (Shown above), and connect the harness with FC without any soldering.

::: warning
Check that pinout matches the FC pinout before installing to be safe if plugging directly.
:::

## Mounting a u.FL antenna or pigtail

<img src="/media/image41.png" id="image36">

There are 2 methods to mount antenna on VTX:

- Use included retention screws, nuts and plate;

- Use included zip-ties.
