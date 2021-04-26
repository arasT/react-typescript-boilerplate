import { CommonState } from "interface/common";
import { createSelector } from "reselect";
import { typedAction } from "../utils";

const INIT_NB = [0];

const initialState: CommonState = {
  listNb: [...INIT_NB],
  listDouble: [...INIT_NB],
  currentIP: "127.0.0.1",
};

// Actions creator
export const addNb = (newNb: number) => typedAction("COMMON/ADD_NB", newNb);
export type AddNb = typeof addNb;

export const addNbDouble = (newNb: number) =>
  typedAction("COMMON/ADD_NB_DOUBLE", newNb);
export type AddNbDouble = typeof addNbDouble;

// Actions creator
export const resetNb = () => typedAction("COMMON/RESET_NB");
export type ResetNb = typeof resetNb;

export const getPublicIPSaga = (location: string) =>
  typedAction("COMMON/GET_PUBLIC_IP_SAGA", location);
export type GetPublicIPSaga = typeof getPublicIPSaga;

export const setMyIP = (currentIP: string) =>
  typedAction("COMMON/SET_MY_IP", currentIP);
export type SetMyIP = typeof setMyIP;

// Actions type
type CommonAction = ReturnType<AddNb | ResetNb | AddNbDouble | SetMyIP>;

// Use reselect to get number double list
const nbListSelector = (listNb: number[]) => listNb;

export const getListTriple = createSelector([nbListSelector], (listNb) =>
  listNb.map((l) => l * 3)
);

const totalNbListSelector = (listNb: number[], listNb2: number[]) => ({
  listNb,
  listNb2,
});

export const getListTotal = createSelector(
  [totalNbListSelector],
  ({ listNb, listNb2 }): number => {
    const total1 = listNb.reduce((accumulator, nb) => accumulator + nb, 0);
    const total2 = listNb2.reduce((accumulator, nb) => accumulator + nb, 0);
    return total1 + total2;
  }
);

// export const getDocNumberToUpload = createSelector(
//   [documentsListSelector],
//   documentsList =>
//     documentsList.reduce(
//       (accumulator, currentDoc) => accumulator + currentDoc.nbUploader,
//       0,
//     ),
// )

// Reducer
export const CommonReducer = (
  state = initialState,
  action: CommonAction
): CommonState => {
  switch (action.type) {
    case "COMMON/ADD_NB":
      return {
        ...state,
        listNb: [...state.listNb, action.payload],
        listDouble: [...state.listDouble, action.payload * 2],
      };
    case "COMMON/ADD_NB_DOUBLE":
      return { ...state, listDouble: [...state.listDouble, action.payload] };

    case "COMMON/RESET_NB":
      return { ...state, listNb: [...INIT_NB] };

    case "COMMON/SET_MY_IP":
      return { ...state, currentIP: action.payload };

    default:
      return state;
  }
};
