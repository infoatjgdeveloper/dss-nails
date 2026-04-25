
import { resolveConfig } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

async function check() {
  const config = await resolveConfig({}, 'build');
  console.log('Environments:', Object.keys(config.environments || {}));
  const serverEnv = config.environments?.server;
  if (serverEnv) {
    console.log('Server Build Input:', serverEnv.build?.input);
  } else {
    console.log('Server environment not found in config');
  }
}

check();
