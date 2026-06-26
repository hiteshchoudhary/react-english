import { describe, expect, it } from 'vitest';
import authReducer, { login, logout } from './authSlice';

describe('authSlice', () => {
  it('sets authenticated state on login', () => {
    const state = authReducer(undefined, login({ userData: { name: 'Ada' } }));

    expect(state.status).toBe(true);
    expect(state.userData).toEqual({ name: 'Ada' });
  });

  it('clears authentication state on logout', () => {
    const state = authReducer(
      { status: true, userData: { name: 'Ada' } },
      logout()
    );

    expect(state.status).toBe(false);
    expect(state.userData).toBeNull();
  });
});
