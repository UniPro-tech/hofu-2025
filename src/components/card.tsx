import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard(text2: string, text3: string) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    今年の抱負は、
                </Typography>
                <Typography variant="h5" component="div">
                    {text2}
                </Typography>
                <Typography variant="body2">
                    by {text3}
                </Typography>
            </CardContent>
        </Card>
    );
}