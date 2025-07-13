'use client';

import { StoryLayout } from '@/components/minimalist-portfolio';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const colorSchemes = ['default'] as const;
type ColorScheme = (typeof colorSchemes)[number];

export default function Home() {
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>('default');
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <StoryLayout />
      </motion.div>
    </div>
  );
}
