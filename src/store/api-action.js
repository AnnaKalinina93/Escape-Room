import { toast } from 'react-toastify';
import { ApiRoute, AppRoute } from 'const';
import {
  questsRequest,
  questsSucceeded,
  questsFailed,
  questRequest,
  questSucceeded,
  questFailed,
  ordersRequest,
  ordersSucceeded,
  ordersFailed,
  redirectToRoute,
} from './action';

const messages = {
  error: 'Не удалось отправить запрос, попробуйте еще раз',
  post: 'Ваша заявка отправлена, мы скоро свяжемся с Вами',
};

export const fetchQuestsAction = () => async (dispatch, _, api) => {
  dispatch(questsRequest());
  try {
    const { data } = await api.get(ApiRoute.Quests);
    dispatch(questsSucceeded(data));
  } catch {
    dispatch(questsFailed());
  }
};

export const fetchQuestAction = (id) => async (dispatch, _, api) => {
  dispatch(questRequest());
  try {
    const { data } = await api.get(`${ApiRoute.Quest}/${id}`);
    dispatch(questSucceeded(data));
  } catch {
    dispatch(questFailed());
  }
};

export const postOrdersAction = ({
  name,
  peopleCount,
  phone,
  isLegal,
}) => async (dispatch, _, api) => {
  dispatch(ordersRequest());
  try {
    await api.post(ApiRoute.Orders, { name, peopleCount, phone, isLegal });
    dispatch(ordersSucceeded());
    dispatch(redirectToRoute(AppRoute.Home));
    toast.info(messages.post);
  } catch {
    dispatch(ordersFailed());
    toast.info(messages.error);
  }
};
