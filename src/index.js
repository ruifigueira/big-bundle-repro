import { DurableObject } from 'cloudflare:workers';

import base64Content from './Hubble_M31Mosaic_2025_10552x2468_jpg_base64.txt';

export class MyDurableObject extends DurableObject {
  constructor(state, env) {
    super(state, env);
  }

  async fetch() {
    const img = Buffer.from(base64Content, 'base64');
    return new Response(img, {
      headers: {
        'Content-Type': 'image/jpeg'
      }
    });
  }
}

export default {
  async fetch(request, env) {
    const id = env.MY_DURABLE_OBJECT.idFromName(`MY_DURABLE_OBJECT`);
    const stub = env.MY_DURABLE_OBJECT.get(id);
    return await stub.fetch(request);
  }
};
