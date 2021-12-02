export const actionType = {
  subjectСhange : 'home/subjectChange',
  questsSucceeded : 'home/questsSucceeded',
  questsRequest : 'home/questsRequest',
  questsFailed : 'home/questsFailed',
  questSucceeded : 'quest/questSucceeded',
  questRequest : 'quest/questRequest',
  questFailed : 'quest/questFailed',
  queryRequest : 'quest/queryRequest',
  querySucceeded : 'quest/querySucceeded',
  queryFailed : 'quest/queryFailed',
  redirectToRoute: 'app/redirectToRoute',
};

export const subjectChange = (subject) => ({
  type: actionType.subjectСhange,
  payload: subject,
});

export const questsRequest = () => ({
  type: actionType.questsRequest,
});

export const questsSucceeded = (quests) => ({
  type: actionType.questsSucceeded,
  payload: quests,
});

export const questsFailed = () => ({
  type: actionType.questsFailed,
});

export const questRequest = () => ({
  type: actionType.questRequest,
});

export const questSucceeded = (quest) => ({
  type: actionType.questSucceeded,
  payload: quest,
});

export const questFailed = () => ({
  type: actionType.questFailed,
});

export const queryRequest = () => ({
  type: actionType.queryRequest
});

export const querySucceeded = (query) => ({
  type: actionType.questSucceeded,
  payload: query,
});

export const quueryFailed = () => ({
  type: actionType.queryFailed,
});

