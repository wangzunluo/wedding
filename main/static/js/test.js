

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


function App() {

  const backgrounds = {
    "/": `url(${"static/img/landing-min.jpg"})`,
    "/ourstory": `url(${"static/img/story-min.jpg"})`,
    "/eventdetails": `url(${"static/img/event-min.jpg"})`,
    "/rsvp": `url(${"static/img/rsvp-min.jpg"})`,
    "/accommodation": `url(${"static/img/accommodation-min.jpg"})`,
    "/registry": `url(${"static/img/registry-min.jpg"})`
  };

  const boxone = {
    backgroundImage: backgrounds["/"],
    backgroundSize: "100%"
  }

  const lowestbox = {
    
  }

  return (
    <Box sx={lowestbox}>
      <section>
  <h1>Scroll Down to Reveal Elements &#8595;</h1>
</section>
<section>
  <div class="container reveal">
    <h2>Caption</h2>
    <div class="text-container">
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container reveal">
    <h2>Caption</h2>
    <div class="text-container">
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container reveal">
    <h2>Caption</h2>
    <div class="text-container">
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
    </div>
  </div>
</section>
    </Box>
  );
}

ReactDOM.createRoot(document.querySelector("#top")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
