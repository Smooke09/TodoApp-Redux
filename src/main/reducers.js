import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: () => ({
    description: "Ler Livros",
    list: [
      {
        _id: 1,
        description: "Pagar fatura do cartão",
        done: true,
      },
      {
        _id: 2,
        description: "Reuniao com equipe as 10:00",
        done: false,
      },
      {
        _id: 3,
        description: "Consulta medica na terça depois do almoço",
        done: false,
      },
    ],
  }),
});

export default rootReducer;
