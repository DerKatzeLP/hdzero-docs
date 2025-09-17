# Whoop V2 VTX

HDZero Whoop lite VTX 是一款数字高清视频发射器，能够在 5.8GHz 上传输高达 200mW 的功率。它支持所有使用MIPI接口的HDZero摄像头，包括Nano90。

Whoop V2 VTX电源输入范围为3V ～ 12.6V 。

- 这款 VTX 没有反极性保护电路，如果电压输入接反，会导致永久性损坏。这是导致 VTX 故障的首要原因。反极性保护电路会阻止 VTX 在 1S 电压范围内工作。

- 当使用FC/BEC的5V焊盘供电时，确保5V有1.5A的电流输出。

- 当直接使用 1S 电池供电时，请注意快速加大油门可能会导致电压瞬间降至3 V 以下，这将导致视频丢失。

- 使用 FC/BEC 或 1S 电池供电时无需外接电容。使用 3S 电池供电时强烈建议安装电容。

这款 VTX 包含用于软安装的 M2 橡胶垫圈和用于固定天线的黄铜杆。虽然 VTX 可以安装在赛车和其他高速飞机上，但强烈建议考虑使用 HDZero Race V3 VTX 进行此类应用。

焊盘：

<img src="/media/image13.jpeg" id="image11" width="300">

<table id="table3">
<tr>
<td>1</td>
<td>MIPI连接器</td>
</tr>
<tr>
<td>2</td>
<td>电源/UART/SA焊盘</td>
</tr>
<tr>
<td>3</td>
<td>状态 LED</td>
</tr>
<tr>
<td>4</td>
<td>u.FL连接器</td>
</tr>
</table>

<table id="table4">
<tr>
<td>G</td>
<td>Ground</td>
</tr>
<tr>
<td>V</td>
<td>3伏-12.6伏</td>
</tr>
<tr>
<td>RX</td>
<td>FC.TX</td>
</tr>
<tr>
<td>TX</td>
<td>FC.RX</td>
</tr>
</table>


::: tip
Notes:

1. 请先阅读： [基础说明](vtx-general.md)

2. 此 VTX 不支持使用键盘调整频道和射频输出功率级别，必须通过飞控的MSP协议调整。
:::
