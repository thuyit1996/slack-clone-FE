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
  const [isAllowGeo, setisAllowGeo] = useState(false)
  const [hoveringMarker, sethoveringMarker] = useState<any>(null)
  const [selectedMarker, setselectedMarker] = useState<any>(null)
  const [infoWindowByMarker, setinfoWindowByMarker] = useState<any>({
    isSelected: false,
    isShow: false,
    Lat: null,
    Long: null,
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log('IN');
        
        setisAllowGeo(true)
      },
      function (error) {
        console.log('OUT');
        setisAllowGeo(false)
      }
    );

  }, [navigator.geolocation])

  const handleClick = ({ index, Lat, Long }) => {
    setselectedMarker(index)
    sethoveringMarker(index)
    setinfoWindowByMarker({
      ...infoWindowByMarker,
      Lat, Long,
      isShow: true,
      isSelected: true
    })
    setmapConfig({ center: { lng: Long, lat: Lat }, zoom: 10 })
  }

  const handleMarkerHover = ({ index, Lat, Long }) => {
    sethoveringMarker(index)
    setselectedMarker(null)
    setinfoWindowByMarker({
      ...infoWindowByMarker,
      Lat, Long,
      isShow: true,
      isSelected: false
    })
  }

  const handleMarkerHoverOut = ({ index, Lat, Long }) => {
    sethoveringMarker(null)
    setselectedMarker(null)
    setinfoWindowByMarker({
      ...infoWindowByMarker,
      isShow: false,
      isSelected: false
    })
  }

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
            onMouseover={() => handleMarkerHover({ index: itemIdx, Lat, Long })}
            onMouseout={() => handleMarkerHoverOut({ index: itemIdx, Lat, Long })}
            onClick={() => handleClick({ index: itemIdx, Lat, Long })}
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
          onMouseover={() => handleMarkerHover({ index: itemIdx, Lat, Long })}
          onMouseout={() => handleMarkerHoverOut({ index: itemIdx, Lat, Long })}
          onClick={() => handleClick({ index: itemIdx, Lat, Long })}
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
          onClick={() => handleClick({ index, Lat, Long })}
          onMouseOver={() => handleMarkerHover({ index, Lat, Long })}
          onMouseOut={() => handleMarkerHoverOut({ index, Lat, Long })}
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
      <div style={{ background: '#444', height: '500px', position: 'relative' }}>
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
          {isAllowGeo && <GeolocationControl />}
          {listMarker}
          {infoWindow}
        </AsyncMap>
        {!isAllowGeo && <div
          style={{
            position: "absolute",
            width: 33,
            height: 32,
            background: 'rgb(243, 241, 236)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 30,
            left: 11,
            padding: 5
          }}
          onClick={() => alert('Need to allow get geo?')}>
          <img
            src="http://api.map.baidu.com/images/geolocation-control/mobile/default-40x40.png"
            alt=""
            style={{ width: '100%', height: '100%' }}
          />
        </div>}
      </div>
    </div >
  )
}
