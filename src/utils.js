import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { subject } from 'const';

export const getIconComponent = (activeSubject) => {
  switch (activeSubject) {
    case subject.allQuests:
      return <IconAllQuests />;
    case subject.adventures:
      return <IconAdventures />;
    case subject.horror:
      return <IconHorrors />;
    case subject.mystic:
      return <IconMystic />;
    case subject.detective:
      return <IconDetective />;
    case subject['sci-fi']:
      return <IconScifi />;
    default:
      break;
  }
};

export const getSortQuests = (activeSubject, quests) => {
  switch (activeSubject) {
    case subject.allQuests:
      return quests;
    default:
      return quests.filter((quest) => quest.type === Object.keys(subject).find(key => subject[key] === activeSubject));
  }
};
