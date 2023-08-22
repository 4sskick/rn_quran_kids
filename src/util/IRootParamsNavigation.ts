// if have a params gonna passing between screen could be set like this:
// ex. auth: {<key_param_obj>: <value_param_obj>}

export type RootStackParamList = {
  auth: undefined;
  login: {name: string};
  register: undefined;
  forgotpassword: undefined;
};
