import { subject } from "const";
import { actionType } from "./action";

const initialState = {
  activeSubject: subject.allQuests,
  quests: null,
  questsLoading: false,
  questsError: false,
  quest: null,
  questLoading: false,
  questError: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.subjectСhange:
      return { ...state, activeSubject: action.payload };
    case actionType.questsRequest:
      return { ...state, questsLoading: true, questsError: false };
    case actionType.questsSucceeded:
      return {
        ...state,
        questsLoading: false,
        quests: action.payload
      };
    case actionType.questsFailed:
      return {
        ...state,
        questsLoading: false,
        questsError: true,
      };
      case actionType.questRequest:
      return { ...state, questLoading: true , questError: false};
    case actionType.questSucceeded:
      return {
        ...state,
        questLoading: false,
        quest: action.payload
      };
    case actionType.questFailed:
      return {
        ...state,
        questLoading: false,
        questError: true,
      };
    default:
      return state;
  }
};

export { reducer };
