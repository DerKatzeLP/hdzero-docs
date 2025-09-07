# 固件

## 刷写 Betaflight 固件

- 下载并安装 [Betaflight Configurator](https://github.com/betaflight/betaflight-configurator/releases/tag/10.10.0)。

- 启动 Betaflight Configurator

- 刷写固件：

    <img src="/halomedia/image23.jpg" id="image23">

    1) 选择目标端口

    2) 点击“更新固件”进入固件刷写标签页

    3) 选择目标 “HAZERO_HALO” 和版本，出厂版本为 4.5.1[27-Jun-2024]

    4) 点击“加载固件 [在线]”以下载固件

    5) 点击“刷写固件”以刷写飞控固件

- DFU 刷写：

  *如果你与飞控失去通信，请按照以下步骤恢复通信：*

    1) 关闭 HALO 飞控

    2) 启用“无重启序列”，启用“全芯片擦除”

    3) 按住飞控 BOOT 按钮，插入 USB-C 连接到 PC，松开 BOOT 按钮

    4) 安装所有 STM32 驱动程序，并在需要时安装 Zadig（参见 Betaflight 手册部分）

    5) 关闭 Betaflight Configurator，重新启动 Betaflight Configurator

    6) 点击“更新固件”进入固件刷写标签页

    7) 选择目标 “HAZERO_HALO” 和版本，出厂版本为 4.5.1[27-Jun-2024]

    8) 点击“加载固件 [在线]”以下载固件

    9) 点击“刷写固件”以刷写飞控固件

## 执行 CLI

- HDZero HALO 在线固件已经包含所需的 CLI，如果需要预定义的 CLI，请按照以下步骤操作：

从 Flight Configurator 标签页下载文件 [HDZero Download](https://www.alipan.com/s/WdoCPa2odz5)，并将 HDZEROHALO_RevXYZ.zip 解压到临时目录，例如 c:\123

<img src="/halomedia/image24.png" id="image24">

1) 切换到 Betaflight Configurator 的 CLI 标签页

2) 点击“从文件加载”，选择文件 c:\123\ HDZERO_HALO.txt 用于 HDZero HALO

3) 点击“执行”

<img src="/halomedia/image25.png" id="image25">

- 图传表未包含在 HDZero HALO 在线固件中，但可以通过以下几种方式添加：

1) 当你使用 HDZero 图传与 HDZero HALO 时，

图传会通过 MSP 提供此功能，图传固件需要是 1.7.0 或更高版本，或者

2) 使用 CLI 文件 HDZERO_HALO.txt 提供的配置，或者

3) 使用 Betaflight Configurator 预设，搜索 HDZero 图传以找到此预设

<img src="/halomedia/image26.png" id="image26">

<img src="/halomedia/image27.png" id="image27">

## 刷写 ELRS 固件

HDZero Halo 出厂的 ELRS 固件版本为 Released 3.5.1，如果需要更新固件，请参考 ELRS 更新教程（[典型更新步骤](https://www.expresslrs.org/quick-start/receivers/updating/)），设备类别和设备目标如下：

设备类别：HDZero

设备目标：HDZero Halo 飞控 2.4G Gemini RX

<img src="/halomedia/image28.jpg" id="image28"><div class="page"></div>

## 可切换 9V BEC

- 启动 Betaflight Configurator

- 切换到 CLI 标签页

- 输入 CLI：

```shell
resource PINIO 1 E03

set pinio_config = 1

set pinio_box = 40

save
