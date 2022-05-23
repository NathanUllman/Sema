import {
  Typography,
  Grid,
  Divider,
  Card,
  Box,
  Button,
  CardActions,
  CardContent,
  Stack,
  Link,
  CardHeader,
} from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

function HomePage(props: {}): JSX.Element {
  let navigate = useNavigate();
  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Container disableGutters maxWidth="md" component="main">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Hi, I'm Nathan Ullman
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              I borrowed this website layout from a <Link>template</Link> since
              I am not a CSS wizard.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              But hey, I did do everything else!
            </Typography>
          </Container>

          <Container maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
            <Grid container spacing={5} alignItems="flex-end">
              <Grid item key="My Experience" xs={12} sm={6} md={4}>
                <Card>
                  <CardHeader
                    title="My Experience"
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Current Job
                    </Typography>
                    <Typography variant="h5" component="div">
                      SDE1 at Amazon
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      June 2020 - Present
                    </Typography>

                    <Divider />
                    <Box sx={{ m: 2 }} />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Past Work
                    </Typography>
                    <div></div>

                    <Typography component="div" align="center" key={1}>
                      FAST Enterprises
                    </Typography>
                    <Typography component="div" align="center" key={2}>
                      Gallup
                    </Typography>
                    <Typography component="div" align="center" key={2}>
                      Penlink
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      href="https://www.linkedin.com/in/nathan-ullman-9222a8138/"
                      target="_blank"
                      rel="noopener"
                      fullWidth
                      variant={"contained"}
                    >
                      Learn more
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key="My Projects" xs={12} sm={6} md={4}>
                <Card>
                  <CardHeader
                    title="My Projects"
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Current Project
                    </Typography>
                    <Typography variant="h5" component="div">
                      This Website
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      May 2020 - Present
                    </Typography>

                    <Divider />
                    <Box sx={{ m: 2 }} />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Past Projects
                    </Typography>
                    <div></div>

                    <Typography component="div" align="center" key={1}>
                      N/A
                    </Typography>
                    <Typography component="div" align="center" key={1}>
                      N/A
                    </Typography>
                    <Typography component="div" align="center" key={1}>
                      N/A
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      href="https://github.com/NathanUllman/Semaphore/"
                      target="_blank"
                      rel="noopener"
                      fullWidth
                      variant={"contained"}
                    >
                      See this site's repo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key="My Skills" xs={12} sm={6} md={4}>
                <Card>
                  <CardHeader
                    title="My Skills"
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Current Role
                    </Typography>
                    <Typography variant="h5" component="div">
                      Full Stack Dev
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Primarily Back-End
                    </Typography>

                    <Divider />
                    <Box sx={{ m: 2 }} />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Tools
                    </Typography>
                    <div></div>

                    <Typography component="div" align="center" key={1}>
                      AWS, CDK
                    </Typography>
                    <Typography component="div" align="center" key={2}>
                      Typescript, Python, Java
                    </Typography>
                    <Typography component="div" align="center" key={2}>
                      and more
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => navigate("/about")}
                      fullWidth
                      variant={"contained"}
                    >
                      Learn more
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Link
              href="https://www.linkedin.com/in/nathan-ullman-9222a8138/"
              target="_blank"
              rel="noopener"
            >
              Linkedin
            </Link>
            <Link
              href="https://github.com/NathanUllman"
              target="_blank"
              rel="noopener"
            >
              Github
            </Link>
            <Link onClick={() => alert("Send me a message on Linkedin :)")}>
              Contact Me
            </Link>
          </Stack>
        </Container>
      </Box>
    </main>
  );
}

export default HomePage;
