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
  Paper,
  IconButton,
  Menu
} = MaterialUI;

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel"
];

const ITEM_HEIGHT = 48;

function ModifyMenu(props) {
  const item = props.num
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleEdit = () => {
    handleMenuClose()
    props.handleEdit()
  }
  const handleDelete = () => {
    handleMenuClose()
    props.handleDelete()
  }
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button1"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <i className="material-icons">more_vert</i>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem key={"edit"} onClick={handleEdit}>Edit</MenuItem>
        <MenuItem key={"delete"} onClick={handleDelete}>Delete</MenuItem>

      </Menu>
    </div>
  );
}


const Sides = [
  "Grilled Whole Vegetables",
  "Potatoes Au Gratin",
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
    console.log(event.currentTarget)
    console.log(anchorEl)
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [editNum, setEditNum] = React.useState('')

  const handleEdit = (fvalues, num) => {
    console.log('edit')
    console.log(fvalues)
    setForm(fvalues)
    setEditNum(num)
    handleFormOpen()
  };
  const handleDelete = (num) => {
    console.log('delete');
    rsvps[num]= []
    setRsvp(rsvps)
    setRsvpUi(rsvps.map((rsvp, i) => (<RSVPCard key={i} info={rsvp} num={i}/>)))
  };

  const RSVPCard = (props) => {
    if (props.info.length) {
    return (
      <Grid item component={Card} xs={4}>
      <Card >
        <CardHeader title={props.info[0]+' '+props.info[1]} action={
    //       <div>
    //       <IconButton
    //     aria-label="more"
    //     id={"long-button"+props.num}
    //     aria-controls={open ? 'long-menu' : undefined}
    //     aria-expanded={open ? 'true' : undefined}
    //     aria-haspopup="true"
    //     onClick={handleMenuClick}
    //   >
    //     <i className="material-icons">more_vert</i>
    //   </IconButton>
    //   <Menu
    //   id={"long-menu"+props.num}
    //   MenuListProps={{
    //     'aria-labelledby': 'long-button',
    //   }}
    //   anchorEl={anchorEl}
    //   open={menuOpen}
    //   onClose={handleMenuClose}>
        
    //   <MenuItem key={"edit"} onClick={handleMenuClose}>Edit</MenuItem>
    //   <MenuItem key={"delete"} onClick={handleMenuClose}>Delete</MenuItem>
    // </Menu>
    // </div>
    <ModifyMenu num={props.num} handleEdit={() => handleEdit(props.info, props.num)} handleDelete={() => handleDelete(props.num)}/>
        }/>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          Entree Selection: {props.info[3]}
        </Typography>
        {!props.info[2] && <Typography variant="body2" color="text.secondary">Side Selection: {props.info[4]}</Typography>}
      </CardContent>
      </Card>
      </Grid>
    )
      } else {
        return 
      }
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
  

  const [rsvps, setRsvp] = React.useState([]);
  const [rsvpui, setRsvpUi] = React.useState(rsvps.map((rsvp, i) => (<RSVPCard key={i} info={rsvp} num={i}/>)))
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

  const [submitValue, setSubmitValue] = React.useState("Add Guest");

  const setForm = (fvalues) => {
    setFname(fvalues[0])
    setLname(fvalues[1])
    setShowKids(fvalues[2]);
    if (fvalues[2]) {
      setMain('')
      setSide('')
      setKids(fvalues[3])
    } else {
      setMain(fvalues[3])
      setSide(fvalues[4])
      setKids('')
    }
    setSubmitValue("Confirm Changes")
  }

  const resetForm = () => {
    setSide('')
    setMain('')
    setFname('')
    setLname('')
    setKids('')
    setShowKids(false);
    setSubmitValue("Add Guest")
    setEditNum('')
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    resetForm();
  };

  const [fname, setFname] = React.useState('');
  const handleFnameChange = (event) => {
    setFname(event.target.value)
  }
  const [lname, setLname] = React.useState('');
  const handleLnameChange = (event) => {
    setLname(event.target.value)
  }

  const [selectedSide, setSide] = React.useState('');
  const handleSideChange = (event) => {
    setSide(event.target.value);
  };

  const [selectedMain, setMain] = React.useState('');
  const handleMainChange = (event) => {
    setMain(event.target.value);
  };

  const [selectedKids, setKids] = React.useState("");
  const handleKidsChange = (event) => {
    setKids(event.target.value);
  };

  const [showKids, setShowKids] = React.useState(false);
  const handleShowKids = (event) => {
    setShowKids(event.target.checked);
  };

  

  const handleAddGuest = (event) => {
    event.preventDefault()
    if (submitValue === "Add Guest") {
      if (showKids) {
        rsvps.push([fname, lname, showKids, selectedKids])
      } else {
        rsvps.push([fname, lname, showKids, selectedMain, selectedSide])
      }
    } else {
      let rcopy = rsvps
      if (showKids) {
        rsvps[editNum] = [fname, lname, showKids, selectedKids]
      } else {
        console.log("other")
        console.log(editNum)
        rsvps[parseInt(editNum)] = [fname, lname, showKids, selectedMain, selectedSide]
      }
      console.log("done")
    }
    console.log(rsvps)
    handleCloseForm()
    setRsvpUi(rsvps.map((rsvp, i) => (<RSVPCard key={i} info={rsvp} num={i}/>)))
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
            {rsvps !== [] && rsvpui}
           
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
          <Button type="submit">{submitValue}</Button>
        </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#guestform")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
