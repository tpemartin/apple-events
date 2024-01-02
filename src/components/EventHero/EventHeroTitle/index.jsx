import { Box, Stack, Typography } from "@mui/material"

export default function EventHeroTitle() {
    return (
        <Box sx={{ width: "380px", height: "193px", position: "absolute", bottom: "0px" }}>
            <Stack direction="column" gap="3px">
                <Box sx={{  height: "60px" }}>
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/NAtob_kl7J1BlPBFqzXoFQ/480x180.webp" alt="image" height="100%" />
                </Box>
                <Stack direction="row" gap="10px">
                    <Typography color="#a0a0a0" fontWeight="bold" fontSize="14px">
                        Drama
                    </Typography>
                    <Typography color="#a0a0a0" border="1px solid #a0a0a0" borderRadius="5px" fontSize="11px" display="flex" alignItems="center">
                        TV-14
                    </Typography>
                </Stack>
                <Typography color="#ffffff">
                    American girls clash with high-society England. Watch new episodes Wednesdays.
                </Typography>
                <Box sx={{ display: "flex", width: "240px", height: "48px", background: "#ffffff", borderRadius: "8px", justifyContent: "center", alignItems: "center" }}>
                    <Typography background="#000000" fontWeight="bold">
                        Go to Show
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
}