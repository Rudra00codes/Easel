import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  modal: {
    isOpen: boolean;
    type: string | null;
    data: any;
  };
  notifications: {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    id: string;
  }[];
  isSidebarOpen: boolean;
}

const initialState: UIState = {
  theme: 'light',
  sidebarOpen: false,
  modal: {
    isOpen: false,
    type: null,
    data: null,
  },
  notifications: [],
  isSidebarOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    openModal: (state, action: PayloadAction<{ type: string; data?: any }>) => {
      state.modal = {
        isOpen: true,
        type: action.payload.type,
        data: action.payload.data,
      };
    },
    closeModal: (state) => {
      state.modal = {
        isOpen: false,
        type: null,
        data: null,
      };
    },
    addNotification: (state, action: PayloadAction<Omit<UIState['notifications'][0], 'id'>>) => {
      state.notifications.push({
        ...action.payload,
        id: Date.now().toString(),
      });
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

export const {
  toggleTheme,
  toggleSidebar,
  openModal,
  closeModal,
  addNotification,
  removeNotification,
} = uiSlice.actions;

export default uiSlice.reducer; 