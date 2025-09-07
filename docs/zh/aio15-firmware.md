# 固件

## Betaflight 固件

- 下载并安装 [Betaflight Configurator](https://github.com/betaflight/betaflight-configurator/releases/tag/10.10.0)。

- 启动 Betaflight Configurator 以闪存固件。
  <img src="/aio15media/image6.png" id="image6">

1. 选择目标端口

2. 点击“更新固件”进入固件闪存标签

3. 选择目标 “HDZero_AIO15” 和版本，工厂版本为 4.4.2[01-Jun-2023]

4. 点击“加载固件[在线]”下载固件

5. 点击“闪存固件”将飞控固件刷新

## BlueJay ESC 固件

<img src="/aio15media/image7.png" id="image7">

工厂固件：Z_H_30_48_v0.19.2.HEX。要刷新新的 ESC 固件，请参阅 [此 YouTube 教程](https://www.youtube.com/watch?v=yEDhnBUFQNI)。

固件刷新后，需要通过 [BLHeliSuite 16.7.14.9.0.3](https://github.com/4712/BLHeliSuite/releases/tag/16714903) 设置每个 ESC 的启动功率为 1.00。

请注意，固件刷新时需要散热和完全充电的电池。

## HDZero 固件

* 如果没有，购买 [HDZero 编程器](https://item.taobao.com/item.htm?id=923351151370)；
* 从 [这里](https://www.alipan.com/s/WdoCPa2odz5) 下载 HDZero 编程器应用程序。

<img src="/aio15media/image8.png" id="image8">

- 将 HDZero VTX 编程器插入 AIO15 的 VTX 固件连接器，并使用 USB-C 电缆将编程器工具和 PC 连接

- 在 Windows PC 上启动 HDZeroProgrammer.exe

    1. 选择 AIO15

    2. 点击“加载在线固件”并选择版本号

    3. 点击“闪存 VTX”。底部将显示“正在连接 VTX...”

<img src="/aio15media/image9.jpeg" id="image9">
<img src="/aio15media/image10.png" id="image10">

应用程序将自动下载固件并进行闪存。
