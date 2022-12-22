# gee-rf-classification

This script provides a demo on how to train and test a Random Forest Classifier using Google Earth Engine (GEE) Code Editor. It is currently a work-in-progress and more examples will be added.

![Result](/screenshots/result.png)

## Installation

No need to install, just create a new script in GEE and paste the code in main.js.

## Sampling

A walk-through on taking classification samples:

1. On the top right corner, change from "Map" to "Satellite";
2. On the top left corner, hit "Add a marker";
3. As shown below, in the setting of the marker geomtry, choose import as FeatureCollection and add a "landcover" property with an unique integer value that varies by class (e.g. water = 1, cropland = 2, etc.).

<img src="/screenshots/sampling.png" width="500" height="350" />

## Contributing
Pull requests and questions are welcome at anytime.
