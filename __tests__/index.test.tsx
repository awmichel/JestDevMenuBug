import { renderRouter } from 'expo-router/testing-library';

// jest.mock('expo-dev-menu', () => ({
//   registerDevMenuItems: jest.fn(),
// }));

it('matches root snapshot', () => {
  const result = renderRouter();
  expect(result).toMatchSnapshot();
});
