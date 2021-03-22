import { add } from '../script';

test('over 1000', () => {
  expect(add("add", "1", "1000")).toBe("too big");
});

