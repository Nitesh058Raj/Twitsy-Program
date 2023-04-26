import "../styles/GatewayPage.css";
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import LogInAccount from "./LogInAccount";
import CreateAccount from "./CreateAccount";

const GatewayPage = () => {
    const [onLoginPage, setPage] = useState(true);

    const HeaderContent = (props) => {
        return (
            <>
                <Typography sx={{ fontSize: 20, color: '#e1e1e1', textAlign: 'left' }}>{props.preTitle}</Typography>
                <Typography style={{ fontSize: 50, fontWeight: '600' }}>{props.mainTitle}</Typography>
                <Typography sx={{ fontSize: 22, color: '#f1f1f1' }}>
                    {props.subTitle}
                    <span onClick={() => setPage(!onLoginPage)} id="loginLink">{props.action}</span>
                </Typography>
            </>
        );
    };

    return (
        <Box id='BigBox'>
            <Box id='SubBox'>
                <div className='part'>
                    <div id="contentpart">
                        {onLoginPage ?
                            <>
                                <HeaderContent preTitle="Welcome Again !!" mainTitle="Login to account" subTitle="Not a member?" action="Sign up" />
                                <LogInAccount />
                            </>
                            :
                            <>
                                <HeaderContent preTitle="Start for free !!" mainTitle="Create new account" subTitle="Already a member?" action="Log in" />
                                <CreateAccount />
                            </>
                        }
                    </div>
                </div>
                <div className='part'>
                    {/* <img src={} alt="Application Image" /> */}
                </div>
            </Box>
        </Box>
    );
};

export default GatewayPage;
