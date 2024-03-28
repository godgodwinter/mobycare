import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
    isVisible: boolean;
}

const initialState: SidebarState = {
    isVisible: false,
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isVisible = !state.isVisible;
        },
    },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
