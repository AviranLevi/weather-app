import * as actionType from './types';

export const enableDarkMode = (bool) => ({ type: actionType.DARK_MODE, payload: bool });

export const isLoading = (bool) => ({ type: actionType.IS_LOADING, payload: bool });
