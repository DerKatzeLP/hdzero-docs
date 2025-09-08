# HDZero Firmware Update

Download the latest Goggle firmware from [HDZero download](https://www.hd-zero.com/document). 

<table id="table6">
<tr>
<td></td>
<td>Downloaded Firmware (.Zip file)</td>
<td>Zip File Content</td>
<td >Purpose</td>
</tr>
<tr>
<td rowspan="2">HDZero Goggle 1</td>
<td rowspan="2">HDZEROGOGGLE_<br>Revyyyymmdd.zip</td>
<td>HDZERO_GOGGLE_nnn.bin</td>
<td>To flash firmware from Goggle main menu</td>
</tr>
<tr>
<td>Recovery/HDZG_OS.bin<br>Recovery/HDZG_BOOT.bin<br>Recovery/HDZGOGGLE_RX.bin<br>Recovery/HDZGOGGLE_VA.bin</td>
<td>For emergency recovery</td>
</tr>
<tr>
<td rowspan="2">HDZero Goggle 2</td>
<td rowspan="2">HDZEROGOGGLE2_<br>Revyyyymmdd.zip</td>
<td>HDZERO_GOGGLE2_nnn.bin</td>
<td>To flash firmware from Goggle main menu</td>
</tr>
<tr>
<td>Recovery/HDZG_OS.bin<br>Recovery/HDZGOGGLE_RX.bin<br>Recovery/HDZGOGGLE_VA.bin</td>
<td>For emergency recovery</td>
</tr>
</table>

> TABLE 4.  Goggle Firmware File

## Flashing Firmware to the Goggle

The HDZero Goggle runs on Linux. Its firmware contains the customized Linux distribution and its application software. We only need to update the application instead of updating the whole OS and application in most cases. However, there are some rare cases where the OS could become corrupted, such as losing power during update process. It is also possible that changes may have to be made to the OS in the future to add new functionality.

Before you start to update firmware, go to Main menu|Firmware|Current version. It should be in the following format:

    - n.xx.yyy, or

    - app:n-xx rx yy va zzz

If n is greater or equal than 9, take [Normal Goggle Firmware Update Process](#normal-goggle-firmware-update-process-for-n≥-9), otherwise take [A Special One Time Goggle Firmware Update Process](#a-special-one-time-goggle-firmware-update-process-for-n--9).

### Normal Goggle Firmware Update Process (for n≥ 9)

1. Disconnect all cables from the goggle. Keep the power cable only;

2. Prepare the firmware file:

    a. For Goggle 1: HDZERO_GOGGLE_nnn.bin

    b. For Goggle 2: HDZERO_GOGGLE2_nnn.bin

    Copy it to root directory of SD card that is formatted as FAT32, and make sure there is no previous firmware in the root directory;

3. Power on the goggle;

4. Go to Main menu | Firmware | Update Goggle, the display will show the current version;

5. Wait for the completion (about 3 minutes), then power off; 

6. Done!

### A Special One Time Goggle Firmware Update Process (for n < 9)

1. Disconnect all cables from the goggle. Keep the power cable only;

2. Extract HDZERO_GOGGLE- nnn.bin/HDZG_BOOT.bin/HDZG_OS.bin, and copy them to root directory of a FAT32 formatted SD card;

3. Insert SD card, Select Main menu | Firmware | Update Goggle. Power off after completion;

4. Power on goggle, wait for 2 min then power off;

5. Power on goggle, wait for 5 mins then power off;

6. Done! 

::: tip
Note:
     (1)HDZG_BOOT.bin/HDZG_OS.bin will be removed from SD card if update successfully. (2) Have to wait for the above specified time, DO NOT move to next step in a hurry.
:::
The goggle can be bricked under some rare cases. If the goggle is on the firmware version n  is 9 or later before bricked, follow [Goggle Emergency Firmware Update Process](#goggle-emergency-firmware-update-process-for-n≥-9); if n is earlier than version 9 or you are not sure which version it was on, please follow [Goggle Emergency Firmware Update Process using Phoenix App](#goggle-emergency-firmware-update-process-using-phoenix-app--for-all-versions) using Phoeix App.

### Goggle Emergency Firmware Update Process  (for n≥ 9)

1. Disconnect all cables from the goggle. Keep the power cable only;

2. Extract HDZG_OS.bin/ HDZGOGGLE_RX.BIN/ HDZGOGGLE_VA.BIN, and copy them to root directory of a FAT32 formatted SD card, and insert SD card to the goggle;

3. Power on goggle, wait for 5 min then power off;

4. Done! 

::: tip
Note:
     (1)HDZG_OS.bin/ HDZGOGGLE_RX.BIN/HDZGOGGLE_VA.BIN will be removed from SD card if update successfully. 
     (2) Have to wait for the above specified time, DO NOT move to next step in a hurry.
:::
 

### Goggle Emergency Firmware Update Process using Phoenix App  (for all versions)

Download PhoenixCard.zip from the [HDZero download](https://www.hd-zero.com/document) site, and extract it to a location on a Windows machine, for example, C:\PhoenixCard. This is a one-time process. There is no Mac or Linux version for now.

Download the latest firmware package from the [HDZero download](https://www.hd-zero.com/document) site, and extract all files in the zip file to your local drive, i.e. C:\Temp.

1. Launch C:\PhoenixCard\PhoenixCard.exe; 

2. Follow the steps on FIG.5 to make a bootable SD card; 

<img src="/gogglesmedia/image20.png" id="image14">

> FIG 5. Make a bootable SD Card

3. Eject the SD card from Windows, and insert the SD card into the SD card slot of the goggle;

 Unplug all of the cables, i.e., HDMI in/out, Line in/out, AV in. Keep the power cable only. Power on the goggle, you will hear a long beep im/gogglesmediately. Wait for 3 minutes and you will hear another long beep;

4. Power off the goggle, and pull out the SD card from the goggle. (Do not power on goggle now);

5. Follow the FIG.6 to restore the SD Card from BOOT mode, and format it as FAT32 on Windows;

<img src="/gogglesmedia/image22.png" id="image16">
<img src="/gogglesmedia/image21.png" id="image15">

> FIG 6. Restore a SD Card

6. Copy HDZGOGGLE_RX.bin and HDZGOGGLE_VA.bin to the SD card root directory;

7. Insert SD card into goggle, power on the goggle, wait for 2 minutes, and there will be a long beep;

8. (Optional) Pull out the SD card, and check SD card contents on the PC. The 2 files should be removed if flash process is successful;

9. Power the goggle off and then on again.

::: tip
Notes: 

(1) A bootable SD card has a hidden partition that Windows Explorer will not show. And it can’t be removed even SD card is formatted with Windows Explorer. It means the goggle will flash itself from the bootable SD card unexpectedly and mess up goggle firmware if a bootable SD card is inserted when the goggle is powered on.

(2) The above Step (5) must be followed strictly to get rid of the hidden bootable partition. Otherwise, it will brick the goggle when goggle is powered with this SD card inserted. If this happens, you will need to repeat the emergency firmware update process described in this section.

(3) Have to wait for the above specified time, DO NOT move to next step in a hurry.

(4) When the goggle is bricked, it shows HDZero Boot screen and will not get into Main menu.  
:::

## Flashing Firmware to a HDZero VTX

The HDZero goggle can flash firmware to a HDZero video transmitter via its FW port. Here are the steps:

### To flash a single VTX:

1. Copy HDZERO_TX.bin to root directory of a SD card that is formatted as FAT32 

2. Power on the goggle

3. Connect the VTX and HDZero goggle with the included programming cable

4. Go to Main menu | Firmware |Update VTX, the display will show the status of the flashing process 

5. Disconnect the VTX

6. This VTX is now flashed with the latest firmware

### To flash multiple VTXes of the same type:

1. Copy HDZERO_TX.bin to root directory of a SD card that is formatted as FAT32 

2. Power on the goggle

3. Connect one VTX to the HDZero goggle with the included programming cable

4. Go to Main menu | Firmware | Update VTX, the display will show the status, 

5. Disconnect the VTX, this VTX is flashed

6. Repeat 3-5 for the other VTXes

::: tip
Note: 

Flashing VTX firmware with Goggle is highly not recommended for Goggle safety consideration. [HDZero Programming Cable](https://www.hd-zero.com/product-page/hdzero-programming-cable) is preferred for its convenience and safety. However, a Windows system is needed to run the HDZero Programmer app, Mac is not supported for now.
:::
