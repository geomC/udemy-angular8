import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('reverse as string', () => {
    const pipe = new ReversePipe();
    const inputString = 'HELLO';
    const expectedOutputString = 'OLLEH';
    expect(pipe.transform(inputString)).toBe(expectedOutputString);
  });
});
