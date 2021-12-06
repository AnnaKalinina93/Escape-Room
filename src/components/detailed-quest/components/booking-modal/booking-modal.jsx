import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { postOrdersAction } from 'store/api-action';
import { connect } from 'react-redux';
import { useState } from 'react';
import PacmanLoader from 'react-spinners/ClipLoader';

const formField = {
  name: 'Ваше имя',
  phone: 'Контактный телефон',
  people: 'Количество участников',
};

const typeInput = {
  name: 'text',
  phone: 'tel',
  people: 'number',
};

const mapStateToProps = ({ ordersLoading }) => ({
  ordersLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(orders) {
    dispatch(postOrdersAction(orders));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const BookingModal = ({ onBookingBtnClick, ordersLoading, onSubmit }) => {
  const [formState, setFormState] = useState({
    name: {
      value: '',
      error: false,
      errorText: 'Введите свое имя.',
      regex: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/,
      touched: false,
    },
    people: {
      value: '',
      error: false,
      errorText: 'Поле должно содержать число.',
      regex: /^\d+$/,
      touched: false,
    },
    phone: {
      value: '',
      error: false,
      errorText: 'Введите корректный телефон. XXXXXXXXXX',
      regex: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,10}(\s*)?$/,
      touched: false,
    },
    isLegal: {
      value: false,
      touched: false,
    },
  });

  const isDisabled =
    ordersLoading ||
    formState.name.error ||
    formState.phone.error ||
    formState.people.error ||
    !formState.isLegal.value ||
    !formState.name.touched ||
    !formState.phone.touched ||
    !formState.people.touched ||
    !formState.isLegal.touched;

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    const rule = formState[name].regex;
    const isFieldValid = rule.test(value);
    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value: value,
        error: !isFieldValid,
        touched: true,
      },
    });
  };

  const handleChangeLegal = () => {
    setFormState({
      ...formState,
      isLegal: {
        ...formState.isLegal,
        value: !formState.isLegal.value,
        touched: true,
      },
    });
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onBookingBtnClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={(evt) => {
            evt.preventDefault();
            onSubmit({
              name: formState.name.value,
              peopleCount: Number(formState.people.value),
              phone: formState.phone.value,
              isLegal: formState.isLegal.value,
            });
          }}
        >
          {Object.entries(formField).map(([key, value]) => {
            return (
              <S.BookingField key={key}>
                <S.BookingLabel htmlFor={`booking-${key}`}>
                  {value}
                </S.BookingLabel>
                <S.BookingInput
                  type={typeInput[key]}
                  id={`booking-${key}`}
                  name={key}
                  placeholder={value}
                  onChange={handleChangeInput}
                />
                {formState[key].error && formState[key].touched && (
                  <S.BookingError>{formState[key].errorText}</S.BookingError>
                )}
              </S.BookingField>
            );
          })}
          <S.BookingSubmit disabled={isDisabled} type="submit">
            {ordersLoading ? <PacmanLoader size={20} /> : 'Отправить заявку'}
          </S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              onChange={handleChangeLegal}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export { BookingModal };
export default connector(BookingModal);
