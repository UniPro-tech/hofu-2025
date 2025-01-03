import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { auth } from '@/auth';
import { prisma } from '@/prisma';

export default function FormPropsTextFields() {
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                id="filled-required"
                label="抱負・目標"
                variant="filled"
            />
            <TextField
                id="filled-required"
                label="短い説明"
                variant="filled"
            />
            <Button variant="contained" color="primary" onClick={onClickCreate}>
                作成
            </Button>
        </Box>
    );
}

const onClickCreate = async () => {
    const session = await auth();
    //TODO: フォームの値を取得
    prisma.ambition.create({
        data: {
            userEmail: session?.user?.email,
            title: '抱負・目標',
            description: '短い説明'
        }
    });
}