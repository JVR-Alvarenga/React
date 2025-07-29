import { Dispatch } from "react";
import { PostListType } from "./PostListType"
import { listActions } from "@/reducers/postReducer";

export type PostContextType = {
    posts: PostListType[];
    dispatch: Dispatch<listActions>;
}