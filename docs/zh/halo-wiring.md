# 接线

本节描述了 Halo 飞控的接线图和接线方法。

## 接线图

<div style="display: flex; justify-content: space-around; text-align: center; gap: 20px;">
<img src="/halomedia/image8.jpg" style="width:50%; height: 100%" id="image8">

<img src="/halomedia/image7.jpg" style="width:50%; height: 100%" id="image7">
</div>
<img src="/halomedia/image9.jpg" style="width:60%; height: 100%" id="image9">

## HDZero Race v3 图传接线

<img src="/halomedia/image10.jpg" id="image10">

不幸的是，之前批次的 HDZero VTX-R3 图传连接器信号定义不同，需要用户重新接线（见下图）以匹配正确的连接方式。然而，最新的 HDZero Race v3 图传采用了更新的连接器，完美匹配 Halo 飞控，实现即插即用安装。

<img src="/halomedia/image11.png" id="image11">                     

> 之前批次的 VTX-R3（重新接线后）

<img src="/halomedia/image12.png" id="image12">

> 最新批次的 HDZero VTX-R3

## HDZero Freestyle V2 图传接线

<img src="/halomedia/image13.jpg" id="image13">

## DJI O3/O4 接线

<img src="/halomedia/image14.jpg" id="image14">

## DJI VISTA 接线

<img src="/halomedia/image15.jpg" id="image15">

<div class="page"></div>

## 外设接线（外部遥控器 RX，GPS）

<img src="/halomedia/image16.jpeg" id="image16">

<div class="page"></div>

## LED 条接线（并联，所有 LED 条共享相同配置）

<img src="/halomedia/image17.jpg" id="image17">

## LED 条接线（单独接线，可寻址 LED 条）

<img src="/halomedia/image18.jpg" id="image18">

<div class="page"></div>

## 竞速堆叠

这里有两个安装示例，展示如何将 HDZero Race v3 图传和 HDZero Halo 飞控堆叠在竞速无人机中。左侧的配置适合框架碳板之间有 21.5mm 间隙的无人机，而右侧适合高度至少为 23mm 的框架。为了减少飞控与 ESC 之间的空间，飞控和 ESC 应安装时插头朝下（请注意，这需要在 Betaflight 的电机设置中更改电机顺序）。

<img src="/halomedia/image19.png" id="image19"><img src="/halomedia/image20.png" id="image20">

## ELRS 天线安装

使用附带的天线固定器—下图中红色圆圈所示—将天线线缆引导至顶部板和其中一个臂上。如果空间有限，例如在紧凑的竞速无人机上，安装单根天线也是可以接受的。

<img src="/halomedia/image21.jpg" id="image21"><img src="/halomedia/image22.jpg" id="image22">
