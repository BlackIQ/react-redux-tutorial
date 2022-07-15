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
    Button,
    Fab, Box,
} from "@mui/material";

import {
    Add
} from "@mui/icons-material";

import AddTodoDialog from "./components/add";

function App() {
    const [open, setOpen] = useState(false);

    const todos = useSelector(state => state.counter);

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
                        todos.map((todo) => {
                            return (
                                <div
                                    key='test'
                                >
                                    { todo }
                                </div>
                            )
                        })
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
