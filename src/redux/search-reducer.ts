// Types

import { InferValueType } from "./store";

type InitialStateType = typeof initialState;

export type SearchActionsType = ReturnType<InferValueType<typeof actions>>;

// Actions

const SET_CITY = "weather/search/SET_CITY";

// Action Creators

export const actions = {
    setCity: (city: string) => ({ type: SET_CITY, city } as const),
}

const initialState = {
    city: null as string | null
}

const searchReducer = (state: InitialStateType = initialState, action: SearchActionsType) => {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                city: action.city,
            }
        default:
            return state;
    }
}

export default searchReducer;