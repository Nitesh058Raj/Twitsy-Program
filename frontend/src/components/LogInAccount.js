import React, { useEffect, useState } from 'react';
import { Alert, Snackbar, TextField, Typography, styled } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AccountSubmitButton from './AccountSubmitButton';
import setUser from "../redux/currentUser/currentUserAction";
import axios from "axios";
import env from "react-dotenv";

const MyTextField = styled(TextField)({
    '& label': {
        color: '#d1d1d1',
        fontSize: 24,
    },
    '& input': {
        color: 'white',
        fontSize: 24,
    },
    '& label.Mui-focused': {
        color: 'white',
    },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            fontSize: 24,
            borderColor: '#d1d1d1',
        },
        '&:hover fieldset': {
            borderColor: '#f1f1f1',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#5ef9e2',
        },
    },
});

const LogInAccount = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [responseMsg, setResponseMsg] = useState("");
    const [resCode, setResCode] = useState();
    const [dynamicSeverity, setDynamicSeverity] = useState("success");
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const riseSnackbar = () => setOpen(true);
    const downSnackbar = () => setOpen(false);

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log("Checking Local storage !")

        if (userInfo) {
            setTimeout(() => {
                navigate("/app");
            }, 2000);
            console.log("Login Success", userInfo.name);
            dispatch(setUser([
                userInfo.name,
                userInfo.email
            ]))
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resCode === 200])

    const onChangeInputBox = (data, key) => {
        if (key === "email") setUserEmail(data.target.value);
        else if (key === "password") setUserPassword(data.target.value);
    }

    const onSubmited = (e) => {
        e.preventDefault();
        console.log(`LoginPage: Submit pressed. ${env.HOST_NAME}`);
        const HOST = env.HOST_NAME || "localhost";

        axios.post(`http://${HOST}:5000/login`, {
            useremail: userEmail,
            password: userPassword
        }).then((r) => {
            setResponseMsg(r.data.message);
            setResCode(r.data.status);
            if (r.data.status === 404) {
                setDynamicSeverity("error");
                riseSnackbar()
                return;
            }
            else if (r.data.status === 403) {
                setDynamicSeverity("warning")
                riseSnackbar()
                return;
            }
            else if (r.data.status === 200) setDynamicSeverity("success");
            riseSnackbar();
            localStorage.setItem("userInfo", JSON.stringify(r.data.user_details[0]));
        }).catch((err) => {
            setResponseMsg(err.message);
            setDynamicSeverity("error");
            riseSnackbar();
        });
    }

    return (
        <form onSubmit={onSubmited}>
            <MyTextField
                autoComplete='off' type='email' required
                sx={{ width: '90%', mb: 2.1, mt: 10 }}
                label="Email"
                onChange={(e) => onChangeInputBox(e, "email")}
            />
            <MyTextField
                type="password" autoComplete='off' required
                sx={{ width: '90%', mb: 2.1 }}
                label="Password"
                onChange={(e) => onChangeInputBox(e, "password")}
            />
            <Typography sx={{ color: '#f1f1f1' }}>Forgot password?</Typography>
            <AccountSubmitButton btnTitle="Log in" />
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={downSnackbar}
                sx={{ transform: 'scale(1.4)', ml: 4 }}
            >
                <Alert severity={dynamicSeverity} onClose={downSnackbar} sx={{ width: '100%' }}>
                    {responseMsg}
                </Alert>
            </Snackbar>
        </form>
    );
};

export default LogInAccount;
