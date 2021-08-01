import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

//Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.style';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        <TMDBLogoImg src={TMDBLogo} ald="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
