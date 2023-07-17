import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: "true",
  status: null,
  item: "From store",
  messages: [{content: "Loading..."}],
};

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setLoadingState(state) {
      return {
        ...state,
        loading: !state.loading,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase("messages/FETCH_MESSAGES", (state) => {
      return {
        ...state,
        loading: true,
      };
    });

    builder.addCase("messages/FETCH_SUCCESS", (state, { payload }) => {
      return {
        ...state,
        loading: false,
        messages: payload,
      };
    });

    builder.addCase("messages/FETCH_ERROR", (state, { payload }) => {
      return {
        ...state,
        loading: false,
        status: "An error occurred",
      };
    });
  },
});

export const { setLoadingState } = messageSlice.actions;
export default messageSlice.reducer;
