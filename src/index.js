import base64Content from './Hubble_M31Mosaic_2025_10552x2468_jpg_base64.txt';

export default {
  async fetch() {
    const img = Buffer.from(base64Content, 'base64');
    return new Response(img, {
      headers: {
        'Content-Type': 'image/jpeg'
      }
    });
  }
};
