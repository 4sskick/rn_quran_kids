module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    transform_regex: [
      'ts-jest',
      {tsconfig: './tsconfig.json' /* ts-jest config goes here in Jest */},
    ],
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  //   globals: {
  //     'ts-jest': {
  //       tsconfig: './tsconfig.json',
  //     },
  //   },
  // Add any other necessary configurations
};
