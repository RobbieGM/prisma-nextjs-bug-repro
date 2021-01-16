import { PrismaClient } from "../../../database/prisma/generated/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const account = await prisma.account.findUnique({ where: { id: 0 } });
  res.statusCode = 200;
  res.json(account);
};
