const { Countdown } = Clock;

const tabtoindex = {
    "/": 0,
    "/ourstory": 1,
    "/eventdetails": 2,
    "/rsvp": 3,
    "/registry": 4
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
      sx={{
        color: 'white',
        fontSize: 40
      }}
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
    <Container>
        <div></div>
    </Container>
  );
}

ReactDOM.createRoot(document.querySelector("#body")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
