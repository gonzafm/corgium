import { config } from "process";

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  displayName: 'js',
  preset: '../../jest.preset.js',
  testEnvironment: "node",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    "^.+\.[tj]sx?$": ["ts-jest",{}],
  },
};

export default config;