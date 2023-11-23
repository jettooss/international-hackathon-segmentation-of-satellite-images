import React, {useEffect} from 'react';
import styles from './mapgl.module.css';
import {load} from '@2gis/mapgl';
import { Clusterer } from '@2gis/mapgl-clusterer';
import { Directions } from '@2gis/mapgl-directions';
import {MapWrapper} from "../MapWrapper";

export const MAP_CENTER = [37.6156, 55.7522];

export function Mapgl() {
  useEffect(() => {
    let map: mapgl.Map | undefined = undefined;
    let directions: Directions | undefined = undefined;
    let clusterer: Clusterer | undefined = undefined;

    load().then((mapgl) => {
      map = new mapgl.Map('map-container', {
        center: MAP_CENTER,
        zoom: 11,
        key: 'a1893935-6834-4445-b97a-3405fb426c5b',
        style: 'e05ac437-fcc2-4845-ad74-b1de9ce07555'
      });

      clusterer = new Clusterer(map, {
        radius: 60,
      });

      const markers = [
        { coordinates: [39.190289, 44.878414] },
        { coordinates: [40.1006606, 44.6098268] },
        { coordinates: [51.9581028, 85.9603235] },
        { coordinates: [82.7793606, 52.4922513] },
        { coordinates: [83.7798064, 53.3479968] },
        { coordinates: [39.1354738, 44.6344864] },
        { coordinates: [37.3163282, 44.8950433] },
        { coordinates: [38.9759647, 45.0401604] },
        { coordinates: [37.7686135, 44.7235026] },
        { coordinates: [38.1259774, 45.2603626] }
      ];
      clusterer.load(markers);

      directions = new Directions(map, {
        directionsApiKey: 'rujany4131',
      });

      directions.carRoute({
        points: [
          [39.190289, 44.878414],
          [40.1006606, 44.6098268],
        ],
      });
    });

    return () => {
      directions && directions.clear();
      clusterer && clusterer.destroy();
      map && map.destroy();
    };
  }, []);

  return (
    <MapWrapper />
  );
}
