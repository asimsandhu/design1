import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import reportWebVitals from "./reportWebVitals";
import Register from "./pages/Register";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Header from "./pages/Wireframe";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

import logo from "./signin.JPG";
import black from "./black.jpg";
import white from "./white.jpg";
import rectangle from "../../assets/page1/Rectangle.png";
import playbtn from "../../assets/page1/Group.png";
import rec2 from "../../assets/page1/retangle2.png";

import poly from "./Polygon.png";
import rec3 from "./smallRec.png";
import Footer from "./pages/F/Footer";
import Router from "./routes";
function Page1() {
  return (
    <>
      <Box
        sx={{
          backgroundRepeat: "fit-content",
          backgroundImage: `url(${rectangle})`,
          width: "100%",
          minHeight: 700,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Stack spacing={7} alignItems="center">
          <Box sx={{ marginTop: "250px" }}>
            <img src={playbtn}></img>
          </Box>
          <h1 className="middle">
            {" "}
            The Largest Community of Photo Enthusiastic{" "}
          </h1>
          <Button className="btn">join now</Button>
        </Stack>
      </Box>
      <Box>
        <Grid sx={{ padding: "80px" }} container Spacing={11}>
          <Grid xs={6}>
            <Typography variant="h4" gutterBottom>
              Snaps Photos and share like never before
            </Typography>
          </Grid>
          <Grid xs={6}></Grid>
          <Grid sx={{ paddingBlock: "59px", paddingRight: "50px" }} xs={6}>
            <Stack spacing={10}>
              <h1 className="headings">
                <b> Heading 1 </b>{" "}
              </h1>
              <Typography className="details">
                Sed ut perspiciatis s error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipi{" "}
              </Typography>
              <Button className="learnMore" variant="outlined">
                Learn More
              </Button>
            </Stack>
          </Grid>
          <Grid sx={{ paddingBlock: "59px", paddingLeft: "50px" }} xs={6}>
            <Stack spacing={10}>
              <h1 className="headings">
                <b> Heading 2</b>{" "}
              </h1>
              <Typography className="details">
                Sed ut perspiciatis s error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipi{" "}
              </Typography>
              <Button className="learnMore" variant="outlined">
                Learn More
              </Button>
            </Stack>
          </Grid>
          <Grid sx={{ paddingBlock: "59px", paddingRight: "50px" }} xs={6}>
            <Stack spacing={10}>
              <h1 className="headings">
                <b> Heading 3</b>{" "}
              </h1>
              <Typography className="details">
                Sed ut perspiciatis s error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipi{" "}
              </Typography>
              <Button className="learnMore" variant="outlined">
                Learn More
              </Button>
            </Stack>
          </Grid>
          <Grid sx={{ paddingBlock: "59px", paddingLeft: "50px" }} xs={6}>
            <Stack spacing={10}>
              <h1 className="headings">
                <b> Heading 4</b>{" "}
              </h1>
              <Typography className="details">
                Sed ut perspiciatis s error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipi{" "}
              </Typography>
              <Button className="learnMore" variant="outlined">
                Learn More
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid rowSpacing={1} sx={{ padding: "80px" }} container Spacing={11}>
          <Grid xs={6}>
            <img src={rec2}></img>
          </Grid>

          <Grid xs={6} sx={{ paddingLeft: "50px" }}>
            <h1 className="headings">
              <b> Heading101 </b>{" "}
            </h1>
            <Typography sx={{ paddingRight: "80px" }}>
              Sed ut perspiciatis s error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipi{" "}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ background: "#F5F5F5" }}>
        <Grid rowSpacing={1} sx={{ padding: "80px" }} container Spacing={11}>
          <Grid item xs={6}>
            <h1 className="headings">
              <b> Heading 303</b>{" "}
            </h1>
            <Typography sx={{ paddingRight: "80px" }} className="details">
              Sed ut perspiciatis s error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipi{" "}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img src={rec2}></img>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "80px" }}>
        <Stack sx={{ textAlign: "center" }}>
          <h2>
            <b>You are in good company</b>
          </h2>
          <Typography>
            {" "}
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, con{" "}
          </Typography>
          <marquee>
            <Stack
              sx={{
                padding: "20px",
                textAlign: "center",
                justifyContent: "center",
              }}
              direction="row"
            >
              <img
                style={{ padding: "10px", height: "76px", width: "176px" }}
                src={rec2}
              ></img>
              <img
                style={{ padding: "10px", height: "76px", width: "176px" }}
                src={rec2}
              ></img>
              <img
                style={{ padding: "10px", height: "76px", width: "176px" }}
                src={rec2}
              ></img>
              <img
                style={{ padding: "10px", height: "76px", width: "176px" }}
                src={rec2}
              ></img>{" "}
            </Stack>
            <Stack
              sx={{ padding: "20px", justifyContent: "center" }}
              direction="row"
            >
              <img
                style={{ padding: "10px", height: "76px", width: "176px" }}
                src={rec2}
              ></img>
              <img
                style={{ padding: "10px", height: "76px", width: "176px" }}
                src={rec2}
              ></img>
              <img
                style={{ padding: "10px", height: "76px", width: "176px" }}
                src={rec2}
              ></img>
              <img
                style={{ padding: "10px", height: "76px", width: "176px" }}
                src={rec2}
              ></img>
            </Stack>
          </marquee>
        </Stack>
      </Box>
      <Box sx={{ padding: "80px", background: "#F5F5F5" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography>
              {" "}
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, con{" "}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" sx={{ margin: "10px" }}>
              Join Today
            </Button>
            <Button variant="outlined" sx={{ margin: "10px" }}>
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Page1;
