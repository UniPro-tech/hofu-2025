import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { auth } from '@/auth';
import { prisma } from '@/prisma';

export default function FormPropsTextFields() {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const onClickCreate = async () => {
        try {
            const session = await auth();

            if (!session?.user) {
                alert('ログインしてください。');
                return;
            }

            await prisma.ambition.create({
                data: {
                    userEmail: session.user.email || '',
                    userName: session.user.name || '',
                    title,
                    description,
                },
            });

            alert('作成が完了しました！');
        } catch (error) {
            console.error('データ作成中にエラーが発生しました:', error);
            alert('データ作成中にエラーが発生しました。');
        }
    };

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                id="title"
                label="抱負・目標"
                variant="filled"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                id="description"
                label="短い説明"
                variant="filled"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={onClickCreate}>
                作成
            </Button>
        </Box>
    );
}