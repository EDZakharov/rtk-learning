import { ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { extraArgument, store } from './store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RootState = any;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<R = void> = ThunkAction<
  R,
  RootState,
  typeof extraArgument,
  UnknownAction
>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const useAppSelector = useSelector.withTypes<RootState>();
