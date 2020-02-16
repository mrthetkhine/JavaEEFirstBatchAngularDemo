import { LoginPipe } from './login.pipe';

describe('LoginPipe', () => {
  it('create an instance', () => {
    const pipe = new LoginPipe();
    expect(pipe).toBeTruthy();
  });
});
