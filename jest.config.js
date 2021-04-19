module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    './jest.setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js'
  ],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|react-native-iphone-x-helper|aws-amplify-react-native|@aws-sdk/eventstream-serde-browser|@react-native-community/masked-view))"
  ]
};
