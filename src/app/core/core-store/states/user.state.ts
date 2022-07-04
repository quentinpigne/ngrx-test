export interface UserState {
  user: string;
  isLoading: boolean;
  isError: boolean;
}

export const initialState: UserState = {
  user: '',
  isLoading: false,
  isError: false,
};
