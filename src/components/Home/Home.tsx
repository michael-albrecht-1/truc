import React from "react";
import { 
  StyledHomeContent,
  StyledUl,
  StyledHomeH1,
  StyledHomeIcon,
} from './Home.styled';

const Home = () => {
  return (
    <StyledHomeContent>
      <StyledHomeH1>
        <StyledHomeIcon className="fas fa-home"></StyledHomeIcon>Page d'accueil
      </StyledHomeH1>
      <StyledUl>
        <li>mike : cette page n'est pas encore codée !</li>
        <li>simon : non vraiment ?! :'(</li>
      </StyledUl>
    </StyledHomeContent>
  );
};

export default Home;
