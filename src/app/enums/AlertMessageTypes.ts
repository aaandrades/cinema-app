export const AlertsMessagesType = {
  INITIAl_MESSAGE: {
    title: '',
    message: '',
    type: '',
  },
  GENERIC_ERROR: {
    title: 'Oops, its looks wrong...',
    message: 'We are experiencing technical problems, please try again.',
    type: '',
  },
  INVALID_LOGIN: {
    title: 'Your login failed :(',
    message: 'Please verify User/Password and try again',
    type: 'error',
  },
  FAILED_UPDATE_INFORMATION: {
    title: 'Something went wrong :(',
    message: 'We cannot update the information, please try again.',
    type: 'error',
  },
  ERROR_FETCHING_MOVIES: {
    title: 'We are sorry',
    message: 'The service of movies is currently unavailable, please try again',
    type: 'error',
  },
  SUCCESS_UPDATE: {
    title: 'Information Updated',
    message: 'The information was updated successfully!',
    type: 'success',
  },
};

export interface AlertsMessagesTypeInterface {
  title: string;
  message: string;
  type: string;
}
