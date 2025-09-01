<img src="media/image1.png" id="image1">

HDZero BoxPro 用户手册

<img src="media/image2.png" id="image2">

<table id="table1">
<tr>
<td>修订</td>
<td>日期</td>
<td>描述</td>
</tr>
<tr>
<td>1.0</td>
<td>2025年2月5日</td>
<td>初稿</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</table>

欲了解更多产品信息，请访问：

www.hd-zero.com

版权所有

目录

介绍

HDZero BoxPro 是一款多功能 FPV 盒式眼镜，可接收数字、模拟和 HDMI 视频。使用前，请仔细阅读本操作手册。

特征

电源开/关滑动开关——一眼或通过感觉即可确定眼镜已打开或关闭

这款眼镜专为开源而设计，运行Linux系统。所有用户界面代码均为开源。

100Hz 1800 尼特液晶显示屏

支持屈光度镜片插入

通过将整个眼镜显示管道与 HDZero 的固定延迟视频传输相结合，这些眼镜实现了 4ms 玻璃到玻璃子帧延迟，无抖动或丢帧

集成两根 7dBi Patch 5.8GHz 天线

包含两个 2dBi 线性 5.8GHz SMA 天线

可调速风扇可冷却内部并防止屏幕起雾。

集成 4 根天线的 HDZero 接收器，支持所有 HDZero 模式

集成模拟接收器，与 HDZero 接收器共用天线

HDMI 输入延迟为 1ms，支持高达 1080p60 和 720p100 的分辨率

HDMI输出

DVR内置麦克风

3.5 毫米组合耳机/麦克风插孔，用于音频和外部麦克风

3.5 毫米模拟视频/音频输入，用于地面站输入

3.5 毫米头部跟踪器输出采用 6 轴智能惯性测量，支持平移+倾斜

集成 2D 去隔行器，不会增加模拟输入的延迟

内置 H.265 DVR，用于 HDZero、模拟和 HDMI 输入

内置 ESP32（可选）

内置 2.4Ghz WiFi 视频流模块，用于直播（可选）

<div class="page"></div>

规格

HDMI 输入到眼镜的延迟：1ms

模拟摄像机玻璃到眼镜玻璃的延迟：3ms

HDZero 摄像头玻璃到眼镜玻璃的延迟：4ms

100Hz 1800 尼特液晶显示屏

视野： 56度

输入电压：7V-25.2V（2S-6S）

典型功耗： 14.5W （HDZero RF 开启），或10 W（模拟 RF 开启）

重量：348克

尺寸：166x114x92mm

附带配件

1x HDZero BoxPro 眼镜

2 个线性天线

1 个泡沫面垫

1 条眼镜带

1x 1200mm XT60 电缆

1 个厚帆布眼镜袋，带套，用于存放天线

1 块镜头布

<div class="page"></div>

设置

HDZero BoxPro 具有许多可根据飞手个人定制的功能。

电源开关

眼镜右侧有一个滑动电源开关。您可以使用它来打开/关闭眼镜，或者保持眼镜开启状态，然后插拔直流电源插头来打开或关闭眼镜。

为了防止电压尖峰进入眼镜，只有在电源开关关闭的情况下才必须插入 6S（最大 4.2V/节）电池。

功率输入/消耗

该眼镜支持7-25.2V电源输入1 。打开眼镜电源前，请确保电源极性正确2 （中心针正极）。

表 1. 功耗

<table id="table2">
<tr>
<td></td>
<td>模式</td>
<td>功耗</td>
</tr>
<tr>
<td>1</td>
<td>HDZero Digital</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>模拟射频</td>
<td>0.8A@12V</td>
</tr>
<tr>
<td>3</td>
<td>HDMI 输入</td>
<td>0.7A@12V</td>
</tr>
</table>

注意： 

请勿使用 6S HV 锂电池为眼镜供电，否则会永久损坏眼镜。

眼镜内含自复位保险丝，用于防止电池反接。如果保险丝熔断，请等待一段时间使其复位。务必正确安装电池，并事先使用保护盒的电池检测仪进行检查。如果检测仪指示灯不亮，则表示电池安装方向错误，眼镜的保险丝将熔断以保护眼镜。

XT60 电缆

这款眼镜包含一根 1200 毫米 XT60 线缆，用于连接口袋中的电池。XT60 线缆不带稳压器，而是直接通过眼镜传输电压。

注意：

请勿将超过 6S 的电池连接到眼镜，因为眼镜的最大额定电压为 6S（4.2V/节）。

某些型号的 XT60 线缆（例如 HDZero VRX 线缆）集成了直流稳压器。请确保线缆能够输出足够的电流，如表 1 所示。如果出现这种情况，眼镜将无法启动或不断重启。

光学镜头

HDZero BoxPro 光学系统包括一个可聚焦图像的镜头，可确保飞手获得清晰、身临其境的视野。

注意：镜片由塑料制成，而非玻璃。为防止刮伤，请仅使用柔软的超细纤维布或专用于清洁眼镜的湿巾进行清洁。

屈光度镜片插件

这款眼镜没有内置光学调节功能。不过，用户可以根据自己的视力处方，在

注意：不包括屈光度镜片插入件，需要单独购买。

<img src="media/image5.png" id="image3">

头带 

这款眼镜包含一条 30 毫米（1.2 英寸）宽的头带，并配有电池仓。调整好面罩和海绵衬垫，使其贴合您的脸型后，即可戴上头带，并根据个人喜好调整松紧度。

HDMI输入

HDZero BoxPro 包含一个单端口 HDMI 1.4b 接收器，可通过 mini HDMI 端口接收。输入的 HDMI 视频以小于 1ms 的延迟路由到 LCD 显示器。

请注意，大多数 HDMI 连接问题都是由于显示器设置不正确或 HDMI 线缆故障造成的。如果您在使用 HDMI 输入时遇到问题，请尝试连接其他 HDMI 信号源和线缆，以排除这些常见原因。

当前固件支持 HDMI 输入高达 1080p60 和 720p100 的分辨率。

HDMI输出

HDZero BoxPro 包括一个高性能单通道 HDMI 发射器，该发射器通过迷你 HDMI 端口完全符合 HDMI 1.3a 标准。

HDMI 输出将显示与 OLED 显示屏上完全相同的内容。

表 2. HDMI 输出格式

<table id="table3">
<tr>
<td></td>
<td>输入源</td>
<td>HDMI输出格式</td>
</tr>
<tr>
<td>1</td>
<td>HDZero 60fps摄像机</td>
<td>1280x720x60帧</td>
</tr>
<tr>
<td>2</td>
<td>HDZero 90fps摄像机</td>
<td>1280x720x90帧</td>
</tr>
<tr>
<td>3</td>
<td>NTSC</td>
<td>1280x720x59.97帧/秒</td>
</tr>
<tr>
<td>4</td>
<td>朋友</td>
<td>1280x720x50帧</td>
</tr>
<tr>
<td>5</td>
<td>HDMI 输入</td>
<td>不支持</td>
</tr>
</table>

AV输入

HDZero BoxPro 支持通过 3.5 毫米 AV 插孔进行 AV 输入。其引脚排列如图 1 所示。

不包含 AV 输入线。可在和其他在线商店购买。

<{tag_name}><{tag_name}><{tag_name}>

HT（ 头追）输出

HDZero BoxPro 配备 6 轴智能惯性测量单元，支持头部跟踪云台旋转。HT 输出插孔引脚排列如图 2 所示。

HT 线缆不包含在内。可在和其他在线商店购买。

音频线路输入/线路输出

HDZero BoxPro 配备 CTIA 标准 3.5 毫米线路输入/线路输出插孔，可用于连接麦克风和耳机。其引脚排列如图 3 所示。

开源

HDZero BoxPro 是开源的。您可以在。

<div class="page"></div>

HDZero BoxPro 一般操作

本节介绍HDZero BoxPro的一般操作。

控件

拨盘

输入按钮

功能按钮

<img src="media/image9.png" id="image4">

  Video View和Menu View

<img src="media/image10.png" id="image5">

<div class="page"></div>

视频源

HDZero BoxPro 可以显示来自以下 4 个来源的视频：

内置 HDZero 数字接收器

内置模拟数字接收器

AV 输入

HDMI 输入

HDZero 数字接收器

主菜单上的“立即扫描”选项将扫描以下频道以获取 HDZero 视频信号：

R1-R8、 E 1、F1、F2 和 F4通道，或

如果选择低频段，则为 L1-L8

“Scan Now”将执行以下操作：

扫描以上频道，

如果只有一个有效信道有信号，则锁定该信道，或者

如果找到两个或更多频道，则让您在频道之间进行选择，或者

如果未检测到信号，则在 5 秒后继续扫描，或者

等待长按 Enter 键退出到主菜单

注1 ：要启用低频段，请将 Source -> HDZero Band 设置为Lowband 。以下是L1-L8 的中心频率。

<table id="table4">
<tr>
<td>低频段信道</td>
<td>L1</td>
<td>L2</td>
<td>L3</td>
<td>L4</td>
<td>L5</td>
<td>L6</td>
<td>L7</td>
<td>L8</td>
</tr>
<tr>
<td>频率（MHz）</td>
<td>5362</td>
<td>5399</td>
<td>5436</td>
<td>5473</td>
<td>5510</td>
<td>5547</td>
<td>5584</td>
<td>5621</td>
</tr>
</table>

注2： HDZero 与 HDZero Nano 90 相机配合使用时，可提供最低且固定的延迟。此 Nano 90 相机仅支持 540p60 模式。当设置为 540p60 时，眼镜需要将“Source”>“HDZero BW”设置为“Narrow” 。 

所有其他模式都需要将Source > HDZero BW 设置为Wide 。

模拟接收器

HDZero BoxPro 从 AV 输入插孔或内置模拟 RF 接收器获取模拟视频输入。

HDZero BoxPro 采用新颖的方法来处理模拟输入，从而提高了模拟视频质量：

它使用带有自适应梳状滤波器的视频解码器将 Y/C 从复合视频中分离出来；

它使用去隔行器将场转换为帧，而不是将隔行行加倍；

它使用升频器来录制和显示视频；

<img src="media/image11.png" id="image6">

图 4. 模拟输入的信号处理路径

自动扫描

HDZero BoxPro 具有让眼镜在开机后启动到所需模式的选项。

HDZero：主菜单 → 自动扫描 → 自动扫描 = 开启 |最后

默认值 = HDZero

模拟：主菜单 → 自动扫描 → 默认 = 模拟

上次：主菜单 → 自动扫描 → 默认 = 上次<br><br>

风扇管理

眼镜顶部有一个风扇，用于冷却内部组件并防止屏幕起雾。

风扇速度可设置为 1-5 级，对应从最小速度到最大速度。

侧风扇的控制方式有两种：

自动模式：Goggle固件会自动加速/减速；

手动模式：可以手动设定每个风扇的转速；

无论当前模式如何，如果温度传感器报告的读数过热，顶部风扇将达到最大速度。

您可以通过按住功能按钮来更改风扇转速。您可以在视频视图中监控眼镜 OSD 上的风扇转速变化，从而快速调整吹向面部和光学镜片的风量。

图像设置

HDZero 眼镜配备图像处理器，可在视频传输至 DVR 和显示器之前对其进行微调。它包括：

亮度

饱和度

对比度

LCD亮度

注： “亮度”是指视频处理器处理的图像亮度，“LCD亮度”是指LCD显示器的背光。

LCD 自动关闭

如果 HDZero BoxPro 在设定的时间内（1/3/5/7 分钟）未检测到任何移动或按键输入，它将关闭 LCD 显示屏以发出警报，并等待一分钟，然后关闭显示屏和 HDZero 数字接收器，并发出短促的蜂鸣声。如果眼镜检测到任何移动或按键输入，LCD 显示屏和 HDZero 接收器将恢复正常运行。您可以将等待时间设置为“从不”来禁用此功能。

强烈建议在不使用眼镜时使用上述 LCD 自动关闭功能或主菜单中的“Go Sleep”关闭 LCD。

录像 

HDZero BoxPro 集成了用于 HDZero 数字接收器的 DVR、模拟输入（RF 或 AV 输入）以及 HDMI 输入。以下是 DVR 选项：

自动录制：当 DVR 检测到当前频道上有有效的 HDZero RF 时，它将开始录制，当不再检测到信号时，它将停止录制。

手动录制：仅当单击 Func 按钮时，DVR 才会启动/停止。

MP4 格式或 TS 格式：许多视频编辑应用程序都更好地支持 MP4 格式。但是，如果眼镜在录制后关闭文件之前断电，MP4 文件可能会损坏，例如眼镜电池耗尽或电源线意外拔掉。与 MP4 格式不同，TS 格式会立即将视频流保存到 DVR，即使眼镜突然断电，也不会有文件损坏的风险。

H264/H265。DVR 录制 90fps 视频时必须使用 H264 格式（为了获得更佳画质，会以 1280x720x90 分辨率录制）。其他情况下均使用 H265 格式。

音频：您可以选择是否录制音频。有 3 个音频源可供录制：

内置麦克风

线路输入（来自线路输入/输出插孔），又称外部麦克风

AV 输入（来自 AV 输入 Jack）

表 3：DVR 分辨率

<table id="table5">
<tr>
<td></td>
<td>输入源</td>
<td>录制分辨率</td>
<td>编码器</td>
</tr>
<tr>
<td>1</td>
<td>HDZero 60fps摄像机</td>
<td>1280x720x60帧</td>
<td>H.265</td>
</tr>
<tr>
<td>2</td>
<td>HDZero 90fps摄像机</td>
<td>1280x720x90帧</td>
<td>H.264</td>
</tr>
<tr>
<td>3</td>
<td>NTSC</td>
<td>1280x720x59.97帧/秒</td>
<td>H.265</td>
</tr>
<tr>
<td>4</td>
<td>朋友</td>
<td>1280x720x50帧</td>
<td>H.265</td>
</tr>
<tr>
<td>5</td>
<td>HDMI 输入</td>
<td>1280x720（50、60、90帧/秒）<br>1920x1080（50、60帧/秒）</td>
<td>H.264</td>
</tr>
</table>

当眼镜正在向 SD 卡写入数据时，突然断电可能会导致 SD 卡上的文件系统损坏。

HDZero BoxPro 运行在 Linux 系统上，在突然断电的情况下，它无法保存最后的紧急数据位。如果 SD 文件系统损坏，DVR 将无法工作。以下是如何避免在录制过程中断电的提示：

- 自动记录模式：四轴飞行器着陆后，执行以下操作之一

- 长按“Enter”键切换到菜单模式，然后关闭眼镜，或者

- 先关闭四轴飞行器，等待 10 秒，然后关闭飞行器

- 手动录像模式：在关闭眼镜前，点击“Func”按钮停止DVR

- 如果插入 SD 卡时 Windows 或 Mac 报告问题，请选择“扫描并修复”。

HDMI 输入的 DVR

当源设置为 HDMI 输入时，DVR 的工作方式如下：

BoxPro 将自动开始录制并：

当 HDMI 分辨率改变时重新开始录制。

当录音时间达到10分钟时重新开始录音。

当 HDMI 输入源丢失时停止录制。

当 SD 卡存储空间小于 100MB 或 SD 卡弹出时停止录制。

注意：当源设置为 HDMI 输入时，没有 Goggle OSD，包括录制图标、电池状态等。

播放

HDZero BoxPro 可以播放 DVR 录音。

播放器首先会列出最近的录音。使用向上/向下拨盘选择文件，然后单击播放。

在控制栏上，使用向上/向下拨号来搜索视频（前进/后退 5 秒），然后单击播放/暂停

长按Enter键退出控制栏，再次长按Enter键退出播放器。

注意：

播放器将忽略小于 5MB 的文件。

回放功能旨在快速回顾——无论是查看录像，还是寻找失踪无人机的最后时刻。请注意，它无法以全帧速率回放。

屏幕显示

飞行眼镜支持飞控 OSD（FC OSD）和自身状态 OSD（Goggle OSD）。您可以在“录制选项”子菜单中选择是否将两个 OSD 都录制到视频流中。

点击“视频”视图下的“Enter”按钮即可显示/隐藏 Goggle OSD。Goggle OSD 项目的位置可在“OSD | 调整 OSD 元素”中更改。

飞行眼镜内置 BetaFlight、Arduino 和 iNav 的 OSD 字体。它会根据连接 HDZero 图传的飞控类型自动加载相应的字体。您还可以通过将位图文件放置在 SD 卡根目录/resource/OSD/FC 下来自定义飞控 OSD。

注意：当源设置为 HDMI 输入时，没有 Goggle OSD，包括录制图标、电池状态等。

调频道

通过向上/向下拨转盘，可以在视频模式下调整 HDZero 接收器输入的视频通道号。不过，可以在启动时将名为“no_dial.txt”的文件放入 SD 卡根目录来禁用此功能。

WiFi 模块（BoxPro+ 独有） 

HDZero BoxPro+ 支持 WIFI 视频流传输到智能手机、台式机或注意本电脑（如果包含 WIFI/ESP32 模块）。多个设备可以无线连接到眼镜并同时接收视频。

WiFi 模块的行为控制完全在 WiFi 模块页面中进行。用户可以将 Goggle 配置为主机（接入点）或客户端（加入网络）。

WiFi模块页面支持“基本”和“高级”配置字段。

基本字段：

启用 – 打开或关闭 WiFi 模块硬件。

模式 — 主机（接入点）或客户端（加入网络）。

SSID – 用户可以根据模式单独指定主机和客户端网络名称。

密码 – 用户可以根据模式分别指定主机和客户端网络密码。

请注意，密码至少需要 8 个字符。

应用设置 – 使用用户修改的设置存储并配置 WiFi 模块硬件。<< 更改以下图片 >>>

<img src="media/image12.png" id="image7">

高级字段：

DHCP – 此设置仅适用于客户端模式。

请注意，WiFi 会请求使用指定的地址。最终由路由器自行查找可用地址，如果请求的地址未被使用，则将使用指定的地址。

地址 – 网络 IP 地址。

此设置适用于主机和客户端模式。

网络掩码 – 网络子网掩码。

此设置适用于主机和客户端模式。

网关 – 网络网关 IP 地址。

此设置适用于主机和客户端模式。

DNS – 域网络服务 IP 地址。

RF 通道 – 此设置仅适用于主机模式，用户可以指定他们想要在哪个射频通道上进行通信。

<img src="media/image13.png" id="image8">

系统字段：

Root PW – 更新眼镜的 root 密码。

这适用于 SSH 和 SCP 通信。

SSH – 启用/禁用对眼镜的访问。

作为安全预防措施，默认为禁用。

<img src="media/image14.png" id="image9">

最后，如果任一页面被修改为“基本”或“高级”，用户必须返回“基本”页面并选择“应用设置”才能配置 WiFi 模块。

为了通过智能手机或计算机与 HDZero BoxPro 建立无线视频流，用户必须遵循以下步骤：

WiFi 模块页面中的“基本”页面将包含与 HDZero BoxPro 建立通信所需的信息：

主机模式 – 参考 SSID 和密码字段以加入 HDZero BoxPro 无线网络。

客户端模式 – 请参阅您的无线接入点用户手册。

在您的设备上安装 VLC 应用程序（或其他支持 RTSP 的类似应用程序）。

打开上述应用程序，选择“打开网络流”，然后输入“基本”页面脚注提供的 RTSP URL，因为它将提供通过 VLC 应用程序建立视频流所需的 URL，如果用户未在“高级”页面中进行修改，则以下是默认 IP 地址：

rtsp://192.168.2.122:8554/hdzero

注意：由于网络协议、应用程序的缓冲模式和操作系统平台，预计视频会出现延迟。

ESP32/Backpack 模块（可选） 

HDZero BoxPro 支持内置 ESP32 背包，可实现：

设置内置 HDZero 或模拟接收器的通道号

无线头部追踪

使用无线电开关启动/停止 DVR

更新BoxPro背包固件

在SD卡根目录下创建文件夹ELRS

使用ExpressLRS 配置器为 goggle 构建固件：

切换到背包菜单

选择与广播背包相同的发行版本

选择目标 HDZero Goggles -> 内置 ESP32 背包

设置与广播背包相同的绑定短语，否则你的背包需要手动绑定

构建固件。完成后会自动弹出一个文件夹，其中包含以下 4 个文件。请将它们复制到 SD 卡上创建的上述 ELRS 文件夹中。

boot_app0.bin

bootloader.bi

firmware.bin

partitions.bin

将 SD 卡插入眼镜

BoxPro 上的Flash Backpack固件：固件 -> 更新 ESP32

<img src="media/image15.png" id="image10">         <img src="media/image16.png" id="image11">

绑定 BoxPro 和 遥控器

请将您的 ELRS 无线电发射端 (TX) 刷写至与 BoxPro 背包固件版本相同的版本。请参阅此处的 ELRS 官方。

如果眼镜的绑定短语与收音机不同，则首次使用时需要手动绑定。

BoxPro: ELRS ->背包 = 在

BoxPro: ELRS -> 绑定

无线电： ExpressLRS Lua -> 绑定

几秒钟后， g oggle 将显示成功 绑定是否完成。

使用无线电开关启动/停止DVR

HDZero 眼镜支持通过无线电上的开关开始/停止录制。以下是在 BoxPro 和 Radio 上设置的步骤：

BoxPro：录制选项 -> 录制模式 = 手动的

电台： ExpressLRS Lua -> 背包 -> DVR录制 = AUX n ↑ | AUX n ↓，其中n是收音机开关的辅助通道编号。

实时时钟（RTC）

HDZero BoxPro 配备实时时钟。初始设置时，可以通过“时钟”页面配置实时时钟 (RTC)。使用“设置时钟”功能时，该页面将同时设置系统时钟和硬件时钟。否则，当眼镜启动时，系统将默认使用用户上次执行“设置时钟”命令后设置的日期和时间。

<img src="media/image17.png" id="image12">

预装电池最终可能会耗尽，可以用售后 CR1220 电池更换。更换电池后，您需要调用“设置时钟”功能来设置正确的时间和日期。

请注意，对于打开眼镜安装替换电池时造成的任何损坏，用户将承担全部责任。

<div class="page"></div>

HDZero BoxPro 固件更新

从站点下载最新固件HDZERO BOXPRO _Revyyyymmdd .zip。然后解压。

表 4. 固件文件

<table id="table6">
<tr>
<td>固件文件</td>
<td>用法</td>
</tr>
<tr>
<td>HDZERO_BOXPRO-*.bin</td>
<td>从菜单刷新固件</td>
</tr>
<tr>
<td>recovery/HDZ B _OS.bin</td>
<td rowspan="3">紧急恢复</td>
</tr>
<tr>
<td>recovery/HDZ BOX _RX.bin</td>
</tr>
<tr>
<td>recovery/HDZ BOX _VA.bin</td>
</tr>
</table>

少数情况下，眼镜可能会变砖，请按照修复。否则，请按照。

正常的 Goggle 固件更新流程 

断开眼镜上的所有线缆。仅保留电源线；

将HDZERO_BOXPRO-*.bin复制到FAT32格式的SD卡根目录下，并确保根目录下没有之前的固件；

打开眼镜电源；

进入主菜单 | 固件 | 更新 Goggle，显示屏将显示当前版本；

等待完成后（约3分钟），关机；

完毕！

紧急固件更新流程

断开眼镜上的所有线缆。仅保留电源线；

解压Recover y / HDZB_OS.bin、 Recover y / HDZBOX_RX.bin 、Recover y / HDZBOX_VA.BIN ，复制到FAT32格式的SD卡根目录下，并将SD卡插入眼镜；

打开眼镜，等待5分钟后关闭；

完毕！

注意：如果更新成功，HDZB_OS.bin， HDZBOX_RX.BIN和HDZBOX_VA.BIN将从SD卡中删除。

<div class="page"></div>

多语言支持

从v9.5.0版本开始，HDZero眼镜支持多种系统语言。请通过以下步骤修改系统语言：

在SD卡根目录创建一个空的文本文件并命名为：

chn.txt表示中文

eng.txt表示英文

rus.txt表示俄文

将SD卡插入眼镜并重启，新的语言将开始生效。

注意：

完整的文件名是chn.txt，而不是chn，也不是chn.txt.txt。

当语言设置生效后，无论SD中有无chn.txt，HDero眼镜都会记住当前语言设置。

<div class="page"></div>

视频教程

以下是飞手制作的教程视频，感谢他们为HDZero社区做出的贡献。HDZero将这些视频列于此，是为了帮助新飞手解决问题。视频所有版权属于原作者。如果原作者感到被冒犯，，我们会尽快删除。

<div class="page"></div>

故障排除

应尝试以下列方式提供支持。

请先阅读本手册

如果可以的话，请在 Facebook/Discord 上关注我们

微信：HDZero官方技术支持群

脸书： 

Discord 服务器： 

电子邮件技术支持： 

<div class="page"></div>

保修

HDZero BoxPro可在 7 天内，以未开封且全新状态退回，更换新产品。在无过度使用痕迹的情况下，光学模块保修 12 个月，所有其他部件保修 2 年，但买家需自行承担运费。如果超出保修期 在此期间，我们将提供收费维修服务。如需保修方面的帮助，请联系 support@divimath.com。