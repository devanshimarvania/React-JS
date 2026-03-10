import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'http://localhost:3001/users';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res   = await fetch(API);
      const users = await res.json();
      const user  = users.find(
        (u) => u.username === username && u.password === password
      );
      if (!user) return rejectWithValue('Invalid username or password.');
      localStorage.setItem('authUser', JSON.stringify(user));
      return user;
    } catch {
      return rejectWithValue('Server error. Is JSON Server running on port 3001?');
    }
  }
);

// ── Slice ─────────────────────────────────────────────────────────────────────

const stored = localStorage.getItem('authUser');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user:            stored ? JSON.parse(stored) : null,
    isAuthenticated: !!stored,
    loading:         false,
    error:           null,
  },
  reducers: {
    logoutUser(state) {
      localStorage.removeItem('authUser');
      state.user            = null;
      state.isAuthenticated = false;
      state.error           = null;
    },
    clearAuthError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error   = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading        = false;
        state.user           = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error   = action.payload;
      });
  },
});

export const { logoutUser, clearAuthError } = authSlice.actions;
export default authSlice.reducer;