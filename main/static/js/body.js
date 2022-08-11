const { Countdown } = Clock;

const tabtoindex = {
    "/countdown": 0,
    "/rsvp": 1,
    "/guests": 2
};

const {
    Tabs,
    Container,
    Tab,
    Box
  } = MaterialUI;

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault()
        console.log(event)
        console.log(props.href)
      }}
      {...props}
    />
  );
}
  

function App() {
  const [value, setValue] = React.useState(tabtoindex[window.location.pathname]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  return (
    <Container style={{backgroundColor: "#578be6"}}>
        <Box sx={{ width: '100%' }} style={{backgroundColor: "green"}} >
          <Tabs value={value ? value : false} onChange={handleChange} aria-label="nav tabs example" style={{backgroundColor: "yellow"}} centered>
            <LinkTab value="/countdown" label="Countdown" href="/countdown" />
            <LinkTab value="/rsvp" label="RSVP" href="/rsvp" />
            <LinkTab value="/guests" label="Guest List" href="/guests" />
          </Tabs>
        </Box>
        <a href="/countdown">Countdown</a><br></br>
        <a href="/rsvp">RSVP</a><br></br>
        <a href="/guests">Guest List</a>
        <form method="post">
            <input type="submit" value="Debug"></input>
        </form>
        {value === "/countdown" && <Countdown />}
        {value === "/rsvp" && <RSVP />}
        {value === "/guests" && <Guests />}
      {/*<img src="https://drive.google.com/uc?id=11mYhQCmb-94bxXIOuSdPxiaollIUXNAL&export=download"></img>*/}
    </Container>
  );
}

ReactDOM.createRoot(document.querySelector("#body")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
