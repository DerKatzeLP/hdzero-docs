# HDZero Goggles 固件更新

从 [HDZero download](https://www.alipan.com/s/WdoCPa2odz5) 下载最新的Goggle固件。

<table id="table6">
<tr>
<td></td>
<td>下载的固件（ .Zip 文件）</td>
<td>Zip文件内容</td>
<td>目的</td>
</tr>
<tr>
<td rowspan="2">HDZero 眼镜 1</td>
<td rowspan="2">HDZEROGOGGLE_Revyyyymmdd.zip</td>
<td>HDZERO_GOGGLE_nnn.bin</td>
<td>从 Goggle 主菜单刷新固件</td>
</tr>
<tr>
<td>restore/HDZG_OS.bin<br>restore/HDZG_BOOT.bin<br>restore/HDZGOGGLE_RX.bin<br>restore/HDZGOGGLE_VA.bin</td>
<td>用于紧急恢复</td>
</tr>
<tr>
<td rowspan="2">HDZero 眼镜 2</td>
<td rowspan="2">HDZEROGOGGLE2_Revyyyymmdd.zip</td>
<td>HDZERO_GOGGLE 2 _nnn.bin</td>
<td>从 Goggle 主菜单刷新固件</td>
</tr>
<tr>
<td>restore/HDZG_OS.bin<br>restore/HDZGOGGLE_RX.bin<br>restore/HDZGOGGLE_VA.bin</td>
<td>用于紧急恢复</td>
</tr>
</table>

> 表 4. Goggle固件文件

## 刷写 Goggle 固件

HDZero Goggle运行在 Linux 系统上。其固件包含定制的 Linux 发行版及其应用软件。大多数情况下，我们只需更新应用程序，而无需更新整个操作系统和应用程序。然而，在极少数情况下，操作系统可能会损坏，例如在更新过程中断电。未来也可能需要对操作系统进行更改以添加新功能。

在开始更新固件之前，请前往主菜单|固件|当前版本。其格式如下：


    - n.xx.yyy ，或

    - app: n -xx rx yy va zzz​

如果n大于或等于 9，则采取 [正常 Goggle 固件更新流程（n ≥ 9）](#正常-goggle-固件更新流程-n-≥-9), 否则采取 [特殊的一次性 Goggles 固件更新过程（n < 9）](#特殊的一次性-goggles-固件更新过程-n-9)。

### 正常 Goggle 固件更新流程（n ≥ 9）

1. 断开眼镜上的所有线缆。仅保留电源线；

2. 准备固件文件：

    a. 对于 Goggle 1： HDZERO_GOGGLE_nnn.bin

    b. 对于 Goggle 2：HDZERO_GOGGLE2_nnn.bin

    将其复制到FAT32格式的SD卡根目录下，并确保根目录下没有之前的固件；

3. 打开眼镜电源；

4. 进入主菜单 | 固件 | 更新 Goggle，显示屏将显示当前版本；

5. 等待完成（约3分钟），然后关机；

6. 完毕！

<iframe style="width: 100%; height: 500px" src="//player.bilibili.com/player.html?isOutside=true&aid=115161142726860&bvid=BV1uPY5zXE7c&cid=32218025696&p=1&muted=false&poster=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

### 特殊的一次性 Goggles 固件更新过程（n < 9）

1. 断开眼镜上的所有线缆。仅保留电源线；

2. 提取 HDZERO_GOGGLE- nnn .bin / HDZG_BOOT.bin / HDZG_OS.bin ，并将它们复制到FAT32格式的SD卡根目录下；

3. 插入SD卡，选择主菜单 | 固件 | 更新Goggle。完成后关机；

4. 打开眼镜，等待2分钟后关闭；

5. 打开眼镜，等待5分钟然后关闭；

6. 完毕！

::: tip
注意： 
     （1）如果更新成功， HDZG_BOOT.bin / HDZG_OS.bin将从 SD 卡中删除。 
     （2）必须等待上述指定时间，请勿着急进入下一步。

:::
某些罕见情况下，眼镜可能会无法启动。如果眼镜的固件版本为n 变砖前是 9 或更高版本，请按照 [Goggle 紧急固件更新流程（n ≥ 9）](#goggle-紧急固件更新流程-n-≥-9)进行操作；如果n早于版本 9 或者您不确定它使用的是哪个版本，请使用Phoeix App按照流程 [使用 Phoenix App 进行 Goggle 紧急固件更新流程（适用于所有版本）](#使用-phoenix-app-进行-goggle-紧急固件更新流程-适用于所有版本) 进行操作。

### Goggle 紧急固件更新流程（n ≥ 9）

1. 断开眼镜上的所有线缆。仅保留电源线；

2. 解压HDZG_OS.bin / HDZGOGGLE_RX.BIN / HDZGOGGLE_VA.BIN ，并复制到FAT32格式的SD卡根目录下，将SD卡插入眼镜；


3. 打开眼镜，等待5分钟后关闭；

4. 完毕！

::: tip
注意：
    （1）如果更新成功， HDZG_OS.bin / HDZGOGGLE_RX.BIN / HDZGOGGLE_VA.BIN将从 SD 卡中删除。 
    （2） 必须等待上述指定的时间，不要着急进入下一步。

:::
 

### 使用 Phoenix App 进行 Goggle 紧急固件更新流程（适用于所有版本）

从 [HDZero 下载站点](https://www.alipan.com/s/WdoCPa2odz5) 下载 PhoenixCard.zip，并将其解压到 Windows 计算机上的某个位置，例如 C:\PhoenixCard。此过程只需操作一次。目前尚无 Mac 或 Linux 版本。


从 [HDZero 下载站点](https://www.alipan.com/s/WdoCPa2odz5) 下载最新的固件包，并将zip 文件中的所有文件解压到本地驱动器，即 C:\Temp。


1. 启动 C:\PhoenixCard\PhoenixCard.exe；

2. 按照图5的步骤制作可启动的SD卡；

<img src="/gogglesmedia/image20.png" id="image14">

> 图 5. 制作可启动 SD 卡

3. 从 Windows 中弹出 SD 卡，然后将 SD 卡插入眼镜的 SD 卡插槽；

 拔掉所有线缆，例如 HDMI 输入/输出、Line 输入/输出、AV 输入。只保留电源线。打开眼镜电源，您会立即听到一声长音。等待 3 分钟，您会再次听到一声长音；


4. 关闭眼镜，并从眼镜中拔出 SD 卡。（此时请勿打开眼镜电源）

5. 按照图6将SD卡从BOOT模式恢复，并在Windows上格式化为FAT32；

<img src="/gogglesmedia/image22.png" id="image16">
<img src="/gogglesmedia/image21.png" id="image15">

> 图 6. 恢复 SD 卡

6. HDZGOGGLE_RX.bin和HDZGOGGLE_VA.bin复制到SD卡根目录；


7. 将SD卡插入眼镜，打开眼镜电源，等待2分钟，会听到一声长音；


8. （可选）拔出 SD 卡，并在 PC 上检查 SD 卡内容。如果刷写成功，则应删除这两个文件；


9. 关闭眼镜然后重新打开。

::: tip
注意事项： 

（1）可启动 SD 卡上有一个隐藏分区，Windows 资源管理器不会显示该分区。即使使用 Windows 资源管理器格式化 SD 卡，也无法将其移除。这意味着，如果在眼镜开机状态下插入可启动 SD 卡，眼镜会意外地从可启动 SD 卡中读取数据，并导致眼镜固件崩溃。

（2）必须严格执行上述步骤（ 5 ），以清除隐藏的可启动分区。否则，在插入此 SD 卡的情况下，云眼镜通电后会变砖。如果发生这种情况，您需要重复本节中描述的紧急固件更新过程。

（3）必须等待上述指定的时间，请勿着急进入下一步。

（4）当眼镜变砖时，它会显示 HDZero 启动屏幕并且不会进入主菜单。

:::

## 使用 Goggles 刷写图传固件

HDZero 眼镜可以通过其固件端口将固件刷入 HDZero 图传。步骤如下：

### 刷写单个图传：

1. HDZERO_TX.bin复制到 FAT32 格式的 SD 卡根目录

2. 打开眼镜

3. 使用附带的编程线连接 VTX 和 HDZero 眼镜

4. 进入主菜单 |固件|更新VTX，显示屏将显示闪烁过程的状态

5. 断开 VTX

6. 此 VTX 现已刷入最新固件

<iframe style="width: 100%; height: 500px" src="//player.bilibili.com/player.html?isOutside=true&aid=115161058775192&bvid=BV1omYVzYECA&cid=32217630986&p=1&muted=false&poster=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

### 要刷写同一类型的多个图传 ：

1. HDZERO_TX.bin复制到 FAT32 格式的 SD 卡根目录

2. 打开眼镜

3. 使用附带的编程线将一个 VTX 连接到 HDZero 眼镜

4. 进入主菜单 | 固件 | 更新VTX，显示屏将显示状态，

5. 断开 VTX，此 VTX 已刷入最新固件

6. 对其他VTX重复 3-5

::: tip
Note: 

出于 Goggle 安全考虑，强烈建议不要使用 Goggle 刷写 VTX， [HDZero 编程器](https://item.taobao.com/item.htm?id=923351151370) 因其便捷性和安全性而更受欢迎。但是，运行 HDZero 编程器应用程序需要 Windows 系统，目前不支持 Mac 系统。

:::
