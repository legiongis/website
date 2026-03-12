---
title: Using Historical Maps of the Armed Forces Retirement Home
publishDate: 2016-08-04 12:00:00
description: |
  One aspect of developing an Arches app is the configuration of the database's map view, and one component of this is figuring out what layers to use. Which basemaps? Where will the aerial imagery come from? Can historic maps be included as overlays?
---

One aspect of developing an Arches app is the configuration of the database's map view, and one component of this is figuring out what layers to use. Which basemaps? Where will the aerial imagery come from? Can historic maps be included as overlays?

![Arches v3 map view with historical map overlay](/assets/notes/1877_SoldiersHome2.png)

To test all these things out, I generally make a light-weight webmap that can serve as a testing ground. Below is the result of the development of the Armed Forces Retirement Home (AFRH) Arches app.

![](/assets/notes/afrh-maps-screenshot.png)

The more interesting part of the process is always the creation of the historic map layers. Legion GIS was provided with 12 high resolution scans of these maps, ranging in date from 1850 to 1975, and then the fun began. Full details on our favorite image processing techniques are for another post, but through some GIMP processing, ArcGIS/QGIS georeferencing, and GDAL resampling we were able to create nice, as-light-weight-as-possible GeoTiffs. These were published as Web Map Services through GeoServer, and incorporated directly into the Arches search map.

![Arches v3 map view with historical map overlay](/assets/notes/afrh-arches-with-historic-map.png)