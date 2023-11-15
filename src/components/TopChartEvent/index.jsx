import { Stack, Box, Typography, Paper } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Loop_Card } from './index_card';

function Card({ text1 ,text2 , num }) {
    return (
        <Box  className="hide-scroll"  sx={{ width: '100%', height: '100%' ,margin:'5px', overflow:'auto'}}>    
        <Stack direction="row" spacing={2}>
            <Loop_Card num = "1"  text1 = "bbb" text2 = "ccc" 
                        img = "https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/738x416.webp"/>
            <Loop_Card num = "1"  text1 = "bbb" text2 = "ccc" 
                        img = "https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/738x416.webp"/>
            <Loop_Card num = "1"  text1 = "bbb" text2 = "ccc" 
                        img = "https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/738x416.webp"/>
            <Loop_Card num = "1"  text1 = "bbb" text2 = "ccc" 
                        img = "https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/738x416.webp"/>
            <Loop_Card num = "1"  text1 = "bbb" text2 = "ccc" 
                        img = "https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/738x416.webp"/>
            <Loop_Card num = "1"  text1 = "bbb" text2 = "ccc" 
                        img = "https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/738x416.webp"/>
            <Loop_Card num = "1"  text1 = "bbb" text2 = "ccc" 
                        img = "https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/738x416.webp"/>
            <Loop_Card num = "1"  text1 = "bbb" text2 = "ccc" 
                        img = "https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/738x416.webp"/>
        </Stack>
        </Box>
    );
}

function Card_final({ img }) {
    return (
        <>
            <Card/>
        </>
    );
}

export default function TopChartEvent() {
// 替换为实际的图片路径

    return (
        <Box sx = {{backgroundColor : "gray" , color : "white" , height:"350px"}}>
            <Stack direction="column" spacing={2}>
                <Typography variant="h4">
                    Top Chart TV Shows <ArrowForwardIosIcon />
                </Typography>
                <Card_final/>
            </Stack>
        </Box>
    );
}
