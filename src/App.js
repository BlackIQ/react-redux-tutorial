import {useState} from "react";

import {
    useSelector,
} from "react-redux";

import {
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
} from "@mui/material";

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
        <Container>
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

            <Box
                sx={{
                    paddingTop: "2rem",
                }}
            >
                {
                    todos
                    ?
                        <Grid
                            columns={{ xs: 6, md: 12 }}
                            spacing={3}
                            container
                        >
                            {
                                todos.map((todo) => {
                                    return (
                                        <Grid
                                            xs={12}
                                            md={4}
                                            item
                                        >
                                            <Card>
                                                <CardHeader
                                                    title={todo.name}
                                                />
                                                <CardContent>
                                                    <Typography>{todo.details}</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    :
                        <Typography>No task is founded.</Typography>
                }
            </Box>

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
        </Container>
    );
}

export default App;
