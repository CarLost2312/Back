// cloudinary.js
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'ddv3axohe', // tu cloud_name
  api_key: '842751944596391', // tu api_key
  api_secret: 'gIqkaFsib8xdn2BE2N3KqOuzdGU', // OJO: mantenelo seguro
});

export default cloudinary;
