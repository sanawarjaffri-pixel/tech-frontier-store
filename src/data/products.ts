export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory?: string;
  sku: string;
  image: string;
  images?: string[];
  inStock: boolean;
  featured?: boolean;
  isNew?: boolean;
  specs?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Graphics Cards",
    slug: "graphics-cards",
    description: "High-performance GPUs for gaming, AI, and professional workloads",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop",
    productCount: 24,
  },
  {
    id: "2",
    name: "Routers & Switches",
    slug: "routers-switches",
    description: "Enterprise-grade networking equipment for reliable connectivity",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    productCount: 18,
  },
  {
    id: "3",
    name: "Laptop Hard Drives",
    slug: "laptop-hard-drives",
    description: "SSDs and HDDs for laptop storage upgrades",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
    productCount: 32,
  },
  {
    id: "4",
    name: "Server Hard Drives",
    slug: "server-hard-drives",
    description: "Enterprise storage solutions for data centers and servers",
    image: "https://images.unsplash.com/photo-1600348712270-5af9e3590f66?w=400&h=300&fit=crop",
    productCount: 28,
  },
  {
    id: "5",
    name: "Power Supplies",
    slug: "power-supplies",
    description: "Reliable PSUs for workstations and servers",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop",
    productCount: 15,
  },
  {
    id: "6",
    name: "Computer Accessories",
    slug: "computer-accessories",
    description: "Essential peripherals and accessories for your setup",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    productCount: 42,
  },
];

export const products: Product[] = [
  // Graphics Cards
  {
    id: "gc-001",
    title: "NVIDIA GeForce RTX 4090 24GB GDDR6X",
    description: "The ultimate GPU for creators and gamers. Powered by the NVIDIA Ada Lovelace architecture with 24GB GDDR6X memory, ray tracing, and DLSS 3.",
    price: 1599.99,
    originalPrice: 1799.99,
    category: "Graphics Cards",
    sku: "MAG-GC-4090-24G",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=400&fit=crop",
    inStock: true,
    featured: true,
    specs: { "Memory": "24GB GDDR6X", "Boost Clock": "2520 MHz", "CUDA Cores": "16384", "TDP": "450W" },
  },
  {
    id: "gc-002",
    title: "AMD Radeon RX 7900 XTX 24GB",
    description: "Next-gen gaming performance with AMD RDNA 3 architecture. Features 24GB GDDR6 memory and advanced ray tracing capabilities.",
    price: 949.99,
    category: "Graphics Cards",
    sku: "MAG-GC-7900XTX",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&h=400&fit=crop",
    inStock: true,
    featured: true,
    specs: { "Memory": "24GB GDDR6", "Boost Clock": "2500 MHz", "Stream Processors": "6144", "TDP": "355W" },
  },
  {
    id: "gc-003",
    title: "NVIDIA GeForce RTX 4070 Ti 12GB",
    description: "Outstanding 1440p gaming performance with Ada Lovelace architecture, DLSS 3 and ray tracing support.",
    price: 799.99,
    originalPrice: 849.99,
    category: "Graphics Cards",
    sku: "MAG-GC-4070TI",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=400&fit=crop",
    inStock: true,
    isNew: true,
    specs: { "Memory": "12GB GDDR6X", "Boost Clock": "2610 MHz", "CUDA Cores": "7680", "TDP": "285W" },
  },
  // Routers & Switches
  {
    id: "rs-001",
    title: "Cisco Catalyst 9300 48-Port PoE+ Switch",
    description: "Enterprise-class stackable switch with advanced security, SD-Access, and full PoE+ support across all 48 ports.",
    price: 4299.99,
    category: "Routers & Switches",
    sku: "MAG-RS-C9300-48P",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    inStock: true,
    featured: true,
    specs: { "Ports": "48x 1GbE PoE+", "PoE Budget": "740W", "Switching Capacity": "480 Gbps", "Stackable": "Yes" },
  },
  {
    id: "rs-002",
    title: "Ubiquiti UniFi Dream Machine Pro",
    description: "All-in-one enterprise network appliance with built-in switch, security gateway, and UniFi controller.",
    price: 379.99,
    category: "Routers & Switches",
    sku: "MAG-RS-UDM-PRO",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    inStock: true,
    isNew: true,
    specs: { "Ports": "8x 1GbE + 2x 10G SFP+", "Throughput": "3.5 Gbps", "HDD Bay": "3.5\" SATA", "Controller": "Built-in" },
  },
  // Laptop Hard Drives
  {
    id: "lhd-001",
    title: "Samsung 990 PRO 2TB NVMe M.2 SSD",
    description: "PCIe 4.0 NVMe M.2 SSD with sequential read speeds up to 7,450 MB/s. Ideal for gaming and creative workflows.",
    price: 169.99,
    originalPrice: 199.99,
    category: "Laptop Hard Drives",
    sku: "MAG-LHD-990PRO-2T",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&h=400&fit=crop",
    inStock: true,
    featured: true,
    specs: { "Capacity": "2TB", "Interface": "PCIe 4.0 NVMe", "Read Speed": "7,450 MB/s", "Write Speed": "6,900 MB/s" },
  },
  {
    id: "lhd-002",
    title: "WD Black SN850X 1TB NVMe SSD",
    description: "High-performance gaming SSD with up to 7,300 MB/s read speeds and Game Mode 2.0 technology.",
    price: 89.99,
    category: "Laptop Hard Drives",
    sku: "MAG-LHD-SN850X-1T",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&h=400&fit=crop",
    inStock: true,
    specs: { "Capacity": "1TB", "Interface": "PCIe 4.0 NVMe", "Read Speed": "7,300 MB/s", "Write Speed": "6,300 MB/s" },
  },
  // Server Hard Drives
  {
    id: "shd-001",
    title: "Seagate Exos X20 20TB Enterprise HDD",
    description: "Enterprise-class helium HDD designed for hyperscale data centers with 2.5M hours MTBF.",
    price: 349.99,
    category: "Server Hard Drives",
    sku: "MAG-SHD-EXOS-20T",
    image: "https://images.unsplash.com/photo-1600348712270-5af9e3590f66?w=600&h=400&fit=crop",
    inStock: true,
    featured: true,
    specs: { "Capacity": "20TB", "Interface": "SATA 6Gb/s", "RPM": "7200", "Cache": "256MB" },
  },
  {
    id: "shd-002",
    title: "Samsung PM9A3 3.84TB U.2 NVMe SSD",
    description: "Data center NVMe SSD with PCIe Gen4 interface, delivering exceptional IOPS and endurance.",
    price: 599.99,
    originalPrice: 699.99,
    category: "Server Hard Drives",
    sku: "MAG-SHD-PM9A3-4T",
    image: "https://images.unsplash.com/photo-1600348712270-5af9e3590f66?w=600&h=400&fit=crop",
    inStock: true,
    isNew: true,
    specs: { "Capacity": "3.84TB", "Interface": "U.2 NVMe PCIe 4.0", "Read IOPS": "800K", "Endurance": "1 DWPD" },
  },
  // Power Supplies
  {
    id: "ps-001",
    title: "Corsair HX1500i 1500W 80+ Platinum PSU",
    description: "Ultra-high wattage fully modular power supply with 80+ Platinum efficiency and Corsair iCUE compatibility.",
    price: 349.99,
    category: "Power Supplies",
    sku: "MAG-PS-HX1500I",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&h=400&fit=crop",
    inStock: true,
    specs: { "Wattage": "1500W", "Efficiency": "80+ Platinum", "Modular": "Fully Modular", "Fan": "140mm FDB" },
  },
  {
    id: "ps-002",
    title: "Seasonic PRIME TX-850 850W Titanium",
    description: "Premium 80+ Titanium certified PSU with hybrid fan control and 12-year warranty.",
    price: 249.99,
    originalPrice: 279.99,
    category: "Power Supplies",
    sku: "MAG-PS-PRIME-850",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&h=400&fit=crop",
    inStock: true,
    isNew: true,
    specs: { "Wattage": "850W", "Efficiency": "80+ Titanium", "Modular": "Fully Modular", "Warranty": "12 Years" },
  },
  // Computer Accessories
  {
    id: "ca-001",
    title: "Logitech MX Master 3S Wireless Mouse",
    description: "Advanced wireless mouse with 8K DPI tracking, MagSpeed scroll wheel, and multi-device support.",
    price: 99.99,
    category: "Computer Accessories",
    sku: "MAG-CA-MXM3S",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop",
    inStock: true,
    specs: { "DPI": "8000", "Battery": "70 days", "Connectivity": "Bluetooth + USB", "Buttons": "7" },
  },
  {
    id: "ca-002",
    title: "Samsung 34\" Ultrawide QHD Monitor",
    description: "34-inch ultrawide WQHD monitor with 100Hz refresh rate, HDR10, and USB-C connectivity.",
    price: 449.99,
    originalPrice: 529.99,
    category: "Computer Accessories",
    sku: "MAG-CA-S34UW",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop",
    inStock: true,
    featured: true,
    specs: { "Size": "34\"", "Resolution": "3440x1440", "Refresh Rate": "100Hz", "Panel": "VA" },
  },
];
