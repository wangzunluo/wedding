const { Countdown } = Clock;

const {
  Tabs,
  Container,
  Tab,
  Box,
  typography,
  ThemeProvider,
  createTheme,
  Grid,
  styled,
  Paper
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
    <Grid id="grid" container spacing={2}>
        <Grid item xs={12}>
          <Item>xs=12</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>xs=4</Item>
        </Grid>
        <Grid id="second" container spacing={2} justifyContent="flex-start">
          <Grid item xs={12}>
            <Item>xs=12</Item>
        </Grid>
        </Grid>
      {/*<img src="https://drive.google.com/uc?id=11mYhQCmb-94bxXIOuSdPxiaollIUXNAL&export=download"></img>*/}
    </Grid>
  );
}

ReactDOM.createRoot(document.querySelector("#top")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
