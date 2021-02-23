import { FaCreditCard, FaBook, FaBriefcase} from 'react-icons/fa';
// import react from "react";

const sublinks = [
{
    page: 'Features',
    links: [
      { label: 'Link Shortening', icon: <FaCreditCard />, url: '/products' },
      { label: 'Branded Links', icon: <FaCreditCard />, url: '/products' },
      { label: 'Analytics', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'Resources',
    links: [
      { label: 'Blog', icon: <FaBook />, url: '/products' },
      { label: 'Developers', icon: <FaBook />, url: '/products' },
      { label: 'Support', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'Company',
    links: [
      { label: 'About', icon: <FaBriefcase />, url: '/products' },
      { label: 'Our Team', icon: <FaBriefcase />, url: '/products' },
      { label: 'Carrers', icon: <FaBriefcase />, url: '/products' },
      { label: 'Contact', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;