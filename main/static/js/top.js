

const { Countdown } = Clock;
const { Story } = Pages;
const { Home } = Landing;
const { Details } = Information;
const { RSVP } = Forms;
const { Registry } = Shopping;
const { Accommodation } = Hotel;

console.log(Object.keys(window));

const {
  Tabs,
  Container,
  Tab,
  Box,
  typography,
  ThemeProvider,
  createTheme,
  Grid,
  Paper
} = MaterialUI;

const theme = createTheme({
  typography: {
    fontFamily: 'luxus-brut, cursive',
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
        '&.Mui-selected': {
          color: '#FFCAC2',
          fontSize: '3vw',
        },
        fontSize: '3vw',
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
  "/": `url(${"static/img/landing-min.jpg"})`,
  "/ourstory": `url(${"static/img/story-min.jpg"})`,
  "/eventdetails": `url(${"static/img/event-min.jpg"})`,
  "/rsvp": `url(${"static/img/rsvp-min.jpg"})`,
  "/accommodation": `url(${"static/img/accommodation-min.jpg"})`,
  "/registry": `url(${"static/img/registry-min.jpg"})`
};

function App() {
  const [value, setValue] = React.useState(window.location.pathname);
  const [image, setImage] = React.useState(backgrounds[window.location.pathname]);

  console.log(value)
  console.log('funk')
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setImage(backgrounds[newValue]);
    window.history.push(newValue)
    console.log(newValue)
    console.log('test')
  };
  return (
    
    <Grid id="grid" item container xs={12} justifyContent="flex-start" direction="column" alignItems="center" sx={{backgroundImage: image}}>
      <Grid item container xs={2} direction="row">
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Tabs TabIndicatorProps={{ sx: {height: 0} }} variant="fullWidth" value={value ? value : false} onChange={handleChange} centered >
              <LinkTab value='/' label="home" href="/" />
              <LinkTab value="/ourstory" label="our story" href="/ourstory" />
              <LinkTab value="/eventdetails" label="event details" href="/eventdetails" />
              <LinkTab value="/rsvp" label="rsvp" href="/rsvp" />
              <LinkTab value="/accommodation" label="accommodation" href="/accommodation" />
              <LinkTab value="/registry" label="registry" href="/registry" />
            </Tabs>
          </ThemeProvider>
        </Grid>
      </Grid>
        {value === "/" && <Home />}
        {value === "/ourstory" && <Story />}
        {value === "/eventdetails" && <Details />}
        {value === "/rsvp" && <RSVP />}
        {value === "/accommodation" && <Accommodation />}
        {value === "/registry" && <Registry />}
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
