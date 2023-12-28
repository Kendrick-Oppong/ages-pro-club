import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface BootCampDetailsState {
  data: {
    Programme: string;
    Year: string;
    Experience: string;
    Club: string;
    Heard: string;
    Expectation: string;
  };
}

const initialState: BootCampDetailsState = {
  data: {
    Programme: "",
    Year: "",
    Experience: "",
    Club: "",
    Heard: "",
    Expectation: "",
  },
};

export const bootcampDetailsSlice = createSlice({
  name: "bootcampDetails",
  initialState,
  reducers: {
    storeBootcampDetails: (
      state,
      action: PayloadAction<BootCampDetailsState["data"]>
    ) => {
      state.data = action.payload;
    },

    removeBootcampDetails: (state) => {
      state.data = initialState.data;
    },
  },
});

export const getBootcampDetails = (state: RootState) =>
  state.bootcampDetails.data;

export const { storeBootcampDetails, removeBootcampDetails } =
  bootcampDetailsSlice.actions;

export default bootcampDetailsSlice.reducer;
