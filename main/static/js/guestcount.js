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
  CardContent,
  Switch,
  FormControlLabel,
  Paper
} = MaterialUI;


const Sides = [
  "Grilled Whole Vegetables",
  "Potatos Au Gratin",
  "Need Accommodation"
]

const MainCourses = [
  "Steak",
  "Salmon",
  "Need Accommodation"
]

const KidsCourses = [
  "Chicken Tenders and Fries",
  "Mac & Cheese",
  "Penne Pasta and Marinara"
]

function App() {
  const RSVPCard = (props) => {
    return (
      <Grid item component={Card} xs={4}>
      <Card >
        <CardHeader title={props.info[0]+' '+props.info[1]}/>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          Entree Selection: {props.info[3]}
        </Typography>
        {!props.info[2] && <Typography variant="body2" color="text.secondary">Side Selection: {props.info[4]}</Typography>}
      </CardContent>
      </Card>
      </Grid>
    )
  }
  
  const AdultMenu = (props) => {
    return (
      <div>
        <DialogContentText>
            Entree choices<br></br>
            Steak: grilled flat iron steak with traditional chimichurri sauce<br></br><br></br>
            Salmon: Asian panko-crusted salmon with 5 spice seasoning & miso honey glaze<br/><br/>
            Need Accommodation: If you have dietary restrictions and cannot choose either option, please choose this option and contact Jessica or Arwin.
          </DialogContentText>
          <TextField
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
          <Divider></Divider>
          <DialogContentText>
            Side choices<br></br>
            Grilled Whole Vegetables: Zucchini, eggplant, squash, onion, red peppers, tossed in olive oil.<br></br><br></br>
            Potatoes Au Gratin: Thinly sliced potatoes and onion layered, creamy cheese sauce.<br></br><br></br>
            Need Accommodation: If you have dietary restrictions and cannot choose either option, please choose this option and contact Jessica or Arwin.
          </DialogContentText>
          <TextField
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
      </div>
    )
  }

  const KidsMenu = (props) => {
    return (
      <div>
        <DialogContentText>
            Kids Menu<br></br>
            Chicken Tenders and Fries: Boneless fried chicken strips served with ketchup, fresh fruit cup and French fries<br></br><br></br>
            Mac & Cheese: Pasta tossed in creamy cheddar & jack cheese sauce, served with fruit cup<br></br><br></br>
            Penne Pasta and Marinara: Penne pasta tossed in a marinara sauce topped with melted mozzarella and parmesan cheese, served with fresh fruit cup
          </DialogContentText>
          <TextField
            margin="dense"
            id="kidsfood"
            label="Entree"
            select
            variant="outlined"
            value={selectedKids}
            onChange={handleKidsChange}
            helperText="Please choose kids entree"
            required
          >
            {
              KidsCourses.map(course => (
                <MenuItem key={course} value={course}>
                  {course}
                </MenuItem>
              ))
            }
          </TextField>
      </div>
    )
  }
  

  const [rsvps, addRsvp] = React.useState([]);
  const handlePostRSVP = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", '/rsvp/form', true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(rsvps))
    console.log('send to server')
    window.location.href = '/success'
  };

  const [openForm, setFormOpen] = React.useState(false);
  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const resetForm = () => {
    setSide('Grilled Whole Vegetables')
    setMain('Steak')
    setFname('')
    setLname('')
    setKids('Chicken Tenders and Fries')
    setShowKids(false);
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

  const [selectedKids, setKids] = React.useState("Chicken Tenders and Fries");
  const handleKidsChange = (event) => {
    setKids(event.target.value);
  };

  const [showKids, setShowKids] = React.useState(false);
  const handleShowKids = (event) => {
    setShowKids(event.target.checked);
  };

  const handleAddGuest = (event) => {
    event.preventDefault()
    if (showKids) {
      rsvps.push([fname, lname, showKids, selectedKids])
    } else {
      rsvps.push([fname, lname, showKids, selectedMain, selectedSide])
    }
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
        <Paper elevation={24} sx={{height: "100%"}}>
          <Grid item container xs={12} direction="row" alignItems="stretch" >
            {rsvps !== [] && rsvps.map((rsvp, i) => (
              <RSVPCard key={i} info={rsvp}/>
            ))}
           
          </Grid>
        </Paper>
        </Grid>
      </Grid>
      <Grid item container xs={1} direction="row">
        <Grid item container xs={6} alignItems="flex-end" justifyContent="flex-start">
        <Fab variant="extended" onClick={handleFormOpen} >
          Add Guest
        </Fab>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" justifyContent="flex-end">
        <Fab variant="extended" onClick={handlePostRSVP}>
          Submit RSVPS
        </Fab>
        </Grid>
      </Grid>
      <Dialog open={openForm} onClose={handleCloseForm}>
        <form onSubmit={handleAddGuest} method="POST">
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
            
            margin="dense"
            id="lname"
            label="Last Name"
            variant="outlined"
            value={lname}
            onChange={handleLnameChange}
            required
          />
          <Divider></Divider>
          <FormControlLabel control={<Switch checked={showKids} onChange={handleShowKids}/>} label="Show Kids Menu (ages 4-12)" />
          { (!showKids && <AdultMenu/>) || (showKids && <KidsMenu/>) }
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
