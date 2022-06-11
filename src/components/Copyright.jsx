import * as React from 'react';
import { Typography } from '@mui/material/';

function Copyright(props) {

        return (
            <>
            <Typography variant="caption" display="block" align="center" gutterBottom>
            &copy; 2022 <a href="/about">Lultr.com</a>
            <br />
            <a href="/about">About</a> &bull; <a href="/privacy">Privacy</a> &bull; <a href="/terms">Terms</a>
            </Typography>
            </>
        ); 
}

export default Copyright;
