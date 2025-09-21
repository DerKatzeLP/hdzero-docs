# VTX Installation Diagram

<img src="/media/image7.png" id="image5">

## Notes

- Use a BEC to power the HDZero VTX whenever feasible. Before connecting, verify the VTX’s specific voltage and current requirements, as well as the BEC output capability of your flight controller.
- Whenever feasible, opt for the HDZero Halo FC—it enables a solder-free connection to the Race V3 VTX and Freestyle V2 VTX, simplifying assembly and minimizing setup errors.
- Don’t use SmartAudio (deprecated). Use MSP instead;
- One UART is needed for OSD, Camera, VTX menu, MSP VTX;
- Never apply power on VTX without antenna installed and secured;
- The HDZero VTX itself has no inherent preference for antenna polarization. However, for optimal signal performance, its antenna polarization should be matched with that of the receiving device—such as the HDZero Goggle, HDZero receiver, HDZero monitor.
