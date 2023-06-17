import React, { useState } from 'react';
import { styled, Button, Box, Dialog, DialogContent, DialogTitle, DialogActions, Divider, TextField } from "@mui/material";
import { COLORS } from "../constants/colors";
import { useSelector } from "react-redux";
import axios from "axios";
import env from 'react-dotenv';

const TweetButton = (props) => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState("");


    const currentUser = useSelector(
        (state) => state.userReducer.userInfo
    );

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => { setOpen(false); };

    const onChangeInputBox = (data) => {
        setContent(data.target.value);
    }

    const CustomTweetButton = styled(Button)(({ theme }) => ({
        fontSize: 25,
        textTransform: 'none',
        color: theme.palette.getContrastText(COLORS.primary),
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        padding: '5px 30px',
        '&:hover': {
            backgroundColor: COLORS.primary_hover,
        },
    }));

    const handleSubmit = (event) => {
        event.preventDefault();
        const HOST = env.REACT_APP_BE_HOST || "localhost";

        axios.post(`http://${HOST}:5000/dotweet`, {
            useremail: currentUser[1],
            content
        }).then((r) => {
            console.log(r.data.message);
            if ( r.data.status === 201 ) {
                console.log(r.data.message);
                handleClose();
            }
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CustomTweetButton
                variant="contained"
                onClick={handleClickOpen}
            >Tweet</CustomTweetButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle sx={{ fontSize: 30 }}>
                    Create Tweet
                </DialogTitle>
                <Divider />
                <form onSubmit={handleSubmit} >

                    <DialogContent>
                        <TextField
                            fullWidth
                            label="Tweet By"
                            name="tweetby"
                            type="text"
                            value={currentUser[0]}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Content"
                            name="content"
                            onChange={(e) => onChangeInputBox(e)}
                        />
                    </DialogContent>
                    <Divider />
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" disableElevation type="submit"
                            sx={{
                                color: COLORS.black, backgroundColor: COLORS.primary,
                                '&:hover': { backgroundColor: COLORS.primary_hover },
                            }}
                        >Tweet</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box>
    )
}

export default TweetButton;