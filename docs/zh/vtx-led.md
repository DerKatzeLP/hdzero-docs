# VTX LED模式

所有HDZero VTX都有两个 LED ：红色和蓝色。

## 红色LED灯语

红色 LED 指示灯为电源指示灯。如果指示灯熄灭或闪烁，则表示 VTX 出现故障。正常状态的设备应显示稳定的红灯。如果没有红灯，请检查 VTX 的电源线是否连接，并用万用表检查电压是否达到预期值。
## 蓝色LED灯语

蓝色LED灯指示工作状态：

VTX上电，快闪三次：VTX与 FC 的三个通信处于活动状态。如果没有快闪三次则表示VTX和FC通信没有成功，将会没有OSD，也不会工作。

VTX工作时，具体模式以 4 秒时间范围内的长（1 秒）和短（1/4 秒）脉冲模式表示。

<img src="/media/image12.png" id="image10">

<table id="table2">
<tr>
<td>蓝色LED灯语</td>
<td>这是什么意思？</td>
<td>该怎么办？</td>
</tr>
<tr>
<td>2次短闪</td>
<td>未检测到相机</td>
<td>VTX 和摄像头上的MIPI 电缆<br>检查MIPI线是否损坏<br>检查 MIPI 连接器是否损坏<br>更换相机</td>
</tr>
<tr>
<td>3次短闪</td>
<td>过热​​</td>
<td>调试飞机时，务必使用风扇冷却VTX</td>
</tr>
<tr>
<td>4次短闪</td>
<td>VTX射频故障</td>
<td>更换VTX</td>
</tr>
<tr>
<td>1长1短闪</td>
<td>在0 mW模式下</td>
<td>使用 Stick command (\ /) 退出 0mW</td>
</tr>
<tr>
<td>1长2短闪</td>
<td>0.1mW模式</td>
<td>关闭PIT模式</td>
</tr>
</table>

::: tip
注意：前三种 LED 模式指示错误情况，优先级高于其他所有模式。如果发生错误（例如 VTX 进入热保护模式），该模式将覆盖其他设置。例如，如果已启用热保护，将开发板设置为 0mW 不会在 LED 上产生明显变化。
:::