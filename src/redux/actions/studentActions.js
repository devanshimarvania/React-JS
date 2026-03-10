import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  ADD_STUDENT_SUCCESS,
  UPDATE_STUDENT_SUCCESS,
  DELETE_STUDENT_SUCCESS,
} from './actionTypes';

const API_URL = 'http://localhost:5000/students';

export const fetchStudents = () => async (dispatch) => {
  dispatch({ type: FETCH_STUDENTS_REQUEST });

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch({ type: FETCH_STUDENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_STUDENTS_FAILURE, payload: error.message });
  }
};

export const addStudent = (studentData) => async (dispatch) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(studentData),
    });
    const newStudent = await response.json();
    dispatch({ type: ADD_STUDENT_SUCCESS, payload: newStudent });
  } catch (error) {
    console.error('Error adding student:', error);
  }
};

export const updateStudent = (id, updatedData) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });
    const updated = await response.json();
    dispatch({ type: UPDATE_STUDENT_SUCCESS, payload: updated });
  } catch (error) {
    console.error('Error updating student:', error);
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    dispatch({ type: DELETE_STUDENT_SUCCESS, payload: id });
  } catch (error) {
    console.error('Error deleting student:', error);
  }
};