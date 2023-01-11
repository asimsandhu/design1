import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Stack, Typography } from "@mui/material";
import "./Bodylayouts.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

import roundcross from "./Ellipse1012.png";
import rectangle from "./Rectangle.png";
import logo from "./listicon.png";
import { textAlign } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { CardActionArea } from "@mui/material";

function Bodylayouts() {
  return (
    <>
      <Box sx={{ padding: "40px" }}>
        <Grid container spacing={3} className="Grid1">
          <Grid className="mainHeading" item xs={12} sm={6}>
            Snap photos and share like never before
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <h2 className="headings">Heading 1</h2>
            <Typography className="typograph">
              Eements must have an ap photos and share like never before alt
              prop, either with meaningful text, or an em
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <h2 className="headings">Heading 2</h2>
            <Typography className="typograph">
              Eements must have anap photos and share like never before alt
              prop, either with meaningful text, or an em
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <h2 className="headings">Heading 3</h2>
            <Typography className="typograph">
              Eements muap photos and share like never beforest have an alt
              prop, either with meaningful text, or an em
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <h2 className="headings">Heading 4</h2>
            <Typography className="typograph">
              Eements muap photos and share like never beforest have an alt
              prop, either with meaningful text, or an em
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "40px" }}>
        <Grid container spacing={3} className="Grid1">
          <Grid className="mainHeading" item xs={12} sm={6}>
            Snap photos and share like never before
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
          <Grid item xs={6} rowSpacing={4}>
            <Stack spacing={3}>
              <h2 className="headings">Heading 1</h2>
              <Typography className="typograph">
                Eements must have an ap photos and share like never before alt
                prop, either with meaningful text, or an em
              </Typography>
              <Button className="newBtn" variant="outlined">
                Learn more
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={3}>
              <h2 className="headings">Heading 1</h2>
              <Typography className="typograph">
                Eements must have an ap photos and share like never before alt
                prop, either with meaningful text, or an em
              </Typography>
              <Button className="newBtn" variant="outlined">
                Learn more
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={3}>
              <h2 className="headings">Heading 1</h2>
              <Typography className="typograph">
                Eements must have an ap photos and share like never before alt
                prop, either with meaningful text, or an em
              </Typography>
              <Button className="newBtn" variant="outlined">
                Learn more
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={3}>
              <h2 className="headings">Heading 1</h2>
              <Typography className="typograph">
                Eements must have an ap photos and share like never before alt
                prop, either with meaningful text, or an em
              </Typography>
              <Button className="newBtn" variant="outlined">
                Learn more
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "40px" }}>
        <Grid container spacing={3} className="Grid1">
          <Grid className="mainHeading" item xs={12} sm={6}>
            Snap photos and share like never before
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
          <Grid item xs={6} rowSpacing={4}>
            <Stack spacing={3}>
              <h2 className="headings">Heading 101</h2>
              <Typography className="typograph">
                Eements must have an ap photos and share like never before alt
                prop, either with meaningful text, or an em
              </Typography>
              <Button className="newBtn" variant="contained">
                Learn more
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={3}>
              <h2 className="headings">Heading 101</h2>
              <Typography className="typograph">
                Eements must have an ap photos and share like never before alt
                prop, either with meaningful text, or an em
              </Typography>
              <Button className="newBtn" variant="contained">
                Learn more
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={3}>
              <h2 className="headings">Heading 101</h2>
              <Typography className="typograph">
                Eements must have an ap photos and share like never before alt
                prop, either with meaningful text, or an em
              </Typography>
              <Button className="newBtn" variant="contained">
                Learn more
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={3}>
              <h2 className="headings">Heading 101</h2>
              <Typography className="typograph">
                Eements must have an ap photos and share like never before alt
                prop, either with meaningful text, or an em
              </Typography>
              <Button className="newBtn" variant="contained">
                Learn more
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "40px" }}>
        <Grid container spacing={3} className="Grid1">
          <Grid className="mainHeading" item xs={12} sm={6}>
            Snap photos and share like never before 123 crss
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
          <Grid item xs={6} rowSpacing={4}>
            <Stack spacing={3}>
              <img className="eImg" src={roundcross}></img>
              <h2 className="headings">Heading 401-1</h2>

              <Typography className="typograph">
                Eements must have an ap photos and share like never before alt
                prop, either with meaningful text, or an em
              </Typography>
              <Button className="newBtn" variant="contained">
                Learn more
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={3}>
              <h2 className="headings">Heading 401-2</h2>
              <img className="eImg" src={roundcross}></img>
              <Typography className="typograph">
                Eements must have an ap photos and share like never before alt
                prop, either with meaningful text, or an em
              </Typography>
              <Button className="newBtn" variant="contained">
                Learn more
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Stack spacing={3}></Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "40px" }}>
        <Grid container spacing={3} className="Grid1">
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
          <Grid item xs={6} rowSpacing={4}>
            <img className="rImg" src={rectangle}></img>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={3}>
              <h2 className="headings">Heading 101</h2>
              <Typography className="typograph">
                Eements must have an ap photos and share like never before alt
                prop, either with meaningful text, or an em
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "40px" }}>
        <Grid container spacing={3} className="Grid1">
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
          <Grid item xs={6} rowSpacing={4}>
            <Grid item xs={6}>
              <Stack spacing={3}>
                <h2 className="headings">Heading 101</h2>
                <Typography className="typograph">
                  Eements must have an ap photos and share like never before alt
                  prop, either with meaningful text, or an em
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <img className="rImg" src={rectangle}></img>
        </Grid>
      </Box>

      <Box sx={{ padding: "40px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img className="bImg" src={rectangle}></img>
          </Grid>
          <Grid item xs={6}>
            <Stack sx={{ paddingBlock: "240px", paddingInline: "84px" }}>
              <h2 className="headings">Sed ut perspiciatis unde omnis 101</h2>
              <Typography className="typograph">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.{" "}
              </Typography>
              <hr className="line"></hr>
              <small>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore.
              </small>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "40px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img className="bImg" src={rectangle}></img>
          </Grid>
          <Grid item xs={6}>
            <Stack
              sx={{ paddingBlock: "200px", paddingInline: "84px" }}
              Spacing="10"
            >
              <Box className="mui-pt-4">
                <h2 className="headings">Sed ut perspiciatis unde omnis 101</h2>
              </Box>
              <Box className="mui-pt-4">
                <Typography className="typograph">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem.{" "}
                </Typography>
              </Box>
              <Box className="mui-pt-4">
                <Stack>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <Box>
                            <img src={logo}></img>
                          </Box>
                        </ListItemIcon>
                        <ListItemText primary="Sed ut perspiciatis unde omnis iste natus error sit voluptate" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <Box>
                            <img src={logo}></img>
                          </Box>
                        </ListItemIcon>
                        <ListItemText primary="Sed ut perspiciatis unde omnis iste natus error sit voluptate" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <Box>
                            <img src={logo}></img>
                          </Box>
                        </ListItemIcon>
                        <ListItemText primary="Sed ut perspiciatis unde omnis iste natus error sit voluptate" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: "40px" }}>
        <Grid container>
          <Grid className="mainHeading" item xs={6} sm={6}>
            Snap photos and share like never before 123 crss
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Stack spacing={4}>
                <Box>
                  <img className="Img303" src={roundcross}></img>
                </Box>
                <Box>
                  <h2 className="headings">Sed ut perspiciatis</h2>
                </Box>
                <Box>
                  <Typography className="typograph">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem.
                  </Typography>
                </Box>
                <Box>
                  <b style={{ color: "#18A0FB" }}>Learn more</b>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={4}>
                <Box>
                  <img className="Img303" src={roundcross}></img>
                </Box>
                <Box>
                  <h2 className="headings">Sed ut perspiciatis</h2>
                </Box>
                <Box>
                  <Typography className="typograph">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem.
                  </Typography>
                </Box>
                <Box>
                  <b style={{ color: "#18A0FB" }}>Learn more</b>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={4}>
                <Box>
                  <img className="Img303" src={roundcross}></img>
                </Box>
                <Box>
                  <h2 className="headings">Sed ut perspiciatis</h2>
                </Box>
                <Box>
                  <Typography className="typograph">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem.
                  </Typography>
                </Box>
                <Box>
                  <b style={{ color: "#18A0FB" }}>Learn more</b>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "70px" }}>
        <Grid container spacing={2}>
          <Grid sx={{ textAlign: "center" }} xs={12} className="mainHeading">
            Snap photos and share like never 1 before
          </Grid>
          <Grid
            sx={{
              textAlign: "center",
              paddingBlock: "30px",
              fontSize: "45px",
              fontWeight: "300",
              lineHeight: "50px",
              paddingInline: "150px",
            }}
            xs={12}
            className="mainHeading"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Grid>
          <Grid xs={6} spacing={12}>
            <Stack  spacing={10} sx={{ paddingBlock: "150px",paddingRight:"100px" }}>
              <Box >
                <h2 className="headings">Sed ut perspiciatis</h2>
                <Typography className="typograph" sx={{paddingBlock:"10px"}}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem.
                </Typography>
              </Box>
              <Box>
                <h2 className="headings">Lorem ipsum dolor</h2>
                <Typography className="typograph" sx={{paddingBlock:"10px"}}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem.
                </Typography>
              </Box>
              <Box>
                <h2 className="headings">Nemo enim ipsam</h2>
                <Typography className="typograph" sx={{paddingBlock:"10px"}}>
                  Consequuntur  magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid xs={6} spacing={12}>
            <img src={rectangle} className="Img4"></img>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "10rem" }}>
        <Grid container spacing={6}>
          <Grid xs={6} className="mainHeading">
            Snap photos and share like never before .
          </Grid>
          <Grid sx={6}></Grid>
          <Grid xs={8} sx={{ paddingBlock: "40px" }}>
            <Typography className="typograph1" sx={{ fontSize: "2rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </Typography>
          </Grid>
          <Grid xs={4}></Grid>

          <Grid xs={6}>
            <Card sx={{ maxWidth: 686 }} className="cards">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={rectangle}
                  alt="green iguana"
                />
                <CardContent sx={{ padding: "60px" }}>
                  <h2 className="headings">Sed ut perspiciatis</h2>
                  <Typography className="typograph">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card sx={{ maxWidth: 686 }} className="cards">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={rectangle}
                  alt="green iguana"
                />
                <CardContent sx={{ padding: "60px" }}>
                  <h2 className="headings">Sed ut perspiciatis1</h2>
                  <Typography className="typograph">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: "10rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="mainHeading">
            Snap photos and share like <br /> never before
          </Grid>
          <Grid item xs={12}>
            <Typography className="typograph1" sx={{ fontSize: "2rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
              <br /> tempor incididunt ut labore
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={4}>
                <Card className="cards">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="275"
                      image={rectangle}
                      alt="green iguana"
                    />
                    <CardContent sx={{ padding: "60px" }}>
                      <h2 className="headings">Sed ut perspiciatis</h2>
                      <Typography className="typograph">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className="cards">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="275"
                      image={rectangle}
                      alt="green iguana"
                    />
                    <CardContent sx={{ padding: "60px" }}>
                      <h2 className="headings">Sed ut perspiciatis1</h2>
                      <Typography className="typograph">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className="cards">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="275"
                      image={rectangle}
                      alt="green iguana"
                    />
                    <CardContent sx={{ padding: "60px" }}>
                      <h2 className="headings">Sed ut perspiciatis1</h2>
                      <Typography className="typograph">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Bodylayouts;
