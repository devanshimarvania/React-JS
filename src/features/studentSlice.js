import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'http://localhost:3001/students';

export const fetchStudents = createAsyncThunk(
  'students/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error('Failed to fetch students');
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addStudent = createAsyncThunk(
  'students/add',
  async (student, { rejectWithValue }) => {
    try {
      const res = await fetch(API, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(student),
      });
      if (!res.ok) throw new Error('Failed to add student');
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateStudent = createAsyncThunk(
  'students/update',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API}/${id}`, {
        method:  'PUT',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...data, id }),
      });
      if (!res.ok) throw new Error('Failed to update student');
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteStudent = createAsyncThunk(
  'students/delete',
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete student');
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    list:    [],
    loading: false,
    error:   null,
  },
  reducers: {
    clearStudentError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending,   (state) => { state.loading = true;  state.error = null; })
      .addCase(fetchStudents.fulfilled, (state, action) => { state.loading = false; state.list = action.payload; })
      .addCase(fetchStudents.rejected,  (state, action) => { state.loading = false; state.error = action.payload; })

      .addCase(addStudent.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      .addCase(updateStudent.fulfilled, (state, action) => {
        const idx = state.list.findIndex((s) => s.id === action.payload.id);
        if (idx !== -1) state.list[idx] = action.payload;
      })

      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.list = state.list.filter((s) => s.id !== action.payload);
      });
  },
});

export const { clearStudentError } = studentSlice.actions;
export default studentSlice.reducer;