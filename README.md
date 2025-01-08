# Leaflet_challenge
This Leaflet project offers an effective and interactive way to visualize seismic activity and tectonic plate movements. It combines real-time earthquake data with static tectonic plate boundaries to provide users with insights into the dynamic nature of our planet’s crust. The integration of dynamic map features like interactive markers, layer controls, and a color-coded legend makes the map both informative and engaging, while the use of external data sources ensures that the project is based on accurate and up-to-date information.

Overall, the project is a successful example of using web-based mapping tools and geospatial data to communicate complex scientific information in an accessible and user-friendly manner.

# Instructions
The instructions for this activity are broken into two parts:

Part 1: Create the Earthquake Visualization

![image](https://github.com/user-attachments/assets/c90a2cc6-1367-405d-8f04-f5b3f32de2c5)


Part 2: Gather and Plot More Data (Optional with no extra points earning)

![image](https://github.com/user-attachments/assets/c173ad9f-1be7-484b-a3ab-e9c44047d180)


# Part 1: Create the Earthquake Visualization
2-BasicMap

Your first task is to visualize an earthquake dataset. Complete the following steps:

Get your dataset. To do so, follow these steps:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:
3-Data

When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:
4-JSON

Import and visualize the data by doing the following:

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

Hint: The depth of the earth can be found as the third coordinate for each earthquake.

Include popups that provide additional information about the earthquake when its associated marker is clicked.

Create a legend that will provide context for your map data.

Your visualization should look something like the preceding map.

# Part 2: Gather and Plot More Data (Optional with no extra points earning)
Plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in this dataset and visualize it alongside your original data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplatesLinks to an external site..

This part is completely optional; you can complete this part as a way to challenge yourself and boost your new skills.

The following image is an example screenshot of what you should produce:

5-Advanced

Perform the following tasks:

Plot the tectonic plates dataset on the map in addition to the earthquakes.

Add other base maps to choose from.

Put each dataset into separate overlays that can be turned on and off independently.

Add layer controls to your map.
