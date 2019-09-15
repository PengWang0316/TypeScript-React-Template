export const FETCH_POSTS_SUCCESS = 'fetchPostsSuccess';
export const ADD_NEW_POST_SUCCESS = 'addNewPostSuccess';
export const DELETE_POST_SUCCESS = 'deletePostSuccess';
export const UPDATE_POST_SUCCESS = 'updatePostSuccess';

export interface PostType {
  id?: number;
  title: string;
  date?: string;
  content: string;
}

export type PostsType = PostType[] | null;

export interface PostsActionType {
  type: string;
  posts?: PostsType;
  post?: PostType;
  postId?: number;
}
