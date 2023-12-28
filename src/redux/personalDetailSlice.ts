import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface PersonalDetailsState {
  data: {
    FirstName: string;
    LastName: string;
    Email: string;
    Address: string;
    PhoneNumber: string;
    Gender: string;
  };
}

const initialState: PersonalDetailsState = {
  data: {
    FirstName: "",
    LastName: "",
    Email: "",
    Address: "",
    PhoneNumber: "",
    Gender: "",
  },
};

export const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState,
  reducers: {
    storePersonalDetails: (
      state,
      action: PayloadAction<PersonalDetailsState["data"]>
    ) => {
      state.data = action.payload;
    },
    removePersonalDetails: (state) => {
      state.data = initialState.data;
    },
  },
});

export const getPersonalDetails = (state: RootState) =>
  state.personalDetails.data;

export const { storePersonalDetails, removePersonalDetails } =
  personalDetailsSlice.actions;

export default personalDetailsSlice.reducer;
