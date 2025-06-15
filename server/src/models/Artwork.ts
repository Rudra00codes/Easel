import mongoose, { Document, Schema } from 'mongoose';

export interface IArtwork extends Document {
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
  createdAt: Date;
  updatedAt: Date;
}

const artworkSchema = new Schema<IArtwork>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  medium: {
    type: String,
    required: true,
    trim: true
  },
  dimensions: {
    width: {
      type: Number,
      required: true,
      min: 0
    },
    height: {
      type: Number,
      required: true,
      min: 0
    },
    unit: {
      type: String,
      required: true,
      enum: ['cm', 'inches'],
      default: 'cm'
    }
  },
  year: {
    type: Number,
    required: true,
    min: 1900,
    max: new Date().getFullYear()
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  images: [{
    type: String,
    required: true
  }],
  video: {
    type: String
  },
  status: {
    type: String,
    enum: ['available', 'sold', 'exhibition'],
    default: 'available'
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Indexes for better query performance
artworkSchema.index({ title: 'text', description: 'text', category: 'text', tags: 'text' });
artworkSchema.index({ status: 1, featured: 1 });
artworkSchema.index({ price: 1 });

export const Artwork = mongoose.model<IArtwork>('Artwork', artworkSchema); 