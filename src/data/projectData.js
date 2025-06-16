

// --- ASSET IMPORTS ---
import defaultBg from '../assets/videos/atherApex.mp4';
import kiaImage from '../assets/images/Kia_Seltos_Tonic_Desktop_01.avif';
import bmwImage from '../assets/images/BMW_X5_Desktop.avif';
import naturalsImage from '../assets/images/Creambell.webp';
import shazeVideo from '../assets/videos/shaze.mp4';

import cgiVfxImage from '../assets/images/vfx_thumb_900px.avif';
import configuratorImage from '../assets/images/product.avif';
import arImage from '../assets/images/lensloop.avif';
import vrImage from '../assets/images/VR-thumb_900px.avif';
import digital from '../assets/images/install_thumb_900px.avif';
import Interative from '../assets/images/retail.avif';

// --- DATA EXPORTS ---
export const projectData = [
  { id: 1, category: 'Automotive CGI', title: 'Ather 450 Apex', type: 'video', asset: defaultBg },
  { id: 2, category: 'Automotive CGI', title: 'KIA Seltos', type: 'image', asset: kiaImage },
  { id: 3, category: 'Automotive CGI', title: 'BMW X5', type: 'image', asset: bmwImage },
  { id: 4, category: 'F&B CGI', title: 'Naturals Now', type: 'image', asset: naturalsImage },
  { id: 5, category: 'CGI & VFX', title: 'Shaze', type: 'video', asset: shazeVideo },
];

export const defaultBackground = { type: 'video', asset: defaultBg };
export const defaultProject = projectData[0];

export const automotiveServices = ['Campaign Images', '360 configurator - Exterior', '360 configurator - Interior', ['Animations', 'Interior images'], 'WebGL Experiences', ['AR experience', 'VR experience']];
export const foodServices = ['Renders for packaging', 'Campaign images', 'Videos & Animations', 'AR experiences with packaging'];





// --- NEW DATA EXPORT ---
export const servicesData = [
  {
    title: 'CGI & VFX',
    image: cgiVfxImage,
    description: "Our CGI & VFX services bring products to life with a level of realistic detail that's often time-consuming and hard to achieve with photography. Our expert team ensures highest quality output in the quickest timeframe possible."
  },
  {
    title: 'Product Configurators',
    image: configuratorImage,
    description: "We craft tools that allow users to customise the components and features of a product by colour, material, shape, characteristics or function, to experience the product online in all its virtually realistic glory."
  },
  {
    title: 'Augmented Reality',
    image: arImage,
    description: "We use Augmented Reality to blend interactive digital elements with stunning visual overlays, haptic feedback, and other sensory projections to artfully immerse customers and products into real-world environments."
  },
  {
    title: 'Virtual Reality',
    image: vrImage,
    description: "Near-reality environments are something we’ve been passionately creating for years. We build digital spaces for people to become a part of and explore with a sense of awe and adventure."
  },
  {
    title: 'Digital Installations',
    image: digital,
    description: "Our fascination for using digital technology to create magical interactions and imaginative ambiences never ceases. We’re always seeking new ways to actively integrate the environment, performers and audience into our installations."
  },
  {
    title: 'Interactive Retail Apps',
    image: Interative,
    description: "Retail technology will continue to play an instrumental role in digitising the shopping experience. We create easy-to-use, interactive experiences, or layer technologies for a more intricate, feature-rich experience for tech-savvy shoppers."
  }
];