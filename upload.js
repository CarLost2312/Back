import cloudinary from './cloudinary.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Para obtener la ruta absoluta si usás ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  try {
    const result = await cloudinary.uploader.upload(
      path.join(__dirname, 'imagen.jpg'), // reemplazá por tu imagen
      {
        folder: 'mi_carpeta', // opcional
        transformation: [
          { width: 500, height: 500, crop: 'limit' },
          { quality: 'auto' },
        ],
      }
    );

    console.log('Imagen subida:', result.secure_url);
  } catch (err) {
    console.error('Error al subir:', err);
  }
})();
