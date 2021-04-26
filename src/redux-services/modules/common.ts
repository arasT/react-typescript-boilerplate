import { CommonState } from "interface/common";
import { createSelector } from "reselect";
import { typedAction } from "../utils";

const INIT_NB = [0];

const initialState: CommonState = {
  listNb: [...INIT_NB],
  listDouble: [...INIT_NB],
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

// Actions type
type CommonAction = ReturnType<AddNb | ResetNb | AddNbDouble>;

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

    default:
      return state;
  }
};
