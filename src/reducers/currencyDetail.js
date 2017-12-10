const currencyDetail = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_CURRENCY_DETAIL':
      return {
        ...state,
        selected: {
          code: action.code,
          ...state.currencyList[action.code],
        },
      };
    default:
      return {
        selected: null,
        currencyList: {
          ...state,
        },
      };
  }
};

export default currencyDetail;
