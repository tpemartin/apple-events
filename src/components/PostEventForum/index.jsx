import { Stack, Typography } from "@mui/material"
import {Box} from "@mui/material"

export default function PostEventForum(){
    return (
    <>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' , height: '300px', backgroundColor:'black' }}>
            <Stack direction={'column'} spacing={2} sx={{overflow:'auto'}}>
                <Title/>
                <Stack direction="row" spacing={2} sx={{overflow:'auto'}}>
                    <Picture imgsrc="src\assets\react.svg"/>
                    <Picture imgsrc="src\assets\react.svg"/>
                    <Picture imgsrc="src\assets\react.svg"/>
                    <Picture imgsrc="src\assets\react.svg"/>
                </Stack>
            </Stack>
        </Box>
    </>
    )
}


function Title(){
    return (
    <>
        <Typography variant="h5" component="h1" gutterBottom color={'white'}>
            Watch, discuss, repeat
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom color={'white'}>
            Fire up your group
        </Typography>
    </>
    )

}

function Picture({imgsrc}){
    return (
        <> 
            <Box sx={{ width: '100%', height: '100%', backgroundColor:'white'}}>
                <img src={imgsrc} height={'150px'}/>
            </Box>
        </>
    )
}
