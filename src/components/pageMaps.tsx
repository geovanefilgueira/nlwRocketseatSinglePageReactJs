import React from 'react'
import iconLocation from'../images/icon-location.svg'
import {Map,TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
//npm i @types/react-leaflet nn funfo
//npm install leaflet prop-types react react-dom react-leaflet
export default()=>{
    return(
       <div className="lay-row ">
            <div className="w25 h100 bk-linear01 lay-column lay-align-cent lay-center">
                <div className="w70 h90 lay-column lay-space-b lay-align-start">
                    <img src={iconLocation} alt="icone de localização"></img>
                    <label className="title-model-big">Escolha um orfanato no mapa</label>
                    <label className="title-model-smile">Muitas crianças estão esperando a sua visita :)</label>
                    <div className="lay-column">
                        <label className="title-model-sub">Rio do Sul</label>
                        <label className="title-model-sub">Santa Catarina</label>
                    </div>

                </div>
               
            </div>
             {/* Separação entre componentes*/}
             <div className="w90">
                <Map
                    center={[-27.2092052,-49.640192]}
                    zoom={15}
                    style={{width:'100%', height:'100%'}}
                >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </Map>
             </div>
        </div>
    )
}