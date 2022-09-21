const {
  Typography,
  Grid,
  AppBar,
  Toolbar,
  Button,
  Divider,
  Badge,
  Fab,
  Skeleton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  MenuItem,
  Card,
  CardHeader,
  CardContent
} = MaterialUI;


const Sides = [
  "Grilled Whole Vegetables",
  "Potatos Au Gratin"
]

const MainCourses = [
  "Steak",
  "Salmon"
]

function App() {
  const RSVPCard = (props) => {
    return (
      <Grid item container xs={4} alignItems="center" justifyContent="center">
      <Card>
        <CardHeader title={props.info[0]+' '+props.info[1]}/>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          Entree Selection: {props.info[2]}<br></br>
          Side Selection: {props.info[3]}
        </Typography>
      </CardContent>
      </Card>
      </Grid>
    )
  }

  const [rsvps, addRsvp] = React.useState([['Arwin','Wang','Steak','Grilled Whole Vegetables']]);
  const handleSubmitRSVP = () => {
    console.log('send to server')
  };

  const [openForm, setFormOpen] = React.useState(false);
  const handleAddGuest = () => {
    setFormOpen(true);
  };

  const resetForm = () => {
    setSide('Grilled Whole Vegetables')
    setMain('Steak')
    setFname('')
    setLname('')
  };

  const handleCloseForm = () => {
    resetForm();
    setFormOpen(false);
  };

  const [fname, setFname] = React.useState('');
  const handleFnameChange = (event) => {
    setFname(event.target.value)
  }
  const [lname, setLname] = React.useState('');
  const handleLnameChange = (event) => {
    setLname(event.target.value)
  }

  const [selectedSide, setSide] = React.useState('Grilled Whole Vegetables');
  const handleSideChange = (event) => {
    setSide(event.target.value);
  };

  const [selectedMain, setMain] = React.useState('Steak');
  const handleMainChange = (event) => {
    setMain(event.target.value);
  };

  const handleGuestSubmit = (event) => {
    
    rsvps.push([fname, lname, selectedMain, selectedSide])
    handleCloseForm()
  }

  return (
    <Grid id="grid" container justifyContent="flex-start" direction="column">
      <Grid item xs={1}>
        <AppBar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, padding: 2 }}>
        RSVP
      </Typography>
            
          </AppBar>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item container xs={8} direction="row" justifyContent="center" alignItems="center">
        <Grid item container xs={10} direction="column" sx={{height: "100%"}} >
          <Grid item container xs={12} direction="row" alignItems="flex-start" justifyContent="flex-start">
            {rsvps !== [] && rsvps.map(rsvp => (
              <RSVPCard info={rsvp}/>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={1} direction="row">
        <Grid item container xs={6} alignItems="flex-end" justifyContent="flex-start">
        <Fab variant="extended" onClick={handleAddGuest} >
          Add Guest
        </Fab>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" justifyContent="flex-end">
        <Fab variant="extended" onClick={handleSubmitRSVP}>
          Submit RSVPS
        </Fab>
        </Grid>
      </Grid>
      <Dialog open={openForm} onClose={handleCloseForm}>
        <form onSubmit={handleGuestSubmit} method="POST">
      <DialogTitle>RSVP Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below so that we can get your information and food preferences!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="fname"
            label="First Name"
            variant="outlined"
            value={fname}
            onChange={handleFnameChange}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="lname"
            label="Last Name"
            variant="outlined"
            value={lname}
            onChange={handleLnameChange}
            required
          />
          <br></br>
          <Divider></Divider>
          <br></br>
          <DialogContentText>
            Entree choices<br></br>
            Steak: grilled flat iron steak with traditional chimichurri sauce<br></br>
            Salmon: Asian panko-crusted salmon with 5 spice seasoning & miso honey glaze
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="foodmain"
            label="Entree"
            select
            variant="outlined"
            value={selectedMain}
            onChange={handleMainChange}
            helperText="Please choose your entree"
            required
          >
            {
              MainCourses.map(course => (
                <MenuItem key={course} value={course}>
                  {course}
                </MenuItem>
              ))
            }
          </TextField>
          <br></br>
          <Divider></Divider>
          <br></br>
          <DialogContentText>
            Side choices<br></br>
            Grilled Whole Vegetables: Zucchini, eggplant, squash, onion, red peppers, tossed in olive oil.<br></br>
            Potatoes Au Gratin: Thinly sliced potatoes and onion layered, creamy cheese sauce.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="foodside"
            label="Side"
            select
            variant="outlined"
            value={selectedSide}
            onChange={handleSideChange}
            helperText="Please choose your side"
            required
          >
            {
              Sides.map(side => (
                <MenuItem key={side} value={side}>
                  {side}
                </MenuItem>
              ))
            }
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button type="submit">Add guest</Button>
        </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}

ReactDOM.createRoot(document.querySelector("#guestform")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
