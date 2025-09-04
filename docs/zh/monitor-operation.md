# HDZero Monitor 小飞手操作说明

本章节介绍 **HDZero Monitor 小飞手** 的常规操作。

## 频段与频道

HDZero Monitor 小飞手不具备自动扫描功能，需要手动设置 **频段（Band）** 与 **频道（Channel）**。  

频段与频道是分开设置的，这意味着你可以更快地切换到所需频道。  

**HDZero 支持的频道：**

- E1  
- F1, F2, F4  
- R1 - R8  
- L1 - L8  

**模拟（Analog）支持的频道：**

- A1 - A8  
- B1 - B8  
- E1 - E8  
- F1 - F8  
- R1 - R8  
- L1 - L8  

### 切换频段  

<img src="/monitormedia/image11.png" id="image9">

### 切换频道  

<img src="/monitormedia/image12.png" id="image10">

## 信号源

HDZero monitor 小飞手支持两种信号源：**RF 输入** 和 **Line In**。  

**RF 输入：**

- HDZero monitor 小飞手会在 RF 模拟与 RF HDZero 之间自动切换，直到锁定信号。  
- 当锁定 RF 模拟信号时，会自动检测 **NTSC/PAL**。  
- 当锁定 RF 模拟信号时，**VI/AO 接口**会输出模拟 RF 的音频。  

**Line In 输入：**

- 当锁定 Line In 信号时，会自动检测 **NTSC/PAL**。  

### 切换信号源  

<img src="/monitormedia/image13.png" id="image11">

## 录像

在录像前，请将 **SD 卡** 插入插槽。推荐的 SD 卡规格如下：  

- 容量：8GB – 32GB  
- 格式：FAT32，分配单元大小 4096 Bytes  

当 SD 卡被正确识别后，屏幕右上角的 **SD 卡 OSD 图标** 会消失。  

- 当锁定有效信号时，录像会自动开始。  
- 当信号丢失时，录像会自动停止。  
- 你也可以通过按键，手动控制录像的开始与停止。  

### 开始/停止录像  

<img src="/monitormedia/image14.png" id="image12">

## 图像设置

以下图像参数可以通过 **HDZero Programmer App** 进行设置：  

- 亮度（Brightness）  
- 对比度（Contrast）  
- 饱和度（Saturation）  
- 背光（Backlight）  

其中 **背光** 支持通过按键快速调节。  

### 调节背光  

<div class="page"></div>  
<img src="/monitormedia/image15.png" id="image13">

## OSD

你可以启用或禁用 **飞控 OSD 显示**，需通过 **HDZero Programmer App** 设置。  

## CAD 模型

你可以在 [https://github.com/hd-zero/hdzero-tooling](https://github.com/hd-zero/hdzero-tooling) 下载 CAD 文件，基于 3D 模型打印 **电池盒** 或 **遮阳罩**。  
