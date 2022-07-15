import {useState} from "react";

import {
    useSelector,
    useDispatch
} from "react-redux";

import {
    Typography,
    Container,
    Grid,
    AppBar,
    Toolbar,
    Button,
} from "@mui/material";

import {
    addTodo,
} from "./actions";

import AddTodoDialog from "./components/add";

function App() {
    const dispatch = useDispatch();

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
            <Typography
                variant="h4"
                color="primary"
                gutterBottom
            >
                TOOD manager with React & Redux!
            </Typography>
            <Button onClick={handleOpen}>Open</Button>

            <AddTodoDialog
                open={open}
                onClose={handleClose}
            />
        </Container>
    );
}

export default App;
