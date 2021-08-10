import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

//Routes
import { Link } from 'react-router-dom';

//Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.style';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        {/* if click on logo -> will move to home page */}
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} ald="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
