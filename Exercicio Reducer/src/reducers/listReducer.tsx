import { listType } from "@/types/listType";
import { act } from "react";

type AddAction = {
    type: 'add',
    payload: {
        text: string
    };
}
type EditTextAction = {
    type: 'editText';
    payload: {
        id: number;
        newText: string;
    }
}
type ToggleDoneAction = {
    type: 'toggleDone';
    payload: {
        id: number;
    };
}
type RemoveAction = {
    type: 'remove';
    payload: {
        id: number;
    };
}

type listActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

export const listReducer = (list: listType[], actions: listActions) => {
    switch (actions.type) {
        case 'add':
            return [ ...list, {
                id: list.length,
                text: actions.payload.text,
                done: false
            }];
        case 'editText':
            return list.map(i => {
                if (i.id === actions.payload.id) {
                    i.text = actions.payload.newText;
                }
                return i;
            });
        case 'toggleDone':
            return list.map(i => {
                if (i.id ===  actions.payload.id) i.done = !i.done;
                return i;
            });
        case 'remove':
            return list.filter(i => {
                return i.id !== actions.payload.id;
            });
        default:
            return list;
    }
}