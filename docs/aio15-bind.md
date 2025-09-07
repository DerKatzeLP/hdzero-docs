# Bind with TX radio

*There are two ways to configure AIO15 for binding:*

1. Connect HDZero AIO15 to PC via micro-USB. Open Betaflight and connect to the AIO15. Navigate to the “Receiver” tab and click “Bind” to initiate binding mode; or

2. Power off the HDZero AIO15.

    Power-cycle the HDZero AIO15 3 times.

    - Supply power to the HDZero AIO15.

    - The ELRS LED lights up.

    - Turn it off within 2 seconds.

    - Repeat 2 more times.

Once RX is in binding mode, insert the ELRS TX module into your OpenTX Radio transmitter, select External RF mode and set it to the CRSF protocol. You will find the ELRS menu in the Radio system (ensure the ELRS.LUA file is copied to the SD-Card tools first). Enter the ELRS menu and press [Bind]. The RX LED on the flight controller will become solid if the binding is successful.

::: tip
NOTE: Make sure you use the matching ELRS preset for your link rate, failure to do so can lead to un-commanded movement in turns.
:::

## ELRS LED status:

- **Solid** means bind successful or Connection established;

- **Double-flash** means in bind mode;

- **Flash slowly** means no signal established with the TX module
