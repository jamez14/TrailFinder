Documentation
--------------

About Trail Finder v0.1
-----------------------
Trail Finder is an application that uses geolocation (a users current GPS location) and gives them feedback, telling them the closest trail heads* to them at that location. This project was derived out of a personal need to locate various towpath trails in the NE Ohio area.
*Trail heads can be found most often at parks and towpaths and are typically for walking or riding a bicycle. 

Version Information (v0.1)
-----------------------------------
What it can do so far: 
  1. Find a users location using GPS, return and pinpoint the 3 closest locations to them
  2. Write out a list of 3 locations (not sorted yet)
  3. Give them an info window with location info
What it needs to do: 
  1. Return the correct 3 closest locations to the table (already works on the map)
  2. Add more data (currently there is only 5 pieces of sample data in Fusion Tables), 
  3. Finish the remaining pages of the app and other features
  4. Do cool stuff

Libraries Used
--------------
Trail Finder uses many open source libraries to do cool stuff...
  1. jQuery 
  2. Google Maps API
  3. Google Fusion Tables API
  4. Bootstrap 3.0

Code Information
----------------
The index.html file contains all of the code being used (or links to it). For testing, use these coordinates (41.0731, 81.5178) -- which is Akron, Ohio. Currently, Trail Finder uses very basic technologies. It is written in Javascript/jQuery, HTML5, and CSS3. It queries data from Google Fusion Tables to populate the map and list of locations. 
There is a Legacy folder that contains old code that either didn't work or was deprecated. The main folder structure contains the root (i.e. index.html) and three folders: CSS, JS, & img. 

Google Fusion Table setup
-------------------------
The API can call any number of fields from the Fusion Table and place those fields at a specified location.
The most basic setup is "Name" and "Location". "Location" is a set of coordinates (i.e. 41.0731, 81.5178).

Contributing Authors
--------------------
Currently the only developer working on this project is me, James Mosier. 
Anyone who wants to contribute ideas, code, or help, just shoot me a message or request.

Contact
-------
James D. Mosier
james@jamesdmosier.com
www.jamesdmosier.com

Copyright & Licensing
---------------------
Original work Copyright (c) 2013 James D. Mosier 
Please read the LICENSE.txt for all copyright and licensing information. 
