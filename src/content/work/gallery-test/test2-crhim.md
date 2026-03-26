---
title: Test Gallery Entry 2 - Cane River Heritage Inventory & Map
publishDate: 2016-7-02 00:00:00
img: ../../../assets/projects/crhim-map-plat-overlay.png
img_alt: Screenshot showing a map of the Middle East with clustered points
description: |
  An implementation of Arches as an one-stop-shop for cultural resource management on a historic veterans home campus.
tags:
  - Arches
  - Historical maps
gallery:
    - src: ../../../assets/projects/vernon-trails-cover-low-res.jpg
      alt: test image 1
      title: Test image 1
      # NOTE: Astro's parser does not respect empty lines--ends up as a single <p>.
      description: |
        Labore Lorem duis ullamco voluptate mollit reprehenderit culpa voluptate pariatur. In adipisicing aliqua ipsum duis aliqua tempor commodo non enim non adipisicing nisi consequat.

        Deserunt consectetur magna minim proident ex consequat quis magna adipisicing nostrud est consectetur nulla. Cupidatat est aliqua ex veniam irure ea adipisicing non ullamco labore ea. Commodo pariatur sit veniam duis. Proident Lorem tempor magna Lorem adipisicing dolore ullamco amet dolore do ea labore. In non nisi ut laboris ea occaecat esse et excepteur deserunt anim adipisicing incididunt ex. Deserunt mollit excepteur aliquip ad elit dolore ut ex sit velit elit amet. Velit irure anim deserunt et sunt incididunt labore eu et et Lorem in cupidatat. Nulla amet magna Lorem amet esse qui deserunt.
    - src: ../../../assets/projects/crhim-home.png
      alt: test image 1
      title: An unusually long title that will demonstrate text wrapping for image titles in the image gallery
      description: The public-facing home screen of the Cane River Heritage Inventory & Map.
    - src: ../../../assets/projects/crhim-map-sanborn.png
      alt: test image 2
      title: Sanborn fire insurance maps
      description: Sanborn fire insurance maps from 1892 and 1914 add historic context to downtown Natchitoches.
    - src: ../../../assets/projects/crhim-map-plat-overlay.png
      alt: test image 3
      title: Historic survey plat overlay
      description: A layer of historic survey plats shows how old property lines are still reflected in satellite imagery. The red markers are locations of historic churches recorded in the database. This overlay was georeferenced and tiled from archival sources held by Natchitoches Parish.
    - src: ../../../assets/projects/crhim-map-confed-map-overlay.png
      alt: test image 4
      title: Confederate map overlay
      description: Previously unpublished Confederate maps from the Civil War can be made transparent to allow direct comparison of historic road routes, skirmish sites, and troop positions against a detailed LiDAR-derived elevation basemap of Natchitoches Parish. These maps had never been digitized or georeferenced before this project, and their integration into the Arches database represents a significant contribution to Civil War historiography in the region. Researchers and heritage tourists alike can use the transparency slider to reveal how dramatically the landscape has changed over 150 years.
---

In the spring of 2015 we created the Cane River Heritage Inventory & Map for the [Cane River National Heritage Area](http://canerivernha.org/), located in Natchitoches Parish, Louisiana. This was one of the first implementations of Arches v3, and we have since presented around the world&mdash;from Hong Kong to Liverpool&mdash;with the Getty Conservation Institute about this installation. Adam joined a team of authors to write about the project in the APT Bulletin's special issue on documentation (Vol. 48:4, winter 2017): ["Cultural-heritage Inventory Implementations"](https://www.jstor.org/stable/26382563).

![](../../../assets/projects/crhim-home.png)

The Cane River National Heritage Area was interested in creating this database as a public-facing view that would be accessible to tourists and locals alike. We migrated their existing GIS databases (a historic building survey, as well as the full American Cemetery interment database) into the Arches installation, and incorporated some oral interviews from the 1970s as well.

This Arches installation was particularly exciting for us because it provided a perfect opportunity to integrate historic maps with the interactive map view of the database. We edited, georeferenced, tiled, and published new web map layers from sources such as historic survey plats, USGS topos, Sanborn© fire insurance maps, and a series of previously unpublished confederate maps from the Civil War. We also used LiDAR data to make a detailed elevation basemap of Natchitoches Parish. These maps enhance the Arches map view, showing historic roads, Civil War skirmish sites, and detailed commercial information in downtown Natchitoches.

![](../../../assets/projects/crhim-map-plat-overlay.png)

A layer of historic survey plats shows how old property lines are still reflected in satellite imagery. The red markers are locations of historic churches recorded in the database.

![](../../../assets/projects/crhim-map-confed-map-overlay.png)

Confederate maps can be made transparent, to allow comparison of old road routes with a detailed elevation basemap.

![](../../../assets/projects/crhim-map-sanborn.png)

Sanborn fire insurance maps from 1892 and 1914 add a historic context to downtown Natchitoches.

---

You can view the source code for this Arches v3 app at https://github.com/mradamcox/crip.
 
_Update: Since the initial release of the Cane River Heritage Inventory & Map, the database has been decommissioned._
