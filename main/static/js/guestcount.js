

console.log(Object.keys(window));

const {
  Typography,
  Grid,
  AppBar,
  Toolbar,
  Button,
  Divider,
  Badge
} = MaterialUI;




const tabtoindex = {
    "/": 0,
    "/ourstory": 1,
    "/eventdetails": 2,
    "/rsvp": 3,
    "/registry": 4
};


function LinkTab(props) {
  return (
    <Tab
      sx={{
        color: 'white',
        '& .Mui-selected': {
          backgroundColor: 'rgba(220, 0, 50, 0.1)',
          fontSize: 80,
        },
        fontSize: 80,
      }}
      component="a"
      onClick={(event) => {
        console.log('called')
        event.preventDefault()
        console.log(event)
        console.log(props.href)
      }}
      {...props}
    />
  );
}

const backgrounds = {
  "/": `url(${"static/img/landing.jpg"})`,
  "/ourstory": `url(${"static/img/whitepink.png"})`,
  "/eventdetails": `url(${"static/img/blue.png"})`,
  "/rsvp": `url(${"static/img/green.png"})`,
  "/registry": `url(${"static/img/purple.png"})`
};

function App() {
  const [value, setValue] = React.useState(window.location.pathname);
  const [image, setImage] = React.useState(backgrounds[window.location.pathname]);

  console.log(value)
  console.log('funk')
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setImage(backgrounds[newValue]);
    console.log(newValue)
    console.log('test')
  };
  return (
    <Grid id="grid" container justifyContent="flex-start" direction="column">
      <Grid item container xs={1} direction="row">
        <AppBar>
            <Toolbar>
            <a className="icon" href="/"><img className="icon" src="/static/ico/favicon.ico"></img></a>
        
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, padding: 2 }}>
        RSVP
      </Typography>
      <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
            </Toolbar>
            
          </AppBar>
      </Grid>
      <Grid item container xs={5}>
        
      </Grid>
      <Grid item container xs={6}>
        
      </Grid>
    </Grid>
  );
}

ReactDOM.createRoot(document.querySelector("#guestform")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
