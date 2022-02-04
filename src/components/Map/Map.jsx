import React from "react";
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = () => {
    const classes = useStyles();
    // this means that the isMobile Variable is gonna be set to false if the width of the device is larger than 600px
    const isMobile = useMediaQuery('(min-width:600px)')
    
    const coordinates = { lat : 0, lon: 0};


    return( 
        <div>
            <div className={classes.mapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: ''}}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50,50,50,50]}
                    options={''}
                    onChange={''}
                    onChildClick={''}
                
                >

                </GoogleMapReact>

            </div>
        </div>
    )
}

export default Map