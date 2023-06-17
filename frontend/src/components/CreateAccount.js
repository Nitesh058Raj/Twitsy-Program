import React, { useState, useEffect } from 'react';
import { Alert, Snackbar, TextField, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import setUser from "../redux/currentUser/currentUserAction";
import AccountSubmitButton from "./AccountSubmitButton";
import axios from "axios";
import env from 'react-dotenv';

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

const CreateAccount = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [responseMsg, setResponseMsg] = useState("");
    const [dynamicSeverity, setDynamicSeverity] = useState("success");
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log("Checking Local storage.")

        if (userInfo) {
            setTimeout(() => {
                navigate("/app")
            }, 2000);
            console.log("Register success ",userInfo.name)
            dispatch(setUser([
                userInfo.name,
                userInfo.email,
            ]));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseMsg])

    const onChangeInputBox = (data, key) => {
        if (key === "name") setUserName(data.target.value);
        else if (key === "email") setUserEmail(data.target.value);
        else if (key === "password") setUserPassword(data.target.value);
    }

    const riseSnackbar = () => setOpen(true);
    const downSnackbar = () => setOpen(false);

    const onSubmited = async (e) => {
        e.preventDefault();
        console.log(`Sign up:: Request sent to: ${process.env.REACT_APP_BE_HOST}`);
        const HOST = process.env.REACT_APP_BE_HOST || "localhost";

        axios.post(`http://${HOST}:5000/register`, {
            username: userName,
            useremail: userEmail,
            password: userPassword
        }).then((r) => {
            setResponseMsg(r.data.message);
            if (r.data.status === 404) {
                setDynamicSeverity("error");
                riseSnackbar();
                return;
            } else if (r.data.status === 409 ) {
                setDynamicSeverity("warning");
                riseSnackbar();
                return;
            }
            else if (r.data.status === 201) {
                setDynamicSeverity("success")
                riseSnackbar();
                localStorage.setItem("userInfo", JSON.stringify(r.data.user_details));
                return;
            };
        }).catch((err) => {
            setResponseMsg(err.message);
            setDynamicSeverity("error");
            riseSnackbar();
        });
    }

    return (
        <form onSubmit={onSubmited} >
            <MyTextField
                autoComplete='off' type="name" sx={{ width: '90%', mb: 2.1, mt: 5 }}
                label="Username" required
                onChange={(e) => onChangeInputBox(e, "name")}
            />
            <MyTextField
                autoComplete='off' type='email' sx={{ width: '90%', mb: 2.1 }}
                label="Email" required
                onChange={(e) => onChangeInputBox(e, "email")}
            />
            <MyTextField
                autoComplete='off' type="password" sx={{ width: '90%', mb: 1.7 }}
                label="Set password" required
                onChange={(e) => onChangeInputBox(e, "password")}
            />
            <AccountSubmitButton btnTitle="Create Account" />
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

export default CreateAccount;
