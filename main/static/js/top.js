const { Countdown } = Clock;

const {
  Tabs,
  Container,
  Tab,
  Box,
  typography,
  ThemeProvider,
  createTheme,
  Grid
} = MaterialUI;

const theme = createTheme({
  typography: {
    fontFamily: 'luxus-brut, cursive',
    fontSize: 60,
    button: {
      textTransform: "none",
      fontWeight: 400,
      color: "white"
    },
    color: "white"
  },
 
});

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

function App() {
  const [value, setValue] = React.useState(window.location.pathname);
  console.log(value)
  console.log('funk')
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
    console.log('test')
  };
  return (
    <Grid id="grid" container justifyContent="flex-start" direction="column" alignItems="center">
      <Grid item container xs={2}>
        <Box sx={{ width: '100%', position: "relative", top: "0" }}>
          <ThemeProvider theme={theme}>
            <Tabs variant="fullWidth" value={value ? value : false} onChange={handleChange} aria-label="nav tabs example" centered >
              <LinkTab value='/' label="home" href="/" />
              <LinkTab value="/ourstory" label="our story" href="/ourstory" />
              <LinkTab value="/eventdetails" label="event details" href="/eventdetails" />
              <LinkTab value="/rsvp" label="rsvp" href="/rsvp" />
              <LinkTab value="/registry" label="registry" href="/registry" />
            </Tabs>
          </ThemeProvider>
        </Box>
      </Grid>
      <Grid item container xs={8} justifyContent="center" alignItems="center" direction="column">
        <div className="title">Jessica & Arwin</div>
        <br></br>
        <br></br>
        <br></br>
        <div className="date">• 11 • 12 • 22 • CYPRESS • CA •</div>
        <br></br>
        <br></br>
        <div className='date'>Countdown until we are married!</div>
        <br></br>
        <Countdown />
      </Grid>
      <Grid item container xs={2} justifyContent="center">
        <Grid item xs={3} >
          <div className="footer">
            website created by arwin<br></br>
            designed by jessica
          </div>
        </Grid>
      </Grid>
        {value === "/rsvp" && <RSVP />}
        {value === "/guests" && <Guests />}
      {/*<img src="https://drive.google.com/uc?id=11mYhQCmb-94bxXIOuSdPxiaollIUXNAL&export=download"></img>*/}
    </Grid>
  );
}

ReactDOM.createRoot(document.querySelector("#top")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
