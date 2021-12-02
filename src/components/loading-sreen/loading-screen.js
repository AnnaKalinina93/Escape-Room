import PacmanLoader from 'react-spinners/ClipLoader';
import {
  MainLayout,
  PageTitle,
  PageHeading,
} from 'components/common/common';
import * as S from './loading-screen.styled';


function LoadingScreen() {
  return (
          <MainLayout>
          <S.Main forwardedAs="main">
            <PageHeading>
              <PageTitle><PacmanLoader size={30} /> Loading...</PageTitle>
            </PageHeading>
          </S.Main>
        </MainLayout>


  );
}

export default LoadingScreen;
