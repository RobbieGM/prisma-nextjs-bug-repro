# Next.js/Prisma database bug reproduction

1. Clone this git repository
2. Run `npm install` in both the `database` and `next-app` directories
3. Run `npx prisma generate` in the `database` directory
4. Run `npm run dev` in the `next-app` directory
5. Visit https://localhost:3000/api/hello in your browser
6. Look at the console - you should see an error caused by Prisma Client looking in the root directory for the binary:

```
error - ../database/prisma/generated/client/runtime/index.js:59322:0
Module not found: Can't resolve 'string_decoder/'
  59320 |     if (options.encoding) {
  59321 |       if (!StringDecoder)
> 59322 |         StringDecoder = require("string_decoder/").StringDecoder;
  59323 |       this.decoder = new StringDecoder(options.encoding);
  59324 |       this.encoding = options.encoding;
  59325 |     }
Error from chokidar (C:\): Error: EBUSY: resource busy or locked, lstat 'C:\DumpStack.log.tmp'
Error from chokidar (C:\): Error: EBUSY: resource busy or locked, lstat 'C:\hiberfil.sys'
Error from chokidar (C:\): Error: EBUSY: resource busy or locked, lstat 'C:\pagefile.sys'
Error from chokidar (C:\): Error: EBUSY: resource busy or locked, lstat 'C:\swapfile.sys'
```
