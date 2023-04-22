import React from 'react';
import { TextField, styled } from "@mui/material";
import AccountSubmitButton from "./AccountSubmitButton";


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
    return (
        <form>
            <MyTextField
                autoComplete='off' type="name" sx={{ width: '90%', mb: 2.1, mt: 5 }}
                label="Username" required
                onChange={() => {}}
            />
            <MyTextField
                autoComplete='off' type='email' sx={{ width: '90%', mb: 2.1 }}
                label="Email" required
                onChange={() => {}}
            />
            <MyTextField
                autoComplete='off' type="password" sx={{ width: '90%', mb: 1.7 }}
                label="Set password" required
                onChange={() => {}}
            />
            <AccountSubmitButton btnTitle="Create Account" />
        </form>
    );
};

export default CreateAccount;
