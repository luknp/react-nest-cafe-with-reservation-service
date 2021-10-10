import * as React from 'react';
import dark from '../shared/scss/themes/_dark.scss';
import light from '../shared/scss/themes/_light.scss';

export interface IApp {
    theme: string;
    isOrderModal: boolean;
    counter: number;
    fontSize: number;
}
export enum Themes {
    light = 'light',
    dark = 'dark',
}

export interface INC_FONT_SIZE { actionType: 'INC_FONT_SIZE'; }
export interface DEC_FONT_SIZE { actionType: 'DEC_FONT_SIZE'; }
export interface SET_ORDER_MODAL { actionType: 'SET_ORDER_MODAL'; payload: IApp; }
export interface SET_THEME { actionType: 'SET_THEME'; payload: IApp; }
export interface TOGGLE_THEME { actionType: 'TOGGLE_THEME'; }
export interface INC { actionType: 'INC'; payload: IApp; }
export type AppActionType = SET_THEME | TOGGLE_THEME | SET_ORDER_MODAL | INC | INC_FONT_SIZE | DEC_FONT_SIZE;

export function appReducer(state: IApp, action: AppActionType): IApp {
    console.log(state);
    console.log(action);
    switch (action.actionType) {
        case 'SET_THEME':
            return { ...action.payload };
        case 'TOGGLE_THEME':
            if (state.theme === Themes.light) {
                document.body.style.backgroundColor = dark.primary;
                return { ...state, theme: 'dark' };
            } else {
                document.body.style.backgroundColor = light.primary;
                return { ...state, theme: 'light' };
            }
        case 'INC_FONT_SIZE':
            const fontSize = state.fontSize * 1.1;
            // przedzial
            const root: any = document.querySelector(':root');
            root.style.fontSize = `${fontSize}px`;
            return { ...state, fontSize };
        case 'DEC_FONT_SIZE':
            const fontSize2 = state.fontSize * 0.9;
            // przedzial
            const root2: any = document.querySelector(':root');
            root2.style.fontSize = `${fontSize2}px`;
            return { ...state, fontSize: fontSize2 };
        case 'SET_ORDER_MODAL':
            return { ...action.payload };
        case 'INC':
            // return {...state, ...action.payload };
            return { ...action.payload };

        default:
            return state;
    }
}

export const APP_INITIAL_STATE: IApp = {
    theme: Themes.light,
    isOrderModal: false,
    counter: 2,
    fontSize: 16,
};

export const AppContext = React.createContext<[IApp, React.Dispatch<AppActionType>]>
    ([
        APP_INITIAL_STATE,
        () => {
            throw new Error('Method not implemented. Please use context provider');
        },
    ]);

export interface IAppContextProviderProps {
    reducer?: (state: IApp, event: AppActionType) => IApp;
    initialState?: IApp;
    children: React.ReactNode;
}
// dd dodac jako domyslne jak nic w propsach
export const AppContextProvider = (props: IAppContextProviderProps) =>
    <AppContext.Provider value={React.useReducer(appReducer, APP_INITIAL_STATE)}>
        {props.children}
    </AppContext.Provider>;

export const useAppContext = () => React.useContext(AppContext);
