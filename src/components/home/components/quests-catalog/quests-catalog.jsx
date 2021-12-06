import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { levelDictionary, subject } from 'const';
import { connect } from 'react-redux';
import { subjectChange } from 'store/action';
import { getIconComponent } from 'utils';

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer(activeSubject) {
    dispatch(subjectChange(activeSubject));
  },
});
const connector = connect(null, mapDispatchToProps);

const QuestsCatalog = ({quests, activeSubject, onUserAnswer}) => {

  return (
  <>
    <S.Tabs>
    {Object.entries(subject).map(([key,value]) => (
      <S.TabItem key={key}>
        <S.TabBtn
        isActive={activeSubject === value}
        onClick={(evt) => {
          evt.preventDefault();
          onUserAnswer(value);
        }}
        >
          {getIconComponent(value)}
          <S.TabTitle>{value}</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    ))}
    </S.Tabs>
    <S.QuestsList>
{ quests.map((quest) => {
  const {
    id,
    title,
    previewImg,
    level,
    peopleCount,
  } = quest;
  return (
    <S.QuestItem key={id}>
        <S.QuestItemLink to={`/quest/${id}`}>
          <S.Quest>
            <S.QuestImage
              src={previewImg}
              width="344"
              height="232"
              alt={`квест ${title}`}
            />

            <S.QuestContent>
              <S.QuestTitle>{title}</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  {`${peopleCount[0]}–${peopleCount[1]} чел`}
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  {levelDictionary[level]}
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>
  )
})}
    </S.QuestsList>
  </>
);
  };

export {QuestsCatalog};
export default connector(QuestsCatalog);
