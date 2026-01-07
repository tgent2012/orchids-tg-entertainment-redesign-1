export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: "Social Spot" | "Cosmic Monkey" | "TG Entertainment";
  description: string;
  imageUrl: string;
  details: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Adidas x Kylie",
    client: "Adidas",
    category: "Social Spot",
    description: "High-impact campaign featuring Kylie Jenner.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8c69b3a2-5933-485e-a6c8-06b4e3f0e72e/adidas-Kylie-resized-1767768770256.jpg?width=8000&height=8000&resize=contain",
    details: "A comprehensive social media strategy designed for global engagement."
  },
  {
    id: "2",
    title: "Pulsar Stunts",
    client: "Bajaj Pulsar",
    category: "Cosmic Monkey",
    description: "Cinematic stunt photography for India's No.1 sports bike.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8c69b3a2-5933-485e-a6c8-06b4e3f0e72e/ponmudi-3-resized-1767768778627.jpg?width=8000&height=8000&resize=contain",
    details: "Capturing high-octane action with precise timing and lighting."
  },
  {
    id: "3",
    title: "Urban Burnout",
    client: "Bajaj Pulsar",
    category: "Cosmic Monkey",
    description: "Gritty urban burnout showcase.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8c69b3a2-5933-485e-a6c8-06b4e3f0e72e/ponmudi-burnout-edit-2-resized-1767768778849.jpg?width=8000&height=8000&resize=contain",
    details: "Post-production mastery to blend action and atmosphere."
  },
  {
    id: "4",
    title: "High Speed Drift",
    client: "Bajaj Pulsar",
    category: "Cosmic Monkey",
    description: "Dynamic motion capture on open roads.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8c69b3a2-5933-485e-a6c8-06b4e3f0e72e/ponmudi-resized-1767768778627.jpg?width=8000&height=8000&resize=contain",
    details: "Cinematic storytelling through speed and perspective."
  },
  {
    id: "5",
    title: "Landmark of Luxury",
    client: "DAMAC Properties",
    category: "TG Entertainment",
    description: "High-end fashion integration with luxury real estate.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8c69b3a2-5933-485e-a6c8-06b4e3f0e72e/damac-3-resized-1767768784949.jpg?width=8000&height=8000&resize=contain",
    details: "Elevating brand identity through visual elegance."
  },
  {
    id: "6",
    title: "YSL Panther Series I",
    client: "Saint Laurent",
    category: "Social Spot",
    description: "Bespoke fashion photography with panther elements.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8c69b3a2-5933-485e-a6c8-06b4e3f0e72e/1-resized-1767768797685.jpg?width=8000&height=8000&resize=contain",
    details: "Blending wild nature with high fashion."
  },
  {
    id: "7",
    title: "YSL Panther Series II",
    client: "Saint Laurent",
    category: "Social Spot",
    description: "Striking portraits for the Panther collection.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8c69b3a2-5933-485e-a6c8-06b4e3f0e72e/2-resized-1767768797635.jpg?width=8000&height=8000&resize=contain",
    details: "Focusing on intensity and brand heritage."
  },
  {
    id: "8",
    title: "YSL Panther Series III",
    client: "Saint Laurent",
    category: "Social Spot",
    description: "Ethereal lighting in high-fashion storytelling.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8c69b3a2-5933-485e-a6c8-06b4e3f0e72e/3-resized-1767768797635.jpg?width=8000&height=8000&resize=contain",
    details: "Creative direction for global digital platforms."
  },
  {
    id: "9",
    title: "YSL Panther Series IV",
    client: "Saint Laurent",
    category: "Social Spot",
    description: "Masculine elegance meets wild aesthetics.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8c69b3a2-5933-485e-a6c8-06b4e3f0e72e/4-1767768797440.jpg?width=8000&height=8000&resize=contain",
    details: "Expanding the visual narrative of the panther series."
  },
  {
    id: "10",
    title: "YSL Panther Series V",
    client: "Saint Laurent",
    category: "Social Spot",
    description: "Final chapter of the Panther campaign.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/8c69b3a2-5933-485e-a6c8-06b4e3f0e72e/5-resized-1767768797637.jpg?width=8000&height=8000&resize=contain",
    details: "A masterclass in AI-augmented creative production."
  }
];
