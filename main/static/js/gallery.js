


const {
  Tabs,
  Container,
  Tab,
  Box,
  typography,
  ThemeProvider,
  createTheme,
  Grid,
  Paper,
  ImageList,
  ImageListItem
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

let itemData = [
  {img: "static/gallery/0.jpg", rows: 4, cols: 2},
  {img: "static/gallery/28.jpg", rows: 4, cols: 2},
  {img: "static/gallery/8.jpg", rows: 4, cols: 1},
  {img: "static/gallery/5.jpg", rows: 4, cols: 3},
  {img: "static/gallery/6.jpg", rows: 8, cols: 3},
  {img: "static/gallery/2.jpg", rows: 4, cols: 1},
  {img: "static/gallery/3.jpg", rows: 4, cols: 1},
  {img: "static/gallery/16.jpg", rows: 4, cols: 2},
  {img: "static/gallery/7.jpg", rows: 4, cols: 2},
  {img: "static/gallery/10.jpg", rows: 4, cols: 2},
  {img: "static/gallery/11.jpg", rows: 4, cols: 2},
  {img: "static/gallery/12.jpg", rows: 12, cols: 4},
  {img: "static/gallery/13.jpg", rows: 4, cols: 2},
  {img: "static/gallery/14.jpg", rows: 4, cols: 2},
  {img: "static/gallery/17.jpg", rows: 4, cols: 2},
  {img: "static/gallery/18.jpg", rows: 4, cols: 2},
  {img: "static/gallery/19.jpg", rows: 5, cols: 3},
  {img: "static/gallery/9.jpg", rows: 4, cols: 1},
  {img: "static/gallery/20.jpg", rows: 4, cols: 2},
  {img: "static/gallery/21.jpg", rows: 4, cols: 2},
  {img: "static/gallery/22.jpg", rows: 4, cols: 1},
  {img: "static/gallery/23.jpg", rows: 4, cols: 2},
  {img: "static/gallery/24.jpg", rows: 4, cols: 1},
  {img: "static/gallery/25.jpg", rows: 4, cols: 4},
  {img: "static/gallery/26.jpg", rows: 4, cols: 4},
  {img: "static/gallery/29.jpg", rows: 8, cols: 3},
  {img: "static/gallery/30.jpg", rows: 4, cols: 1},
  {img: "static/gallery/31.jpg", rows: 4, cols: 1},
  {img: "static/gallery/4.jpg", rows: 4, cols: 1},
  {img: "static/gallery/27.jpg", rows: 4, cols: 2},
  {img: "static/gallery/15.jpg", rows: 4, cols: 1},
  {img: "static/gallery/1.jpg", rows: 5, cols: 2},
]

itemData.forEach(item => {
  item['img'] = item['img'].slice(0,-4) + "-min.jpg"
})

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function App() {
  const [value, setValue] = React.useState(window.location.pathname);
  const [image, setImage] = React.useState(backgrounds[window.location.pathname]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setImage(backgrounds[newValue]);
    window.history.pushState(newValue,'',newValue)
    console.log(newValue)
    console.log('test')
  };

  window.addEventListener('popstate', (event) => {
    setValue(event.state)
    setImage(backgrounds[event.state]);
  });

  return (
    <Grid container alignItems="center">
      <Grid item xs={12} container alignItems="center" justifyContent="center">
    <ImageList
      sx={{ width: "80%", height: "100%" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Grid>
    </Grid>
  );
}

ReactDOM.createRoot(document.querySelector("#gallery")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
