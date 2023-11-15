import { Stack, Typography } from "@mui/material"
import {Box} from "@mui/material"
import Paper from '@mui/material/Paper';

export default function PostEventForum(){
    return (
    <>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' , 
                    height: '300px', backgroundColor:'black', margin:'10px', border:'5px',
                    overflow:'auto'}}>
            <Stack direction={'column'} spacing={2}>
                <Title/>
                <Stack direction="row" spacing={2}>
                    <Picture imgsrc="src\assets\react.svg"/>
                    <Picture imgsrc="src\assets\react.svg"/>
                    <Picture imgsrc="src\assets\react.svg"/>
                    <Picture imgsrc="src\assets\react.svg"/>
                    <Picture imgsrc="src\assets\react.svg"/>
                    <Picture imgsrc="src\assets\react.svg"/>
                    <Picture imgsrc="src\assets\react.svg"/>
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
            <Box sx={{ width: '100%', height: '100%', backgroundColor:'white', borderRadius:"15%"}}>
                    <img src={imgsrc} height={'150px'}/>
            </Box>
        </>
    )
}
