import {useState} from "react";

import {
    useSelector,
} from "react-redux";

import {
    colors as Colors,
    Typography,
    Container,
    Grid,
    AppBar,
    Toolbar,
    Fab,
    Box,
    Card,
    CardContent,
    CardHeader,
    Avatar,
} from "@mui/material";

import {
    Masonry
} from "@mui/lab";

import {
    Add
} from "@mui/icons-material";

import AddTodoDialog from "./components/add";

function App() {
    const [open, setOpen] = useState(false);

    const todos = useSelector(state => state.todo);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <AppBar
                variant="outlined"
            >
                <Toolbar>
                    <Container>
                        <Typography>
                            TODO Manager
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
            <Toolbar />

            <Container
                sx={{
                    paddingTop: "1rem",
                }}
            >
                {
                    todos.length !== 0
                    ?
                        <Masonry
                            spacing={2}
                            columns={{ xs: 1, sm: 2, md: 3 }}
                        >
                            {
                                todos.map((todo) => {
                                    return (
                                        <Grid
                                            xs={12}
                                            md={4}
                                            item
                                        >
                                            <Card
                                                variant="outlined"
                                            >
                                                <CardHeader
                                                    title={todo.name}
                                                    avatar={
                                                        <Avatar sx={{ bgcolor: Colors.blue[500] }}>{todo.name[0]}</Avatar>
                                                    }
                                                />
                                                <CardContent>
                                                    <Typography>{todo.details}</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                        </Masonry>
                    :
                        <Typography>No task is founded.</Typography>
                }
            </Container>

            <Fab
                color="primary"
                onClick={handleOpen}
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                }}
            >
                <Add />
            </Fab>

            <AddTodoDialog
                open={open}
                onClose={handleClose}
            />
        </Box>
    );
}

export default App;
