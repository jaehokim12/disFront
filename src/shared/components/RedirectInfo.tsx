import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const RedirectText = styled('span')({
    color: '#00AFF4',
    fontWeight: 500,
    cursor: 'pointer',
});
interface Iprops {
    text: string;
    redirectText: string;
    additionalStyles: React.CSSProperties | undefined;
    redirectHandler: any;
}
const RedirectInfo = ({ text, redirectText, additionalStyles, redirectHandler }: Iprops) => {
    return (
        <Typography sx={{ color: '#72767d' }} style={additionalStyles ? additionalStyles : {}} variant="subtitle2">
            {text}
            <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
        </Typography>
    );
};

export default RedirectInfo;
