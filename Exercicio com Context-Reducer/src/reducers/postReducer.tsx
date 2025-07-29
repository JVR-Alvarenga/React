import { PostListType } from "@/types/PostListType";
import { act } from "react";

type AddAction = {
    type: 'add';
    payload: {
        title: string;
        body: string;
    }
}

type EditTitleAction = {
    type: 'editTitle',
    payload: {
        id: number;
        newTitle: string;
    }
}

type EditBodyAction = {
    type: 'editBody',
    payload: {
        id: number;
        newBody: string;
    }
}

type RemoveAction = {
    type: 'remove';
    payload: {
        id: number;
    }
}

export type listActions = AddAction | EditTitleAction | EditBodyAction | RemoveAction;

export const postReducer = ( posts: PostListType[], action: listActions) => {
    switch (action.type) {
        case 'add':
            return [ ...posts, { 
                id: posts.length, 
                title: action.payload.title, 
                body: action.payload.body 
            }];
            break;
        case 'editTitle':
            return posts.map(i => {
                if (i.id === action.payload.id) {
                    i.title = action.payload.newTitle;
                }
                return i;
            });
            break;
        case 'editBody': 
            return posts.map(i => {
                if (i.id === action.payload.id) {
                    i.body = action.payload.newBody;
                }
                return i
            });
            break;
        case 'remove':
            return posts.filter(i => {
                return i.id !== action.payload.id;
            });
            break;
        default:
            return posts;
            break;
    }
}