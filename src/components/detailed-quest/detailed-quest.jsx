import { useState, useEffect } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchQuestAction } from 'store/api-action';
import LoadingScreen from 'components/loading-sreen/loading-screen';
import NotFoundScreen from 'components/not-found-screen/not-found-screen';
import { subject, levelDictionary } from 'const';

const mapStateToProps = ({
  questLoading,
  quest,
  questError,
}) => ({
  questLoading,
  quest,
  questError,
});

const mapDispatchToProps = (dispatch) => ({
  questRequest(id) {
    dispatch(fetchQuestAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const DetailedQuest = ({
  questLoading,
  quest,
  questError,
  questRequest,
}) => {
  const { id } = useParams();

  useEffect(() => {
    questRequest(id);
  }, [id]);

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const handleBookingBtnClick = () => {
    setIsBookingModalOpened(!isBookingModalOpened);
  };

  if (!questError) {
    if ( questLoading  || !quest) {
      return <LoadingScreen/>;
    }
  } else {
    return <NotFoundScreen/>;
  }

  const {
    title,
    description,
    coverImg,
    level,
    peopleCount,
    type,
    duration,
  } = quest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{subject[type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${peopleCount[0]}–${peopleCount[1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{levelDictionary[level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={handleBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal  onBookingBtnClick={() => handleBookingBtnClick()}/>}
      </S.Main>
    </MainLayout>
  );
};

export {DetailedQuest};
export default connector(DetailedQuest);
