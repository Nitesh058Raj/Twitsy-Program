import { Button } from '@mui/material';
import React from 'react';
import { COLORS } from '../constants/colors';

const AccountSubmitButton = (props) => {
    return (
        <Button
            size='large'
            type='submit'
            disableElevation
            variant='contained'
            sx={{
                mt: 3,
                textTransform: 'none',
                width: '90%',
                fontSize: 24,
                border: '1px solid #00a88c',
                backgroundColor: '#5ef9e2',
                '&:hover': { backgroundColor: COLORS.primary_hover }
            }}
        >
            {props.btnTitle}
        </Button>
    );
};

export default AccountSubmitButton;
