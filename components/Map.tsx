"use client";
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const defaultLocation = { lat: 42.6977, lng: 23.3219 };

export default function GoogleMap() {
    const [currLocaiton, setCurrLocation] = useState(defaultLocation);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
    //   const { Marker } = await loader.importLibrary("marker");

      if('geolocation' in navigator) {
        // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            marker.setPosition({ lat: latitude, lng: longitude});
            map.setCenter({ lat: latitude, lng: longitude });
            setCurrLocation({ lat: latitude, lng: longitude });
        })
    }

      const mapOptions: google.maps.MapOptions = {
        center: currLocaiton,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new google.maps.Marker({
        position: currLocaiton,
        map,
        title: "Hello World!",
      });

      google.maps.event.addListener(map, "click", function (event) {
        placeMarker(event.latLng);
      });

      function placeMarker(location) {
        marker.setPosition(location);

        // const newLat = marker.getPosition()?.lat();
        // const newLng = marker.getPosition()?.lng();
      }
    };

    initMap();
  }, []);

  return (
    <div className="sticky top-0 self-start">
      <div className="h-96 w-full " ref={mapRef}></div>
    </div>
  );
}
