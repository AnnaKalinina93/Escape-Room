import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import LoadingScreen from 'components/loading-sreen/loading-screen';
import { QuestsCatalog } from './components/components';
import QuestsErrorScreen from './components/quests-error-screen/quests-error-screen';
import * as S from './home.styled';
import { connect } from 'react-redux';
import { getSortQuests } from 'utils';

const mapStateToProps = ({
  activeSubject,
  quests,
  questsLoading,
  questsError,
}) => ({
  activeSubject,
  quests,
  questsLoading,
  questsError,
});
const connector = connect(mapStateToProps);

const HomePage = ({ activeSubject, quests, questsLoading,
  questsError }) => {


  if (questsLoading)  {
    return <LoadingScreen/>
  }
  if (!questsLoading && questsError) {
    return <QuestsErrorScreen/>
  }
  const sortQuests = getSortQuests(activeSubject, quests);
    return(
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle>Выберите тематику</PageTitle>
        <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
      </PageHeading>
      <QuestsCatalog activeSubject={activeSubject} quests={sortQuests}/>
    </S.Main>
  </MainLayout>
    )
    };

export {HomePage};
export default connector(HomePage);

//export default HomePage;
