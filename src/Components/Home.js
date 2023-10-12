import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, CardMedia, Grid, Button, Container, AppBar, Toolbar,CssBaseline,Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  position: 'relative',
}));

const themeLight = createTheme({
  palette: {
    mode: 'light',
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home = () => {
  const [theme, setTheme] = useState(themeLight);
  
  const toggleTheme = () => {
    setTheme(theme === themeLight ? themeDark : themeLight);
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const animeData = [
    {
      title: 'OnePiece',
      description: 'Best anime ever',
      image: 'https://w0.peakpx.com/wallpaper/1005/796/HD-wallpaper-one-piece-monkeydluffy-onepiece.jpg',
    },
    {
      title: 'My Hero Academia',
      description: 'Best anime ever',
      image: 'https://w0.peakpx.com/wallpaper/708/705/HD-wallpaper-my-hero-academia-boku-no-hero-academia.jpg',
    },
    {
      title: 'Bleach',
      description: 'Best anime ever',
      image: 'https://w0.peakpx.com/wallpaper/778/520/HD-wallpaper-ichigo-kurosaki-anime-bleach.jpg',
    },
    // Add more anime cards here...
  ];

  const randomImages = [
    'https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/682/435/620/naruto-anime-uzumaki-naruto-jiraiya-naruto-shippuuden-hd-wallpaper-preview.jpg',
  ];

  const animeWallpapers = [
    'https://c4.wallpaperflare.com/wallpaper/127/999/945/5-centimeters-per-second-4k-uhd-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/286/259/682/kimetsu-no-yaiba-anime-anime-boys-tanjir%C5%8D-kamado-hd-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/295/507/952/anime-naruto-naruto-shipp%C5%ABden-akatsuki-deidara-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/815/247/567/death-note-yagami-light-l-lawliet-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/496/183/858/sword-art-online-asuna-yuuki-kirito-anime-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/830/466/86/demon-slayer-kimetsu-no-yaiba-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/320/637/491/naruto-anime-minato-namikaze-naruto-uzumaki-4k-hd-wallpaper-preview.jpg',
    // Add more anime wallpapers here...
  ];

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="sticky" color='grey'>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Anime Wallpaper
            </Typography>
            <Button color="inherit" onClick={toggleTheme}>
              Toggle Theme
            </Button>
          </Toolbar>
        </AppBar>
       
        <Container>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6} md={8}>
              <Slider {...settings}>
                {animeData.map((anime, index) => (
                  <div key={index}>
                    <StyledCard>
                      <CardMedia component="img" height="140" image={anime.image} alt={anime.title} />
                      <CardContent>
                        <Typography gutterBottom variant="h4">
                          {anime.title}
                        </Typography>
                        <Typography variant="body2">{anime.description}</Typography>
                      </CardContent>
                    </StyledCard>
                  </div>
                ))}
              </Slider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                <Typography variant="h6" gutterBottom>
                  Random Anime Images
                </Typography>
                <Grid container spacing={2}>
                  {randomImages.map((image, index) => (
                    <Grid item xs={6} key={index}>
                      <img src={image} alt={`Random ${index}`} style={{ width: '100%' }} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h4" style={{ marginTop: '24px' }}>
            Anime Wallpapers
          </Typography>
          <Grid container spacing={2}>
            {animeWallpapers.map((wallpaper, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardMedia component="img" height="140" image={wallpaper} alt={`Anime Wallpaper ${index}`} />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Wallpaper {index + 1}
                    </Typography>
                    <Typography variant="body2">Beautiful anime wallpaper.</Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;