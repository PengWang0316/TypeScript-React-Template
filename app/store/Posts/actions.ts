import axios from 'axios';

import {
  FETCH_POSTS_SUCCESS, PostsType, PostsActionType, UPDATE_POST_SUCCESS,
  PostType, ADD_NEW_POST_SUCCESS, DELETE_POST_SUCCESS,
} from './types';

const fetchPostsSuccess = (posts: PostsType): PostsActionType => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
});

const addNewPostSuccess = (post: PostType): PostsActionType => ({
  type: ADD_NEW_POST_SUCCESS,
  post,
});

const updatePostSuccess = (post: PostType): PostsActionType => ({
  type: UPDATE_POST_SUCCESS,
  post,
});

const deletePostSuccess = (postId: number): PostsActionType => ({
  type: DELETE_POST_SUCCESS,
  postId,
});

export const fetchPosts = (offset: number, limit: number) => async (disptch) => {
  const { data } = await axios.get('FETCH_POSTS_API', { params: { offset, limit } });
  disptch(fetchPostsSuccess(data));
};
export default fetchPosts;
