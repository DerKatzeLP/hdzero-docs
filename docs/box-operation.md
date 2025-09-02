# HDZero BoxPro Operation

This section describes the general operation of the HDZero BoxPro.

## Controls

- Dial Pad

- Enter Button

- Func Button

<img src="/boxmedia/image9.png" id="image4">

## Video view and Menu view

<img src="/boxmedia/image10.png" id="image5">

<div class="page"></div>

### Video Source

The HDZero BoxPro can display video from any of 4 sources:

- Built-in HDZero digital receiver

- Built-in Analog digital receiver

- AV in

- HDMI in

### HDZero Digital Receiver

The “Scan Now” option on the main menu will scan the following channels for an HDZero video signal:

- R1-R8, E1, F1, F2, and F4 channels, or

- L1-L8 if low band is selected

“Scan Now” will perform the following:

- Scan the above channels,

- Lock on to the channel if there is only one valid channel with a signal, or

- Let you choose between the channels if it has found two or more channels, or

- Continue to scan after 5 seconds if no signal is detected, or

- Wait for a long press of the Enter button to exit to the main menu

::: tip
Note 1: To enable low band, set Source -> HDZero Band to **Lowband**. Here is the center frequencies for L1-L8.

<table id="table4">
<tr>
<td>Low Band Channel</td>
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
<td>Frequency (MHz)</td>
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
:::

::: tip
Note 2: The HDZero provides the lowest and fixed latency when used with the HDZero Nano 90 camera. This Nano 90 camera supports 540p60 mode exclusively. When it is set to 540p60, the goggle needs to set Source > HDZero BW to Narrow.

All other modes need to set Source > HDZero BW to Wide.
:::

## Analog Receiver

The HDZero BoxPro takes analog video input from either the AV input jack or the built-in analog RF receiver.

The HDZero BoxPro uses a novel approach to process the analog input, resulting in improved analog video quality:

It uses a video decoder with an adaptive comb filter to separate Y/C from the composite video;

It uses a deinterlacer to convert fields to frames, instead of doubling the interlaced lines;

It uses an upscaler to record and display the video;

<img src="/boxmedia/image11.png" id="image6">

FIG 4. Signal Processing Path for Analog Input

## Auto Scan

HDZero BoxPro has options to let goggle boot to desired modes after power on.

HDZero:      Main Menu → Auto Scan  → Auto Scan = ON | Last

                                        Default = HDZero

Analog:       Main Menu → Auto Scan  → Default = Analog

Last time:    Main Menu → Auto Scan  → Default = Last<br><br>

## Fan Management

There is one fan on the top of the goggle. It cools the internals and prevents screen fogging.

The fan speed can be set to a 1-5 level, corresponding from minimum to max speed.

There are two control modes for side fans:

- Automatic mode: Goggle firmware will automatically speed up/down;

- Manual mode: You can manually set the speed for each fan;

Regardless of the current mode, top fan will go to max speed if temperature sensor reports a reading that is too hot.

You can change the fan speed by pressing and holding the Func Button. You can monitor the fan speed changes on the goggle OSD to quickly change the amount of air blowing onto your face and the optic lenses while in the Video view.

## Image Settings

The HDZero goggle has an image processor to fine tune video before feeding to DVR and display. It includes:

- Brightness

- Saturation

- Contrast

- LCD Brightness

::: tip
Note: "Brightness" refers to the image brightness processed by the video processor, while "LCD Brightness" pertains to the backlight of the LCD display.
:::

## LCD Auto Off

If the HDZero BoxPro detects no movement or no key input for programmed time (1/3/5/7 minutes), it will dim the LCD display as an alarm, and it will wait for another one minute before turning off both the display and HDZero digital receiver with a short beep. The LCD display and HDZero receiver will resume normal operation if the goggle detects movement or any key input. This feature can be disabled by setting the waiting time to “Never”.

It is highly recommended to use the above LCD auto off feature or “Go Sleep” from main menu to turn off LCD while not using the goggle.

## DVR

The HDZero BoxPro integrates a DVR for the HDZero digital receiver, analog input (RF or AV in), and HDMI input. These are the DVR options:

- Automatic Record: DVR will start to record when it detects there is valid HDZero RF on the current channel, and stops recording when the signal is no longer detected.

- Manual Record: DVR will start/stop only if Func button is clicked.

- MP4 format or TS format: MP4 format is better supported by many video editing applications. However, MP4 files can be corrupted if the goggle loses power before the file is closed after recording, which can happen if the goggle runs out of battery or the power cord is unplugged unexpectedly. Unlike the MP4 format, the TS format saves the stream instantly to DVR without any risk of corrupted files, even if the goggle suddenly loses power.

- H264/H265. The DVR must use the H264 format when recording 90fps video (it records in 1280x720x90 for better quality). It uses the H265 format in all other cases.

- Audio: You can choose to record audio or not. There are 3 audio sources that can be recorded:

    1. Built-in microphone

    2. Line in (From Line in/out Jack), aka external microphone

    3. AV in (From AV in Jack)

TABLE 3: DVR resolution

<table id="table5">
<tr>
<td></td>
<td>Input Source</td>
<td>Recording resolution</td>
<td>Encoder</td>
</tr>
<tr>
<td>1</td>
<td>HDZero 60fps Camera</td>
<td>1280x720x60fps</td>
<td>H.265</td>
</tr>
<tr>
<td>2</td>
<td>HDZero 90fps Camera</td>
<td>1280x720x90fps</td>
<td>H.264</td>
</tr>
<tr>
<td>3</td>
<td>NTSC</td>
<td>1280x720x59.97fps</td>
<td>H.265</td>
</tr>
<tr>
<td>4</td>
<td>PAL</td>
<td>1280x720x50fps</td>
<td>H.265</td>
</tr>
<tr>
<td>5</td>
<td>HDMI in</td>
<td>1280x720 (50,60, 90fps)<br>1920x1080 (50, 60fps)</td>
<td>H.264</td>
</tr>
</table>

::: warning

**The file system on SD card can be corrupted by suddenly power off while goggle is writing data to it.**

  The HDZero BoxPro runs on Linux, and it does not have a big capacitor that saves power for saving the last emergency bits. The DVR will not work if SD file system is corrupted. Here are tips on how to avoid powering off while recording is ongoing:

- Auto record mode: after quad is landed, do one of the following

    - Long press “Enter” button to switch to menu mode, then power off the goggle, or

    - Power off quad first, and wait for 10 seconds, then power off the goggle

- Manual record mode:  Click “Func” button to stop DVR before power off the goggle

- Select “Scan and Fix” if Windows or Mac reports problem when SD card is inserted.

:::

## DVR for HDMI in

Here is how DVR works when source is set to HDMI in:

- BoxPro will automatically start recording and:

- Restart recording when HDMI in resolution changes.

- Restart recording when recording time reaches 10 minutes.

- Stop recording when HDMI in source is lost.

- Stop recording when SD card storage is less than 100MB or SD card is ejected.

::: tip
Note: When source is set to HDMI in, there is no Goggle OSD, include recording icon, battery status, etc.
:::

## Playback

The HDZero BoxPro can play back DVR recordings.

- The player lists the recent recording first. Use Dial up/down to select a file, and click to play it

- On controller bar, use Dial Up/Down to seek video (5 seconds forward/backward), and click to play/pause

- Long press the Enter button to exit the controller bar, and long press Enter again to exit the player.

::: tip
Note: The player will ignore files that are less than 5MB.
:::

## OSD

The goggle supports OSD from flight controller (FC OSD) and OSD of its own status (Goggle OSD). You may select if both OSD should be recorded with video stream at Record Options sub-menu.

Goggle OSD can be shown/ hidden by clicking the Enter button under Video view. The positions of Goggle OSD items can be changed at OSD | Adjust OSD Elements.

The goggle has built-in OSD fonts for BetaFlight, Arduino and iNav. It will automatically load the corresponding font according to type of flight controller that is connected with HDZero video transmitter. You can also customize FC OSD by putting bitmap files under SD card root directory/resource/OSD/FC.

::: tip
Note: When source is set to HDMI in, there is no Goggle OSD, include recording icon, battery status, etc.
:::

## Tune Channel

By Dialing up/down, video channel number can be tuned on video mode for HDZero receiver input. However, this can be disabled by putting a file named as “no_dial.txt” on SD card root directory when booting up.

## WiFi Module (Optional)

The HDZero BoxPro supports WIFI video streaming to smart phone, desktop or laptop, if it includes WIFI/ESP32 module. Multiple devices can wirelessly connect to the goggle and receive the video simultaneously.

Control over the behavior of the WiFi Module is completely managed from within the WiFi Module page. Users have the ability to configure the goggle as a Host (Access Point) or a Client (Join Network).

WiFi Module page supports both “Basic” and “Advanced” configuration fields.

#### Basic Fields:

- Enable – Powers On or Off the WiFi Module hardware.

- Mode – Host (Access Point) or Client (Join Network).

- SSID – User can specify a Host and Client network names individually based on Mode.

- Password – User can specify a Host and Client network password individually based on Mode.

    > Note that password requires a minimum of 8 characters.

- Apply Settings – Stores and configures the WiFi Module hardware with the settings the user has modified.  << change the following pic>>>

<img src="/boxmedia/image12.png" id="image7">

#### Advanced Fields:

- DHCP – This setting only applies to Client Mode.

    > Note the Address specified will be requested for use by the WiFi.  Ultimately it is up to the router to find and available address if the address requested is not in use, then the one specified will be used.

- Address – The network IP address.

    > This setting applies for both Host and Client modes.

- Netmask – The network subnet mask.

    > This setting applies for both Host and Client modes.

- Gateway – The network gateway IP address.

    > This setting applies for both Host and Client modes.

- DNS – the Domain Network Service IP address.

- RF Channel – This setting only applies to Host Mode and a user can specify which radio frequency channel they want to communicate on.

<img src="/boxmedia/image13.png" id="image8">

#### System Fields:

- Root PW – Update the root password for the goggles.

    > This applies to SSH and SCP communications.

- SSH – Enable/Disable Access to the goggles.

    > Defaults to disabled as a security precaution.

<img src="/boxmedia/image14.png" id="image9">

Finally, if either page is modified “Basic” or “Advanced”, the user must return back to the “Basic” page and select “Apply Settings” in order to configure the WiFi Module.

In order to establish a wireless video stream with the HDZero BoxPro via a smartphone or computer, the user must follow these steps:

1. The “Basic” page within the WiFi Module page will contain the necessary information in order to establish communications with the HDZero BoxPro:

    a. Host Mode – Refer to the SSID and Password fields in order to join the HDZero BoxPro wireless network.

    b. Client Mode – Refer to your wireless access point user manual.

2. Install VLC app (or other similar app that supports RTSP) on your device.

3. Open the above app, choose “Open Network Stream”, and type the RTSP URL provided by the “Basic” page footnote as it will provided the necessary URL in order to establish a video stream via VLC app, below is the default ip address if the user has not made modifications within the  “Advanced” page:

    > rtsp://192.168.2.122:8554/hdzero
::: tip
Note: Video latency is expected due to networking protocols, buffering schema of the app, and OS platforms.
:::

## ESP32/Backpack Module (Optional)

The HDZero BoxPro supports a built-in ESP32 Backpack that achieves:

- Set channel number of built-in HDZero or Analog receiver depending on Source input

- Wireless head tracking

- Start/Stop DVR using a radio switch

## Update BoxPro Backpack Firmware

- Create a folder name as ELRS in the root directory of the SD card

- Using **ExpressLRS Configurator** to build firmware for goggle:

    1. Switch to Backpack menu

    2. Select the same release version with the radio backpack

    3. Select target HDZero Goggles -> Built-in ESP32 Backpack

    4. Set the same binding phrase as the radio backpack, otherwise your backpack needs to be bound manually

    5. Build the firmware. A folder will pop up automatically containing the following 4 files when completed. Copy them to the above ELRS folder created on SD card

        √ boot_app0.bin

        √ bootloader.bin

        √ firmware.bin

        √ partitions.bin

- Insert SD card to the goggle

- Flash Backpack firmware at BoxPro: Firmware -> Update ESP32

<img src="/boxmedia/image15.png" id="image10">         <img src="/boxmedia/image16.png" id="image11">

## Bind BoxPro and Radio

Please flash your ELRS TX of Radio to the same version as BoxPro Backpack firmware version. Refer to ELRS official [Tx Backpack Setup](https://www.expresslrs.org/hardware/backpack/backpack-tx-setup/) here.

If the binding phrase of goggle is different with Radio, it is needed to bind manually for first use.

1. BoxPro:  ELRS -> Backpack = on

2. BoxPro:  ELRS -> Bind

3. Radio:  ExpressLRS Lua -> Bind

After a few seconds, the goggle will display success if the binding is complete.

## Start/Stop DVR using a radio switch

The HDZero goggle supports start/stop recording using a switch on radio. Here are steps to setup on BoxPro and Radio:

1. BoxPro:  Record Option -> Record Mode = Manual

2. Radio:  ExpressLRS Lua -> Backpack -> DVR Rec = AUXn↑ | AUXn↓, where n is aux channel number for the switch on radio.

## Real Time Clock (RTC)

The HDZero BoxPro is equipped with a Real Time Clock. For initial setup, the RTC can be configured through the Clock Page, which will set both the system clock and hardware clock when you use the "Set Clock" function. Otherwise, when the goggles boot up, they will default to the last date and time set by the user since the "Set Clock" command was last applied.

<img src="/boxmedia/image17.png" id="image12">

The pre-installed battery may eventually die and can be replaced with an aftermarket CR1220 battery. After replacing the battery, you'll need to invoke the "Set Clock" function to set the correct time and date.

**Please note that the user assumes full responsibility for any damage incurred while opening the goggles to install a replacement battery.**
