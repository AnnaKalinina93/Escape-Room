import {
  MainLayout,
  PageTitle,
  PageHeading,
} from 'components/common/common';
import * as S from './quests-error-screen.styled';


function QuestsErrorScreen() {
  return (
          <MainLayout>
          <S.Main forwardedAs="main">
            <PageHeading>
              <PageTitle>Не удалось получить данные, попробуйте перезагрузить страницу</PageTitle>
            </PageHeading>
          </S.Main>
        </MainLayout>


  );
}

export default QuestsErrorScreen;
