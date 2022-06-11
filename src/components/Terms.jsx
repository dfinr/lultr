import * as React from 'react';
import { Button, CssBaseline, Typography, Box } from '@mui/material/';
import { FaHome, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Copyright from "./Copyright";


function Terms() {

    return (
        <>
            <CssBaseline />
            <Box sx={{ width: '90%', maxWidth: 800, mt: 2, display: 'flex', flexDirection: 'column', margin: 'auto' }} >
            <Box sx={{ display: 'flex', margin: '1rem auto 1rem', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }} >
                <Button sx={{ margin: '0px 6px 0px 6px' }} variant="outlined" startIcon={<FaHome />} 
                    href="/">
                        Home
                </Button>
                <Button sx={{ margin: '0px 6px 0px 6px' }} variant="outlined" startIcon={<FaEnvelope />} href="mailto:david@fortc.com">
                        Email David
                </Button>
            </Box>
            <Box sx={{ display: 'flex', margin: '2rem auto 4rem', justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap' }} >
                <Typography paragraph variant="h1" align="center">
                    Terms of Service
                </Typography>
                <Typography paragraph sx={{ textAlign: 'left' }} variant="body2" gutterBottom>
                    You may use this site to view, email, tweet, and copy jokes. We provide links to credit when known. It's polite to credit the original author when you copy jokes from this site.
                </Typography>
                </Box>
                <Copyright />
            </Box>
        </>
    );
}

export default Terms;
