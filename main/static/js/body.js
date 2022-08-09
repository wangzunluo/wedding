const {
    Button,
    Container
  } = MaterialUI;

function App() {
  return (
    <Container style={{backgroundColor: "#578be6"}}>
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


