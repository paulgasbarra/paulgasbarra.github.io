const convertToGeoJSON = (data, icons) => {
    let parsed = {
      "type": "FeatureCollection",
      "features":[]
    };

    data.forEach(datum => {
      let geoJSON = 
        {
          "id": datum['Broadsign Display Unit ID'],
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              datum.Long,
              datum.Lat,
            ]
          },
          "properties": {
            "name": datum.Name,
            "intersectionID": datum['Intersection Internal ID'],
          }
        };
        parsed.features.push(geoJSON)
    })

    return parsed;
  }
