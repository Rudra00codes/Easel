import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Artwork {
  id: string;
  title: string;
  description: string;
  price: number;
  medium: string;
  dimensions: {
    width: number;
    height: number;
    unit: string;
  };
  year: number;
  category: string;
  tags: string[];
  images: string[];
  video?: string;
  status: 'available' | 'sold' | 'exhibition';
  featured: boolean;
}

interface ArtworkState {
  artworks: Artwork[];
  featuredArtworks: Artwork[];
  currentArtwork: Artwork | null;
  loading: boolean;
  error: string | null;
  filters: {
    category: string | null;
    status: string | null;
    minPrice: number | null;
    maxPrice: number | null;
    search: string | null;
  };
  pagination: {
    currentPage: number;
    totalPages: number;
    total: number;
  };
}

const initialState: ArtworkState = {
  artworks: [],
  featuredArtworks: [],
  currentArtwork: null,
  loading: false,
  error: null,
  filters: {
    category: null,
    status: null,
    minPrice: null,
    maxPrice: null,
    search: null,
  },
  pagination: {
    currentPage: 1,
    totalPages: 1,
    total: 0,
  },
};

const artworkSlice = createSlice({
  name: 'artwork',
  initialState,
  reducers: {
    fetchArtworksStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchArtworksSuccess: (state, action: PayloadAction<{
      artworks: Artwork[];
      totalPages: number;
      total: number;
    }>) => {
      state.loading = false;
      state.artworks = action.payload.artworks;
      state.pagination.totalPages = action.payload.totalPages;
      state.pagination.total = action.payload.total;
    },
    fetchArtworksFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchFeaturedArtworksSuccess: (state, action: PayloadAction<Artwork[]>) => {
      state.featuredArtworks = action.payload;
    },
    setCurrentArtwork: (state, action: PayloadAction<Artwork>) => {
      state.currentArtwork = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<ArtworkState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.pagination.currentPage = 1; // Reset to first page when filters change
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.pagination.currentPage = action.payload;
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.pagination.currentPage = 1;
    },
  },
});

export const {
  fetchArtworksStart,
  fetchArtworksSuccess,
  fetchArtworksFailure,
  fetchFeaturedArtworksSuccess,
  setCurrentArtwork,
  setFilters,
  setPage,
  clearFilters,
} = artworkSlice.actions;

export default artworkSlice.reducer; 