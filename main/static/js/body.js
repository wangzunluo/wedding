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
        event.preventDefault();
      }}
      {...props}
    />
  );
}
  

function App() {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container style={{backgroundColor: "#578be6"}}>
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
            <LinkTab label="Page One" href="/drafts" />
            <LinkTab label="Page Two" href="/trash" />
            <LinkTab label="Page Three" href="/spam" />
          </Tabs>
        </Box>
        <a href="/countdown">Countdown</a><br></br>
        <a href="/rsvp">RSVP</a><br></br>
        <a href="/guests">Guest List</a>
        <form method="post">
            <input type="submit" value="Debug"></input>
        </form>
      {/*<img src="https://drive.google.com/uc?id=11mYhQCmb-94bxXIOuSdPxiaollIUXNAL&export=download"></img>*/}
    </Container>
  );
}

ReactDOM.createRoot(document.querySelector("#body")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
