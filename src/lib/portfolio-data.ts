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
    title: "Urban Echo",
    client: "Velocity Footwear",
    category: "Social Spot",
    description: "High-energy social campaign for urban runners.",
    imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1200",
    details: "A comprehensive social media strategy including 15 short-form videos and 30 high-impact stills designed for Gen-Z engagement."
  },
  {
    id: "2",
    title: "Celestial Drift",
    client: "Nova Automotive",
    category: "Cosmic Monkey",
    description: "Cinematic launch film for the EV-9 series.",
    imageUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200",
    details: "Utilizing Unreal Engine 5 for virtual production, we created an otherworldly landscape to showcase the future of electric mobility."
  },
  {
    id: "3",
    title: "Monolith Identity",
    client: "Iron & Stone",
    category: "TG Entertainment",
    description: "Global rebranding for a leading architecture firm.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    details: "A complete overhaul of the brand's visual language, including custom typography and a bespoke digital presence."
  },
  {
    id: "4",
    title: "Neon Pulse",
    client: "Cyber Dynamics",
    category: "Social Spot",
    description: "Viral TikTok challenge for wearable tech.",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    details: "Achieved over 10M views in the first week through a carefully orchestrated influencer campaign and AI-driven content optimization."
  },
  {
    id: "5",
    title: "Liquid Gold",
    client: "Aurelia Spirits",
    category: "Cosmic Monkey",
    description: "Premium product photography and CGI for luxury vodka.",
    imageUrl: "https://images.unsplash.com/photo-1569058242253-92a9c71f9867?auto=format&fit=crop&q=80&w=1200",
    details: "Hyper-realistic liquid simulations combined with macro cinematography to emphasize the purity of the brand."
  },
  {
    id: "6",
    title: "The Visionary Series",
    client: "Luminary Foundation",
    category: "TG Entertainment",
    description: "Documentary series exploring the future of education.",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
    details: "A 5-part series captured across 3 continents, showcasing the impact of technology on remote learning communities."
  }
];
