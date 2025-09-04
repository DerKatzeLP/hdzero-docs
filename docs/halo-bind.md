# Bind with ELRS TX radio

There are two ways to configure Halo FC for binding:

1. Connect HDZero Halo FC to PC via USB-C. Open Betaflight and connect to the FC. Navigate to the “Receiver” tab and click “Bind” to initiate binding mode; or

2. Power off the Halo FC.

    Power-cycle the Halo FC 3 times.

    - Supply power to the Halo FC

    - The ELRS LED lights up.

    - Turn it off within 2 seconds.

    - Repeat 2 more times.

Once RX is in binding mode, insert the ELRS TX module into your OpenTX Radio transmitter, select External RF mode and set it to the CRSF protocol. You will find the ELRS menu in the Radio system (ensure the ELRS.LUA file is copied to the SD-Card tools first). Enter the ELRS menu and press [Bind]. The RX LED on the flight controller will become solid if the binding is successful.

::: tip
NOTE: Make sure you use the matching ELRS preset for your link rate, failure to do so can lead to un-commanded movement in turns.
:::

The green ELRS LED on Halo FC status:

- **Solid** means bind successful or Connection established;

- **Double-flash** means in bind mode;

- **Flash slowly** means no signal established with the TX module
