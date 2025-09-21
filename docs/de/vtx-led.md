# VTX LED Pattern

All HDZero VTXes have two LEDs: Red and Blue.

## Red LED

The red LED serves as the power indicator. If it's off or flashing, this signals a VTX failure. A healthy unit should display a steady red light. If there is no red light, check if power wires to VTX are connected, and check if voltage is expected value with a multi-meter.

## Blue LED Pattern

Working status indicator light.

Upon boot, three rapid LED flickers confirm MSP communication with FC is active.

Specific modes are represented with patterns of long (1 seconds) and short (1/4 seconds) pulses, within a 4 seconds timeframe.

<img src="/media/image12.png" id="image10">

<table id="table2">
<tr>
<td>BLUE LED pattern</td>
<td>What does it mean?</td>
<td>What to do?</td>
</tr>
<tr>
<td>2 short flashes</td>
<td>Camera not detected</td>
<td>Reseat MIPI cable on VTX and Camera<br>Check if MIPI cable is damaged<br>Check MIPI connector for damage<br>Replace Camera</td>
</tr>
<tr>
<td>3 short flashes</td>
<td>Over-heating</td>
<td>Use a fan to cool VTX</td>
</tr>
<tr>
<td>4 short flashes</td>
<td>RF failure</td>
<td>Replace VTX</td>
</tr>
<tr>
<td>1 long 1 short flash</td>
<td>In 0 mW mode</td>
<td>Use Stick command (\ /) exit 0mW</td>
</tr>
<tr>
<td>1 long 2 short flashes</td>
<td>In 0.1mW mode</td>
<td>Turn off PIT mode</td>
</tr>
</table>

::: tip
Note: The first three LED patterns indicate error conditions and take priority over all others. If an error is active—such as the VTX entering heat protection mode—it will override other settings. For example, setting the board to 0mW won't visibly change the LED if heat protection is engaged.
:::