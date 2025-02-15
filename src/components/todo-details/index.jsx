import { Fragment } from "react";
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';



const ToDoDetails = ({toDoDetails , openDialog , setOpenDialog}) => {
    return (
        <Fragment>
            <Dialog open={openDialog}>
                <DialogTitle>{toDoDetails?.todo}</DialogTitle>
                <DialogActions>
                    <Button onClick = {() => setOpenDialog(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default ToDoDetails;