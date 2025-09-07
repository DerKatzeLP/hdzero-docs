# 简介

**HDZero Halo** 是一款紧凑型飞控，搭载 H743 MCU，提供高性能计算能力。它集成了 Gemini ELRS 接收器，并具有可切换的 9V/3A BEC 输出，适用于视频发射器，同时还提供 5V/4A 输出，支持 LED 条和其他外设。集成的 ELRS RX 简化了四轴组装，并确保与 Gemini 的高性能链接质量。

Halo 飞控使连接并排的单色 LED 条变得简单，并简化了可寻址 LED 条的布线。为了适配数字视频系统，它去除了模拟 OSD 芯片，节省空间并降低成本。它特别针对与 **HDZero Race v3 VTX** 配合使用进行了优化，确保低配置堆叠。

Halo 飞控配备了专用插槽，用于连接最大支持 4A 的 ESC 电缆，以及连接任何数字 VTX。这种设计使其成为无焊接飞控，确保轻松组装，并能够快速在现场更换。

Halo 飞控有两个版本：MPU6000 和 ICM42688，以满足不同飞行员的偏好。

<div style="display: flex; justify-content: space-around; text-align: center; gap: 20px;">
<img src="/halomedia/image3.png" style="width:30%; height: 100%"><img src="/halomedia/image4.png" style="width:30%; height: 100%"> <img src="/halomedia/image5.jpg" style="width:30%; height: 100%">
</div>
<div class="page"></div>

## 技术规格

<table id="table2">
<tr>
<td>型号</td>
<td>HDZero Halo 飞控</td>
</tr>
<tr>
<td colspan="2">飞控</td>
</tr>
<tr>
<td>MCU</td>
<td>STM32H743 (480MHz)</td>
</tr>
<tr>
<td>陀螺仪</td>
<td>MPU6000 或 ICM42688</td>
</tr>
<tr>
<td>BEC 输出</td>
<td>DC 5V/4A <br>DC 9V/3A<br>DC 4.5V/0.5A</td>
</tr>
<tr>
<td>黑盒</td>
<td>16MB 闪存</td>
</tr>
<tr>
<td>I2C 接口</td>
<td>是</td>
</tr>
<tr>
<td>UART 接口</td>
<td>TX2/RX2, TX7/RX7, TX8/RX8</td>
</tr>
<tr>
<td>ESC 遥测</td>
<td>RX4</td>
</tr>
<tr>
<td>VTX MSP UART</td>
<td>TX5/RX5</td>
</tr>
<tr>
<td>DJI HDL</td>
<td>RX3</td>
</tr>
<tr>
<td>蜂鸣器接口</td>
<td>是</td>
</tr>
<tr>
<td>LED 条</td>
<td>并行或串联</td>
</tr>
<tr>
<td>USB 接口</td>
<td>Type-C</td>
</tr>
<tr>
<td>模拟 OSD</td>
<td>否</td>
</tr>
<tr>
<td>飞控固件</td>
<td>Betaflight: HDZERO_HALO</td>
</tr>
<tr>
<td colspan="2">ELRS 接收器</td>
</tr>
<tr>
<td>芯片组</td>
<td>ESP32 + 2x SX1280</td>
</tr>
<tr>
<td>飞控 UART</td>
<td>TX1/RX1</td>
</tr>
<tr>
<td>Gemini RX</td>
<td>是</td>
</tr>
<tr>
<td>RF 频率</td>
<td>2.4GHz</td>
</tr>
<tr>
<td>最大 TX RF 功率</td>
<td>10mW</td>
</tr>
<tr>
<td>天线接口</td>
<td>2xU.FL</td>
</tr>
<tr>
<td>ELRS 固件</td>
<td>HDZero Halo FC 2.4G Gemini RX</td>
</tr>
<tr>
<td colspan="2">尺寸</td>
</tr>
<tr>
<td>电源供应</td>
<td>3S ~ 8S</td>
</tr>
<tr>
<td>尺寸</td>
<td>29x30.5mm，带有 20x20 M4 安装孔</td>
</tr>
<tr>
<td>重量</td>
<td>5.6g</td>
</tr>
<tr>
<td>专用插槽</td>
<td>ESC 和 HDZero 及其他数字 VTX</td>
</tr>
</table>

<div class="page"></div>

## 包含物

- 1x HDZero Halo 飞控
- 5x 橡胶垫圈（6.6mm）
- 5x 橡胶垫圈（8.0mm）
- 1x ELRS T 型短天线（40mm）
- 1x ELRS T 型长天线（90mm）
- 2x ELRS 天线固定器
- 1x ESC 电缆（8-pin SH1.0，30mm）
- 1x 8-pin SH1.0 连接器

<img src="/halomedia/image6.png" id="image6"><div class="page"></div>
