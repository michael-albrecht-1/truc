import React from "react";
import { StyledH1 } from '../../shared_style/H1.styled';
import { StyledI  } from '../../shared_style/I.styled';
import { StyledHome, StyledUl} from './Home.styled';

const Home = () => {
  return (
    <StyledHome>
      <StyledH1>
        <StyledI className="fas fa-home"></StyledI>Page d'accueil
      </StyledH1>
      <StyledUl>
        <li>mike : cette page n'est pas encore codée !</li>
        <li>simon : non vraiment ?! :'(</li>
      </StyledUl>
    </StyledHome>
  );
};

export default Home;
