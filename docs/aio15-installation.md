# Installation

## Diagram

#### TOP

<img src="/aio15media/image1.png" id="image1">

#### Bottom

<img src="/aio15media/image2.png" id="image2">

## Installation Notes
### ELRS  antenna

A line antenna (¼ wavelength) for the ELRS receiver is pre-soldered and positioned close to the board for low-profile and easy packaging. However, the ELRS antenna needs to be lifted to maintain at least 3 mm of clearance from the board.
`<img src="/aio15media/image4.png" id="image4">`

If the line antenna is removed, the ELRS internal antenna will continue to be used for reception, but the sensitivity will not be as good as the line antenna.

### VTX antenna

The HDZero VTX integrated into the AIO5 has a specific requirement to prevent video noise caused by the video RF signal being routed back to the onboard power amplifier.

The VTX antenna should be mounted outward, not inward, on the board.

<img src="/aio15media/image5.png" id="image6">
