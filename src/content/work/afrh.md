---
title: Armed Forces Retirement Home - Information Retrieval Inventory System
publishDate: 2016-7-02 00:00:00
img: ../../assets/projects/afrh-home.png
img_alt: Screenshot showing a map of the Middle East with clustered points
description: |
  An implementation of Arches as an one-stop-shop for cultural resource management on a historic veterans home campus.
tags:
  - Arches
  - Historical maps
---

Through the summer of 2016 we worked with [PRESERVE/scapes](http://preservescapes.com/) to create an Arches customization for cultural resource management at the Armed Forces Retirement Home in Washington D.C. Our improvements included activity and asset tracking to streamline compliance (Section 106, NEPA, etc), as well as the addition of many historic basemaps.

---

One aspect of developing an Arches app is the configuration of the database's map view, and one component of this is figuring out what layers to use. Which basemaps? Where will the aerial imagery come from? Can historic maps be included as overlays?

To test all these things out, I generally make a light-weight webmap that can serve as a testing ground. Below is the result of the development of the Armed Forces Retirement Home (AFRH) Arches app.

![screenshot of interactive map interface](../../assets/projects/afrh-maps-screenshot.png)

The more interesting part of the process is always the creation of the historic map layers. Legion GIS was provided with 12 high resolution scans of these maps, ranging in date from 1850 to 1975, and then the fun began. Full details on our favorite image processing techniques are for another post, but through some GIMP processing, ArcGIS/QGIS georeferencing, and GDAL resampling we were able to create nice, as-light-weight-as-possible GeoTiffs. These were published as Web Map Services through GeoServer.
