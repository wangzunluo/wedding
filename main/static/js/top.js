const {
    Button,
    Container
  } = MaterialUI;

function App() {
  return (
    <Container style={{backgroundColor: "pink"}}>
        <h1>Welcome To Arwin and Jessica's Wedding Website!</h1>
    </Container>
  );
}

ReactDOM.createRoot(document.querySelector("#top")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);