import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { prisma } from '@/prisma';

export default function BasicCard({ goal, author, description, textList }: Readonly<{ goal: string, author: string, description: string, textList: string[] }>) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    私の2025年の目標・やりたいことは
                </Typography>
                <Typography variant="h5" component="div">
                    {goal}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>by {author}</Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="error" onClick={onClickDelete}>
                    削除する
                </Button>
            </CardActions>
        </Card>
    );
}

const onClickDelete = () => {
    prisma.ambition.delete({
        where: {
            id: 1 //TODO:idを指定
        }
    });
}