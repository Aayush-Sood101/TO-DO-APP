import { Card, CardContent, Typography , CardActions , Button} from '@mui/material';

const ToDoItem = ({todo , fetchDetailsOfCurrentToDo}) => {
    // console.log(todo);
    
    return (
        <Card sx={{
            maxWidth: 350,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <CardContent>
                <Typography varian = "h5" color='text.secondary'>{todo.todo}</Typography>
            </CardContent>
            <CardActions>
                <Button
                onClick={() => fetchDetailsOfCurrentToDo(todo.id)} 
                sx = {{
                    backgroundColor : 'black' ,
                    color: 'white' , 
                    opacity: 0.75 , 
                    '&:hover' : {
                        backgroundColor: 'black' ,
                        color: 'white' ,
                        opacity: 1
                    }
                }}>Show Details</Button>
            </CardActions>
        </Card>
    )
}

export default ToDoItem;