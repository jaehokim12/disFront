import React from 'react';
import Button from '@mui/material/Button';

interface IProps {
    additionalStyles?: React.CSSProperties;
    label?: string;
    disabled?: boolean | undefined;
    onClick?: () => void;
}
const CustomPrimaryButton = ({ label, additionalStyles, disabled, onClick }: IProps) => {
    return (
        <Button
            variant="contained"
            sx={{
                bgcolor: '#5865F2',
                color: 'white',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 500,
                width: '100%',
                height: '40px',
            }}
            style={additionalStyles ? additionalStyles : {}}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};

export default CustomPrimaryButton;
