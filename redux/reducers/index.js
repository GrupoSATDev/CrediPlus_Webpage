// redux/reducers.js
const initialState = {
  amount: 0, // Monto del crédito
  duration: 0, // Duración del pago
  monthlyPayment: 0, // Pago mensual calculado
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AMOUNT':
      return { ...state, amount: action.payload };
    case 'SET_DURATION':
      return { ...state, duration: action.payload };
    case 'CALCULATE_PAYMENT':
      const monthlyPayment = (state.amount / state.duration).toFixed(2); // Ejemplo simple de cálculo
      return { ...state, monthlyPayment };
    default:
      return state;
  }
};

export default rootReducer;