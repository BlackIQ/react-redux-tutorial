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
} from "../redux/actions"

const AddTodoDialog = (props) => {
    const dispatch = useDispatch();

    const {onClose, selectedValue, open} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const [taskName, setTaskName] = useState('');
    const [taskDetails, setTaskDetails] = useState('');

    const addTask = () => {
        const task = {
            name: taskName,
            details: taskDetails
        }

        dispatch(addTodo(task));
    }

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
                    onChange={(e) => setTaskName(e.target.value)}
                    fullWidth
                />
                <br />
                <br />
                <TextField
                    variant="standard"
                    size="medium"
                    label="Task details"
                    placeholder="Enter task details"
                    onChange={(e) => setTaskDetails(e.target.value)}
                    rows={5}
                    fullWidth
                    multiline
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={addTask}
                >
                    Add task
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddTodoDialog;