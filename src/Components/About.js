import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Grid, Box, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: '0 auto',
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  background: 'grey',
  color: 'white',
}));

const About = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    if (liked) {
      document.title = 'Liked!';
    } else {
      document.title = 'Not Liked';
    }
  }, [liked]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">One Piece</Typography>
              <Typography variant="body1">
                "One Piece" is a popular Japanese manga and anime series created by Eiichiro Oda. It first premiered in Shueisha's "Weekly Shonen Jump" magazine in 1997 and has since become one of the most successful and enduring franchises in the world of manga and anime. Here are some key aspects of "One Piece":
              </Typography>
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">My Hero Academia</Typography>
              <Typography variant="body1">
                "My Hero Academia," also known as "Boku no Hero Academia" in Japanese, is a popular manga and anime series created by Kohei Horikoshi. It is set in a world where individuals can develop superpowers known as "Quirks." Here are some key details about "My Hero Academia":
              </Typography>
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Box>
        <Footer />
      </Box>
    </div>
  );
};

export default About;
