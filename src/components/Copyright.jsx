import * as React from 'react';
import { Typography } from '@mui/material/';

function Copyright(props) {

        return (
            <>
            <Typography variant="caption" display="block" align="center" gutterBottom>
            Lultr.com &copy; 2022 <a href="/about">David Finster</a>.<br />
            Jokes ae the property of their respective authors.<br /> 
            We provide credit when known, and will remove them if requested.
            <br />
            <a href="/about">About</a> &bull; <a href="/privacy">Privacy</a> &bull; <a href="/terms">Terms</a>
            </Typography>
            </>
        ); 
}

export default Copyright;
