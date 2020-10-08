# Next.js/Prisma database bug reproduction

1. Clone this git repository
2. Run `npm install` in both the `database` and `next-app` directories
3. Run `npm run dev` in the `next-app` directory
4. Visit https://localhost:3000/api/hello in your browser
5. Look at the console - you should see an error caused by Prisma Client looking in the root directory for the binary:

```
Query engine binary for current platform "windows" could not be found.
This probably happens, because you built Prisma Client on a different platform.
(Prisma Client looked in "\query-engine-windows.exe")
```
