var dmZoom = 0;
var travelWeatherMap
var travelWeatherTransform = false
var golfIndexMap
var golfIndexTransform = false
var estimatedPrecipMap
var estimatedPrecipTransform = false
function initializeDataMaps() {
    dmZoom = systemSettings.dataMaps.zoom

    travelWeatherMap = new mapboxgl.Map({
    container: 'travel-weather-map',
    style: mapStyle,
    center: [-97.5, 39.4],
    zoom: 3.55,
    trackResize: false,
    projection: {
      name: 'lambertConformalConic',
      center: [-100, 45],
      parallels: [30, 30]
    },
  });
  travelWeatherMap.on('load', function () {
    travelWeatherMap.setLayoutProperty('background', 'visibility', 'visible');//ocean
    travelWeatherMap.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
    travelWeatherMap.setLayoutProperty('hawaii regional', 'visibility', 'visible');//hawaii lambert
    travelWeatherMap.setLayoutProperty('alaska', 'visibility', 'visible');//alaska
    travelWeatherMap.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
    travelWeatherMap.setLayoutProperty('conus sat', 'visibility', 'visible');//conus lambert
    travelWeatherMap.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'none');//county lines
    travelWeatherMap.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'visible');//state lines
    travelWeatherMap.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'visible');//coastlines
    travelWeatherMap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
    travelWeatherMap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'none');//gray roads
    travelWeatherMap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
    travelWeatherMap.setLayoutProperty('place-label', 'visibility', 'none');
    travelWeatherMap.setLayoutProperty('place-label copy', 'visibility', 'none');
    travelWeatherMap.setLayoutProperty('airport-label', 'visibility', 'none');
    travelWeatherMap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
    travelWeatherMap.setLayoutProperty('country-boundaries', 'visibility', 'visible');

    travelWeatherMap.setPaintProperty('cb-2019-us-state-20m-nocoast-7m1rrd', "line-width", 5.5)
    travelWeatherMap.setPaintProperty('i2-coastlines-conus-ak-hi-06wtga', "line-width", 4)
    travelWeatherMap.setPaintProperty('country-boundaries', "line-width", 4)
  });

  golfIndexMap = new mapboxgl.Map({
    container: 'golf-index-map',
    style: mapStyle,
    center: [systemSettings.dataMaps.lat, systemSettings.dataMaps.lon],
    zoom: dmZoom,
    trackResize: false,
    projection: {
      name: 'lambertConformalConic',
      center: [-100, 45],
      parallels: [30, 30]
    },
  });
  golfIndexMap.on('load', function () {
    golfIndexMap.setLayoutProperty('background', 'visibility', 'visible');//ocean
    golfIndexMap.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
    golfIndexMap.setLayoutProperty('hawaii regional', 'visibility', 'visible');//hawaii lambert
    golfIndexMap.setLayoutProperty('alaska', 'visibility', 'visible');//alaska
    golfIndexMap.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
    golfIndexMap.setLayoutProperty('conus sat', 'visibility', 'visible');//conus lambert
    golfIndexMap.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'none');//county lines
    golfIndexMap.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'visible');//state lines
    golfIndexMap.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'visible');//coastlines
    golfIndexMap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
    golfIndexMap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'none');//gray roads
    golfIndexMap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
    golfIndexMap.setLayoutProperty('place-label', 'visibility', 'none');
    golfIndexMap.setLayoutProperty('place-label copy', 'visibility', 'none');
    golfIndexMap.setLayoutProperty('airport-label', 'visibility', 'none');
    golfIndexMap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
    golfIndexMap.setLayoutProperty('country-boundaries', 'visibility', 'visible');

    golfIndexMap.setPaintProperty('i2-coastlines-conus-ak-hi-06wtga', "line-width", 4)
    golfIndexMap.setPaintProperty('country-boundaries', "line-width", 4)
  });

  estimatedPrecipMap = new mapboxgl.Map({
    container: 'estimated-precip-map',
    style: mapStyle,
    center: [systemSettings.dataMaps.lat, systemSettings.dataMaps.lon],
    zoom: dmZoom,
    trackResize: false,
    projection: {
      name: 'lambertConformalConic',
      center: [-100, 45],
      parallels: [30, 30]
    },
  });
  estimatedPrecipMap.on('load', function () {
    estimatedPrecipMap.setLayoutProperty('background', 'visibility', 'visible');//ocean
    estimatedPrecipMap.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
    estimatedPrecipMap.setLayoutProperty('hawaii regional', 'visibility', 'visible');//hawaii lambert
    estimatedPrecipMap.setLayoutProperty('alaska', 'visibility', 'visible');//alaska
    estimatedPrecipMap.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
    estimatedPrecipMap.setLayoutProperty('conus sat', 'visibility', 'visible');//conus lambert
    estimatedPrecipMap.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'none');//county lines
    estimatedPrecipMap.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'visible');//state lines
    estimatedPrecipMap.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'visible');//coastlines
    estimatedPrecipMap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
    estimatedPrecipMap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'none');//gray roads
    estimatedPrecipMap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
    estimatedPrecipMap.setLayoutProperty('place-label', 'visibility', 'none');
    estimatedPrecipMap.setLayoutProperty('place-label copy', 'visibility', 'none');
    estimatedPrecipMap.setLayoutProperty('airport-label', 'visibility', 'none');
    estimatedPrecipMap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
    estimatedPrecipMap.setLayoutProperty('country-boundaries', 'visibility', 'visible');

    estimatedPrecipMap.setPaintProperty('i2-coastlines-conus-ak-hi-06wtga', "line-width", 4)
    estimatedPrecipMap.setPaintProperty('country-boundaries', "line-width", 4)
  });
}

var travelTimestamp, cachedtravelTimestamp, travelFTimestamp;
async function getTravelWeatherMap() {
    try {
        //add latest layer to map
        weatherData.travelMapUnavailable = false
        const response = await fetch(
            `https://api.weather.com/v3/TileServer/series/productSet?apiKey=${api_key}&filter=sensibleWeather12hrFcst`
        );
        const data = await response.json();
        console.log(data);
        travelTimestamp = data.seriesInfo.sensibleWeather12hrFcst.series[0].ts;
        travelFTimestamp = data.seriesInfo.sensibleWeather12hrFcst.series[0].fts[data.seriesInfo.sensibleWeather12hrFcst.series[0].fts.length - 1];
        console.log(travelTimestamp)
        if(!travelWeatherMap.getLayer(`travel_${travelTimestamp}`)){
            if(cachedtravelTimestamp != travelTimestamp){
                if(travelWeatherMap.getLayer(`travel_${cachedtravelTimestamp}`)){
                    travelWeatherMap.removeLayer(`travel_${cachedtravelTimestamp}`);
                } 
            }
            cachedtravelTimestamp = travelTimestamp;
            travelWeatherMap.addLayer({
                id: `travel_${travelTimestamp}`,
                type: "raster",
                source: {
                    type: "raster",
                    tiles: [
                        `https://api.weather.com/v3/TileServer/tile/sensibleWeather12hrFcst?ts=${travelTimestamp}&fts=${travelFTimestamp}&xyz={x}:{y}:{z}&apiKey=${api_key}`,
                    ],
                    tileSize: 512,
                    minZoom: 5,
                    maxZoom: 13
                },
                layout: { 'visibility': "visible" },
                paint: {
                    "raster-opacity": 1,
                    "raster-fade-duration": 0,
                    "raster-brightness-max": 0.9,
                },
            })
        }
    } catch (error) {
        //clear layers on map
        weatherData.travelMapUnavailable = true
        console.warn(error);
    }
}
/**
 *     async function gardenMap(){
        
    }
 */

function getGolfIndexMap() {
    try {
        //add latest layer to map
        weatherData.golfIndexUnavailable = false
    } catch (error) {
        //clear layers on map
        weatherData.golfIndexUnavailable = true
    }
}

function getEstimatedPrecipMap() {
    try {
        //add latest layer to map
        weatherData.estimatedPrecipMapUnavailable = false
    } catch (error) {
        //clear layers on map
        weatherData.estimatedPrecipMapUnavailable = true
    }
}