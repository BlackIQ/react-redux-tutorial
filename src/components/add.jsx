import {
    useState,
} from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from "@mui/material";

import {
    useDispatch
} from "react-redux";

import {
    addTodo
} from "../actions"

const AddTodoDialog = (props) => {
    const dispatch = useDispatch();

    const {onClose, selectedValue, open} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const [task, setTask] = useState('');

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            fullWidth
        >
            <DialogTitle>Add a new todo</DialogTitle>
            <DialogContent>
                <TextField
                    variant="standard"
                    size="medium"
                    label="Task name"
                    placeholder="Enter task name"
                    onChange={(e) => setTask(e.target.value)}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => dispatch(addTodo(task))}
                    disabled={ !task }
                >
                    Add task
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddTodoDialog;