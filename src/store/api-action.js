import { toast } from 'react-toastify';
import { apiRoute } from 'const';
import {
  questsRequest,
  questsSucceeded,
  questsFailed,
  questRequest,
  questSucceeded,
  questFailed,
} from './action';

const errorMessages = 'Не удалось отправить запрос, попробуйте еще раз';

export const fetchQuestsAction = () =>
  async (dispatch, _, api) => {
    dispatch(questsRequest());
    try {
      const { data } = await api.get(apiRoute.quests);
      dispatch(questsSucceeded(data));
    } catch {
      dispatch(questsFailed());
    }
  };

  export const fetchQuestAction = (id) =>
  async (dispatch, _, api) => {
    dispatch(questRequest());
    try {
      const { data } = await api.get(`http://localhost:3001/quests/${id}`);
      dispatch(questSucceeded(data));
    } catch {
      dispatch(questFailed());
    }
  };

  export const postOrders = (orders) =>
  async (_dispatch, _, api) => {
    try {
      await api.post(apiRoute.orders, orders);
    } catch {
      toast.info(errorMessages.postOrders);
    }
  };
