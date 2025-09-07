# 固件

## 刷写 Betaflight 固件
* 下载并安装 [Betaflight 配置器](https://github.com/betaflight/betaflight-configurator/releases/tag/10.10.0)。
* 启动 Betaflight 配置器。
* 刷写固件：

  <img src="/aio5media/image12.png" id="image10">

    1. 选择目标端口
    2. 点击“更新固件”进入固件闪存标签页
    3. 选择目标“CRAZYBEEF4SX1280”及版本，出厂版本为 4.4.2[01-Jun-2023]
    4. 点击“加载固件 [在线]”以下载固件
    5. 点击“闪存固件”以刷写飞控固件

* DFU 刷写：

  *如果您与飞控失去连接，请按照以下步骤恢复连接：*

    1. 关闭 AIO5
    2. 启用“无重启序列”，启用“完全擦除芯片”
    3. 按住 BOOT 按钮并通过 USB 连接到 PC，接着释放 BOOT 按钮
    4. 安装所有 STM32 驱动程序以及 Zadig（如有需要，查看 [USB 刷写](https://betaflight.com/docs/wiki/guides/current/installing-betaflight)章节）
    5. 关闭 Betaflight 配置器并重启 Betaflight 配置器
    6. 点击“更新固件”进入固件闪存标签页
    7. 选择目标“CRAZYBEEF4SX1280”及版本，出厂版本为 4.4.2[01-Jun-2023]
    8. 点击“加载固件 [在线]”以下载固件
    9. 点击“闪存固件”以刷写飞控固件

## 执行 CLI

从 [这里](https://www.alipan.com/s/WdoCPa2odz5) 下载文件并解压 HDZEROAIO5_RevXYZ.zip 到临时目录（例如：c:\123）；

<img src="/aio5media/image13.png">
<img src="/aio5media/image14.png">

1. 切换到 CLI 标签页
2. 点击“从文件加载”，并
    - 选择文件 c:\123\BTFL_CLI_HDZERO AIO5_1R2.txt（适用于 HDZero AIO5 1R2，带 BMI270）
    - 选择文件 c:\123\BTFL_CLI_HDZERO AIO5_1R3.txt（适用于 HDZero AIO5 1R3，带 ICM42688P）

   *注意：在此检查您的 HDZero AIO5 版本：*

   <img src="/aio5media/image15.png" id="image13">

3. 点击“执行”

<img src="/aio5media/image16.png" id="image14">

## BlueJay ESC 固件

出厂固件：O_H_5_48_V0.19.2.HEX。要刷写新的 ESC 固件，可以参考 [YouTube 教程](https://www.youtube.com/watch?v=yEDhnBUFQNI)。

<img src="/aio5media/image17.png" id="image15">

::: tip
注意：

- 在刷写 ESC 固件之前，需要关闭遥控器以断开 ELRS。

- 刷写固件后，需要通过 [ESC 配置器](https://esc-configurator.com/) 设置每个 ESC 的启动功率为最低 1100，最大 1200。

请注意，刷写 ESC 固件时需要良好的散热和充满电的电池。
:::

## HDZero 固件

* 如果没有，购买 [HDZero 编程器](https://item.taobao.com/item.htm?id=923351151370)；
* 从 [这里](https://www.alipan.com/s/WdoCPa2odz5) 下载 HDZero 编程器应用程序。

<img src="/aio5media/image18.png" id="image16">

* 将 HDZero VTX 编程器插入 AIO5 的 VTX FW 连接器，并使用 USB-C 数据线将编程器工具与 PC 连接。
* 启动 HDZeroProgrammer.exe（在 Windows PC 上）
    1. 选择 AIO5
    2. 点击“加载在线固件”并选择版本号
    3. 点击“闪存 VTX”。屏幕底部将显示“连接 VTX ...”

<img src="/aio5media/image19.jpeg" id="image17"><img src="/aio5media/image20.png" id="image18">

应用程序将自动下载固件并进行刷写。
