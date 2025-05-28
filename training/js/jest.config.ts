import { config } from "process";

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  displayName: 'js',
  preset: '../../jest.preset.js',
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};

export default config;