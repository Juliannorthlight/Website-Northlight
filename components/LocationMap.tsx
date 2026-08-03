"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 33 Glasshouse Street, London W1B 5DG
const LAT = 51.5105108;
const LON = -0.1374362;

// Clean, light "Positron" basemap from CARTO. Tile requests only — no tracking cookies.
export default function LocationMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [LAT, LON],
      zoom: 16,
      scrollWheelZoom: false, // don't hijack page scroll
    });
    mapRef.current = map;
    map.attributionControl.setPrefix(false); // remove the "Leaflet" credit (not required)

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 20,
    }).addTo(map);

    L.circleMarker([LAT, LON], {
      radius: 9,
      color: "#0B1B2E",
      weight: 2,
      fillColor: "#3F6C94",
      fillOpacity: 1,
    })
      .addTo(map)
      .bindPopup("Northlight Group<br>33 Glasshouse Street, W1B 5DG");

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <>
      <style>{`
        .leaflet-control-attribution {
          font-size: 8px !important;
          line-height: 1.4 !important;
          padding: 0 4px !important;
          background: rgba(255,255,255,0.55) !important;
          color: #9aa4ae !important;
        }
        .leaflet-control-attribution a { color: #9aa4ae !important; text-decoration: none !important; }
        .leaflet-tile-pane { filter: grayscale(1); }
      `}</style>
      <div
        ref={containerRef}
        role="img"
        aria-label="Map showing Northlight Group at 33 Glasshouse Street, London"
        className="h-full min-h-[300px] w-full"
      />
    </>
  );
}
