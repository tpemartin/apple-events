import EventHeroTitle from "./EventHeroTitle";
import { Box, Stack } from "@mui/material"
import Image from 'mui-image'
import EventHeroDots from "./EventHeroDots";


export default function EventHero() {
    return (
        <Box sx={{ height: "710px", padding: "0px", position: "absolute" }}>
            <EventHeroImage />
            <Stack sx={{ position: "absolute", padding: "0px", top: "40px", left: "40px", bottom: "40px" }}>
                <img src="https://is1-ssl.mzstatic.com/image/thumb/oEYYIjc6-3zT0jgpyUiIaw/1x40at.png" height="40px" width="106px" />
                <EventHeroTitle />
            </Stack>
            <EventHeroDots/>
        </Box>
    )
}

function EventHeroImage() {
    return (
        <Image
            src="https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/9f/78/dd/9f78dd17-9a4d-661d-a4ee-e77e6301873a/ab498e17-402b-40f3-8066-c3cec3732a5f.png/1679x945sr.jpg"
            height="100%"
            width="100%"
            fit="cover"

        />
    )
}