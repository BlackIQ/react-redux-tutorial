import {useState, useEffect} from "react";

import {
    useSelector,
    useDispatch,
} from "react-redux";

import {
    colors as Colors,
    Typography,
    Container,
    AppBar,
    Toolbar,
    Fab,
    Box,
    Card,
    CardContent,
    CardHeader,
    Avatar, IconButton,
} from "@mui/material";

import {
    Masonry
} from "@mui/lab";

import {
    Add,
    Delete
} from "@mui/icons-material";

import AddTodoDialog from "./components/add";
import {deleteTodo} from "./redux/actions";

function App() {
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const todos = useSelector(state => state.todo);

    useEffect(() => {
        // Do stuff
    }, [todos]);

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
                            Redux TODO Manager
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
                                        <Box>
                                            <Card
                                                variant="outlined"
                                            >
                                                <CardHeader
                                                    title={todo.name}
                                                    avatar={
                                                        <Avatar sx={{ bgcolor: todo.color }}>{todo.name[0]}</Avatar>
                                                    }
                                                    action={
                                                        <IconButton onClick={() => dispatch(deleteTodo(todo))}>
                                                            <Delete />
                                                        </IconButton>
                                                    }
                                                />
                                                <CardContent>
                                                    <Typography>{todo.details}</Typography>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    )
                                })
                            }
                        </Masonry>
                    :
                        <Typography
                            variant="h5"
                        >
                            No task is founded.
                        </Typography>
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
