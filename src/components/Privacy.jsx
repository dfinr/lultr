import * as React from 'react';
import { Button, CssBaseline, Typography, Box } from '@mui/material/';
import { FaHome, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Copyright from "./Copyright";

function Privacy() {

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
                    Privacy Policy
                </Typography>
                <Typography paragraph sx={{ textAlign: 'center' }} variant="body2" gutterBottom>
                    We don't use cookies.<br />
                    We don't collect your information.<br />
                    We don't store your information.<br />
                    We don't sell your information.<br />
                </Typography>
                </Box>
                <Copyright />
            </Box>
        </>
    );
}

export default Privacy;
