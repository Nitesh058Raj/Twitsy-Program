import React from 'react';
import { TextField, Typography, styled } from '@mui/material';
import AccountSubmitButton from './AccountSubmitButton';

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
    return (
        <form>
            <MyTextField
                autoComplete='off' type='email' required
                sx={{ width: '90%', mb: 2.1, mt: 10 }}
                label="Email"
                onChange={() => {}}
            />
            <MyTextField
                type="password" autoComplete='off' required
                sx={{ width: '90%', mb: 2.1 }}
                label="Password"
                onChange={() => {}}
            />
            <Typography sx={{ color: '#f1f1f1' }}>Forgot password?</Typography>
            <AccountSubmitButton btnTitle="Log in" />
        </form>
    );
};

export default LogInAccount;
