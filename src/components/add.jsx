import {
    useState,
} from "react";

import {
    colors as Colors,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Select,
    MenuItem
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

    const [color, setColor] = useState(Colors.blue[500]);

    const todoColors = [
        {
            color: Colors.blue[500],
            name: "Blue"
        },
        {
            color: Colors.green[500],
            name: "Green"
        },
        {
            color: Colors.red[500],
            name: "Red"
        },
        {
            color: Colors.purple[500],
            name: "Purple"
        },
        {
            color: Colors.yellow[500],
            name: "Yellow"
        },
        {
            color: Colors.orange[500],
            name: "Orange"
        }
    ];

    const addTask = () => {
        const task = {
            name: taskName,
            details: taskDetails,
            color: color,
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
                    variant="outlined"
                    size="medium"
                    label="Task name"
                    placeholder="Enter task name"
                    onChange={(e) => setTaskName(e.target.value)}
                    fullWidth
                />
                <br />
                <br />
                <TextField
                    variant="outlined"
                    size="medium"
                    label="Task details"
                    placeholder="Enter task details"
                    onChange={(e) => setTaskDetails(e.target.value)}
                    rows={5}
                    fullWidth
                    multiline
                />
                <br />
                <br />
                <Select
                    variant="outlined"
                    value={color}
                    label="Color"
                    size="medium"
                    color="primary"
                    onChange={(e) => setColor(e.target.value)}
                    fullWidth
                >
                    {
                        todoColors.map((color) => {
                            return (
                                <MenuItem
                                    value={color.color}
                                    sx={{
                                        color: color.color
                                    }}
                                >
                                    {color.name}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
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