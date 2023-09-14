import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";


function Popup({ handleDeleteTrue,handleDeleteFalse ,popup}) {
    

    return (
    //   <div className="modal">
    //     <div className="modal_box">
    //       <p>You sure you wanna delete?</p>
    //       <button className="modal_buttonCancel" onClick={handleDeleteFalse}>Cancel</button>
    //       <button onClick={handleDeleteTrue} className="modal_buttoDelete">
    //         Confirm
    //       </button>
    //     </div>
    //   </div>
    <div>
        {popup &&(<Dialog open={popup} >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogActions>
          <Button onClick={handleDeleteFalse} >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteTrue}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>)}
         
    </div>
    );
  }
  
  export default Popup;