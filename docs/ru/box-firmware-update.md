# HDZero BoxPro Firmware Update

Download the latest firmware HDZEROBOXPRO_Revyyyymmdd.zip from site. Then unzip it.

TABLE 4.  Firmware File

<table id="table6">
<tr>
<td>Firmware File</td>
<td>Usage</td>
</tr>
<tr>
<td>HDZERO_BOXPRO-*.bin</td>
<td>Flash firmware from the menu</td>
</tr>
<tr>
<td>Recovery/HDZB_OS.bin</td>
<td rowspan="3">Emergency recovery</td>
</tr>
<tr>
<td>Recovery/HDZBOX_RX.bin</td>
</tr>
<tr>
<td>Recovery/HDZBOX_VA.bin</td>
</tr>
</table>

The goggle can be bricked under some rare cases, please follow  to de-brick it. Otherwise, follow .

Normal Goggle Firmware Update Process

Disconnect all cables from the goggle. Keep the power cable only;

Copy HDZERO_BOXPRO-*.bin to root directory of a SD card that is formatted as FAT32, and make sure there is no previous firmware in the root directory;

Power on the goggle;

Go to Main menu | Firmware | Update Goggle, the display will show the current version;

Wait for the completion (about 3 minutes), then power off;

Done!

Emergency Firmware Update Process

Disconnect all cables from the goggle. Keep the power cable only;

Extract Recovery/HDZB_OS.bin, Recovery/HDZBOX_RX.bin Recovery/HDZBOX_VA.BIN, copy them to root directory of a FAT32 formatted SD card, and insert SD card to the goggle;

Power on goggle, wait for 5 min then power off;

Done!

Note: HDZB_OS.bin, HDZBOX_RX.BIN, and HDZBOX_VA.BIN will be removed from SD card if update successfully.