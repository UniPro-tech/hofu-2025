import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Signin from "@/components/signin";
import { auth } from "@/auth";
import Avater from "@mui/material/Avatar";

export default async function Header() {
    const session = await auth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        2025年の抱負！！
                    </Typography>
                    {session ? (
                        <>
                            <Avater src={session.user?.image as string} />
                            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                                {session.user?.name}
                            </Typography>
                        </>

                    ) : (
                        <Signin />
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
