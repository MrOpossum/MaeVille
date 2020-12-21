import Dialog from "@material-ui/core/Dialog";

const SimpleDialog = (props) => {    
    return (
      <Dialog
        onClose={props.handleDialogClose}
        aria-labelledby="simple-dialog-title"
        open={props.openDialog}
      >
        {props.children}
      </Dialog>
    );
}

export default SimpleDialog;