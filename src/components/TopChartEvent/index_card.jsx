import { Stack, Box, Typography, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Card_text({num,text1 , text2}) {
    return (
        <Stack direction="row" spacing={2}>
            <Typography variant="h4">{num}</Typography> 
            <Stack direction="column" spacing={2}>
                <Typography variant="body1">{text1}</Typography>
                <Typography variant="body1">{text2}</Typography>
            </Stack>
        </Stack>
    );
}

function Card_image({img}){
    return (
        <Paper sx={{position: "relative" , backgroundColor : "transparent"}}>
            <img src={img}
                alt="Not"
                width="300px"
                height="150px"
                style={{ borderRadius: '30px' }}
            />
            <IconButton aria-label="delete"
            sx={{position: "absolute", right : "10px" , bottom : "10px"}}>
                <MoreHorizIcon/>
            </IconButton>
        </Paper>
    )
}

export function Loop_Card({img,num,text1 ,text2}) {
    
    return (
        <Paper sx={{
            width: "300px",
            height: "250px",
            backgroundColor: 'gray'
        }}> 
            <Stack direction="column" spacing={2}> 
                <Card_image img = {img}/>
                <Card_text num = {num} text1 = {text1} text2 = {text2}  />
            </Stack>
        </Paper>
    );
}