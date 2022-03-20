import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// get user
const getWorkers = createAsyncThunk('workers/getWorkers', async () => {
    const res = await fetch(`http://localhost:8000/allWorkers`);
    const data = await res.json();
    return data;
});

export const workersSlice = createSlice({
    name: 'user',
    initialState: {
        workers: [],
        busyWorkers: [],
        availableWorkers: []
    },
    extraReducers: (builder) => {
        builder.addCase(getWorkers.fulfilled, (state, { payload }) => {
            state.workers.push(payload);
            state.busyWorkers = payload.filter((worker) => worker.workingStatus === 'Busy');
            state.availableWorkers = payload.filter((worker) => worker.workingStatus === 'Free');
        });
    }
});

export default workersSlice.reducer;
