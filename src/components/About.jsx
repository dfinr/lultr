import * as React from 'react';
import { Button, CssBaseline, Typography, Box } from '@mui/material/';
import { FaHome, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Copyright from "./Copyright";

function About() {

    return (
        <>
            <CssBaseline />
            <Box sx={{ width: '90%', maxWidth: 800, mt: 2, display: 'flex', flexDirection: 'column', margin: 'auto' }} >
            <Box sx={{ display: 'flex', margin: '1rem auto 1rem', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }} >
                <Button sx={{ margin: '0px 6px 0px 6px' }} variant="outlined" startIcon={<FaHome />} 
                    href="/">
                        Home
                </Button>
                <Button sx={{ margin: '0px 6px 0px 6px' }} variant="outlined" startIcon={<FaTwitter />} href="https://twitter.com/LultrCom">
                        @LultrCom
                </Button>
                <Button sx={{ margin: '0px 6px 0px 6px' }} variant="outlined" startIcon={<FaEnvelope />} href="mailto:lultr@pm.me">
                        lultr@pm.me
                </Button>
            </Box>

            <Box sx={{ display: 'flex', margin: '2rem auto 4rem', justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap' }} >
                <Typography paragraph variant="h1" align="center">
                    About
                </Typography>
                <Typography paragraph sx={{ textAlign: 'left' }} variant="body2" gutterBottom>
                    Lultr.com curates jokes that are 250 characters or less. All jokes are the property of their respective owners. We provide links to credit when known, and will remove them if requested by the author.
                </Typography>
                </Box>
                <Copyright />
            </Box>
        </>
    );
}

export default About;
