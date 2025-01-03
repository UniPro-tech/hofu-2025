import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        2025年の抱負！！
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                        <Link href="/login">
                            ログイン
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
