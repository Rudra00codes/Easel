import { motion } from 'framer-motion';

interface ArtworkCardProps {
  id: string;
  title: string;
  imageUrl: string;
  artist: string;
  price: number;
  category: string;
  onClick?: () => void;
}

export default function ArtworkCard({
  title,
  imageUrl,
  artist,
  price,
  category,
  onClick
}: ArtworkCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-zinc-400 text-sm mb-2">{artist}</p>
        <div className="flex justify-between items-center">
          <span className="text-emerald-500 font-medium">${price}</span>
          <span className="text-zinc-500 text-sm">{category}</span>
        </div>
      </div>
    </motion.div>
  );
} 