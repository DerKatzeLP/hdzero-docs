# 与 ELRS 遥控器绑定

*以下是两种绑定接收器的方法：*

1. **按钮绑定**

使用以下任一方法将接收器设置为绑定模式：

- 在 Betaflight 配置器的接收器页面点击“Bind”按钮（如果找不到该按钮，请更新 Betaflight 固件）。

- 使用 CLI，输入 `bind rx` 并按下回车。

- 使用 CLI，输入 `set expresslrs uid = 0`，按回车后保存并重启。

当 SPI 接收器进入绑定模式时（ELRS LED 会开始快速闪烁），将 ELRS TX 模块插入到 OpenTX 遥控器中，选择 External RF 模式并将其设置为 CRSF 协议。您将在遥控器的系统菜单中找到 ELRS 菜单（确保首先将 ELRS.LUA 文件复制到 SD 卡工具中）。进入 ELRS 菜单并按下 [Bind]。如果绑定成功，飞控上的 RX LED 将保持常亮。

2. **绑定短语**

从 Betaflight 4.4 版本开始（配合 Betaflight 配置器版本 10.9.0 或更新版本），您可以直接在 Betaflight 配置器的接收器页面中设置 ExpressLRS 绑定短语。

<img src="/aio5media/image11.png" id="image1">

正确配置 Betaflight 配置器中的接收器页面以适配 ExpressLRS SPI 接收器。接收器模式 (1) 应设置为 SPI RX。SPI 总线接收器提供商 (2) 应设置为 EXPRESSLRS。输入您的绑定短语到框中 (3)，它将转换为 UID 字节 (4) 并保存到 Betaflight 配置中。您还可以在此时启用遥测 (5)，并确保 RSSI_ADC (6) 和 RSSI Channel (7) 被禁用，如图所示。

::: warning
SPI ELRS 接收器不支持 D(D250, D500)、F(F500, F1000) 和 Full Res（100Hz Full Res, 333Hz Full Res）模式（数据包速率），因此无法与这些模式下的 TX 模块进行绑定或同步。

**以下数据包速率是支持的：50Hz, 150Hz, 250Hz, 500Hz。**
:::

## ELRS LED 状态

* **常亮** 表示绑定成功或连接已建立；
* **快速闪烁(500ms)** 表示在绑定模式中；
* **缓慢闪烁(1秒)** 表示未与 TX 模块建立信号连接。
