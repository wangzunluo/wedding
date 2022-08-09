const {
    Button,
    Grid
  } = MaterialUI;

function App() {
  return (
    <Grid container direction="row" justifyContent="center"
    alignItems="center" style={{backgroundColor: "pink"}}>
        <h1 className="title">
          Welcome To<br></br>
          Arwin and Jessica's<br></br>
          Wedding Website!</h1>
    </Grid>
  );
}

ReactDOM.createRoot(document.querySelector("#top")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);