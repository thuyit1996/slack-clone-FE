import PostComponent from '@/presentation/components/PostComponent/PostComponent'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  BaiduMap,
  Label,
  Marker,
  InfoWindow,
  ScaleControl,
  MapTypeControl,
  OverviewMapControl,
  GeolocationControl,
  NavigationControl,
  asyncWrapper
} from 'react-baidu-maps';

const AsyncMap = asyncWrapper(BaiduMap);

const markers = [
  {
    Lat: 39.915,
    Long: 116.404
  },
  {
    Lat: 39.500,
    Long: 116.400
  },
  {
    Lat: 38.625,
    Long: 116.401
  },
  {
    Lat: 39.930,
    Long: 116.604
  },
]

export default function HomePageContent() {
  let Bmap: any = useRef(null)

  const [mapConfig, setmapConfig] = useState({})
  const [hoveringMarker, sethoveringMarker] = useState<any>(null)
  const [selectedMarker, setselectedMarker] = useState<any>(null)
  const [infoWindowByMarker, setinfoWindowByMarker] = useState<any>({
    isSelected: false,
    isShow: false,
    Lat: null,
    Long: null,
  })


  const listMarker = useMemo(() => {
    return markers.map((item, itemIdx) => {
      const { Lat, Long } = item
      if (selectedMarker === itemIdx) {
        return (
          <Marker
            key={itemIdx}
            position={{ lng: Long, lat: Lat }}
            icon={{
              imageUrl: 'https://odiland.vn/wp-content/uploads/2018/09/location-icon-map-png-93d693c9-2482-44c1-9073-d95246ce6de3_iconmonstr-location-16-icon-300x300.png',
              size: { width: 50 * 1.5, height: 50 * 1.5 },
              imageSize: { width: 50 * 1.5, height: 50 * 1.5 },
            }}
            animation='drop'
          />
        )
      }
      if (!selectedMarker && itemIdx === hoveringMarker) {
        return (
          <Marker
            key={itemIdx}
            position={{ lng: Long, lat: Lat }}
            icon={{
              imageUrl: 'https://odiland.vn/wp-content/uploads/2018/09/location-icon-map-png-93d693c9-2482-44c1-9073-d95246ce6de3_iconmonstr-location-16-icon-300x300.png',
              size: { width: 50 * 1.5, height: 50 * 1.5 },
              imageSize: { width: 50 * 1.5, height: 50 * 1.5 },
            }}
            animation='drop'
            onMouseover={() => {
              sethoveringMarker(itemIdx)
              setselectedMarker(null)
              setinfoWindowByMarker({
                ...infoWindowByMarker,
                Lat, Long,
                isShow: true,
                isSelected: false
              })
            }}
            onMouseout={() => {
              sethoveringMarker(null)
              setselectedMarker(null)
              setinfoWindowByMarker({
                ...infoWindowByMarker,
                isShow: false,
                isSelected: false
              })
            }}
            onClick={() => {
              setselectedMarker(itemIdx)
              sethoveringMarker(null)
              setinfoWindowByMarker({
                ...infoWindowByMarker,
                Lat, Long,
                isShow: true,
                isSelected: true
              })
              setmapConfig({ center: { lng: Long, lat: Lat }, zoom: 10 })
            }}
          />
        )
      }
      return (
        <Marker
          key={itemIdx}
          position={{ lng: Long, lat: Lat }}
          icon={{
            imageUrl: 'https://odiland.vn/wp-content/uploads/2018/09/location-icon-map-png-93d693c9-2482-44c1-9073-d95246ce6de3_iconmonstr-location-16-icon-300x300.png',
            size: { width: 50, height: 50 },
            imageSize: { width: 50, height: 50 },
          }}
          animation='drop'
          onMouseover={() => {
            sethoveringMarker(itemIdx)
            setselectedMarker(null)
            setinfoWindowByMarker({
              ...infoWindowByMarker,
              Lat, Long,
              isShow: true,
              isSelected: false
            })
          }}
          onMouseout={() => {
            sethoveringMarker(null)
            setselectedMarker(null)
            setinfoWindowByMarker({
              ...infoWindowByMarker,
              isShow: false,
              isSelected: false
            })
          }}
          onClick={() => {
            setselectedMarker(itemIdx)
            sethoveringMarker(null)
            setinfoWindowByMarker({
              ...infoWindowByMarker,
              Lat, Long,
              isShow: true,
              isSelected: true
            })
            setmapConfig({ center: { lng: Long, lat: Lat }, zoom: 10 })
          }}
        />
      )
    })
  }, [markers, hoveringMarker])

  const listItem = useMemo(() => {
    return markers.map((item, index) => {
      const { Lat, Long } = item
      return (
        <div
          key={index}
          onClick={() => {
            setselectedMarker(index)
            sethoveringMarker(index)
            setinfoWindowByMarker({
              ...infoWindowByMarker,
              Lat, Long,
              isShow: true,
              isSelected: true
            })
            setmapConfig({ center: { lng: Long, lat: Lat }, zoom: 10 })
          }}
          onMouseOver={() => {
            sethoveringMarker(index)
            setinfoWindowByMarker({
              ...infoWindowByMarker,
              Lat, Long,
              isShow: true,
              isSelected: false
            })
          }}
          onMouseOut={() => {
            sethoveringMarker(null)
            setinfoWindowByMarker({
              ...infoWindowByMarker,
              isShow: false,
              isSelected: false
            })
          }}
        >{`item` + index}</div>
      )
    })
  }, [])

  const infoWindow = useMemo(() => {
    const { isShow, isSelected, Lat, Long } = infoWindowByMarker
    if (isShow && selectedMarker) {
      return <InfoWindow
        content="marker infoWindow"
        size={{ width: 50, height: 50 }}
        offset={{ width: 0, height: -20 }}
        position={{ lng: Long, lat: Lat }}
      />
    }
    if (isShow && !selectedMarker) {
      return <InfoWindow
        content="marker infoWindow"
        size={{ width: 50, height: 50 }}
        offset={{ width: 0, height: -20 }}
        position={{ lng: Long, lat: Lat }}
      />
    }
    return <InfoWindow
      content="marker infoWindow"
      size={{ width: 50, height: 50 }}
      offset={{ width: 0, height: -20 }}
    />
  }, [infoWindowByMarker, selectedMarker])

  return (
    <div className="home-page-content">

      {/* <PostComponent /> */}
      {listItem}
      <div style={{ background: '#444', height: '500px' }}>
        <AsyncMap
          mapUrl={`http://api.map.baidu.com/api?v=3.0&ak=${'GTrnXa5hwXGwgQnTBG28SHBubErMKm3f'}`}
          loadingElement={<div>Loading.....</div>}
          mapContainer={<div style={{ height: '100%' }} />}
          enableContinuousZoom
          enableScrollWheelZoom
          {...mapConfig}
        >
          <ScaleControl unit='imperial' />
          <MapTypeControl />
          <OverviewMapControl />
          <NavigationControl />
          <GeolocationControl
            onLocationSuccess={(e) => {
              console.log(e);
            }}
            onlocationError={(e) => {
              console.log(e, 'Error');
            }}
          />
          {listMarker}
          {infoWindow}
        </AsyncMap>
        <div onClick={() => {
          navigator.geolocation.getCurrentPosition(
            function (position) {
              console.log(position);
            },
            function (error) {
              console.error("Error Code = " + error.code + " - " + error.message);
            }
          );
        }}>Hello</div>
      </div>
    </div >
  )
}
