import {
  MainLayout,
  PageTitle,
  PageHeading,
} from 'components/common/common';
import * as S from './not-found-screen.styled';


const NotFoundScreen = () => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle>404. Page not found</PageTitle>
        <S.LinkItem>
            <S.Link $isActiveLink to="/">
              Вернуться на главную
            </S.Link>
        </S.LinkItem>
      </PageHeading>
    </S.Main>
  </MainLayout>
);

export default NotFoundScreen;
