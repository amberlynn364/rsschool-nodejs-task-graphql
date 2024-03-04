import { PrismaClient } from "@prisma/client";

export interface PrismaContext {
  prisma: PrismaClient;
}

export const createPrismaContext = (prisma: PrismaClient): PrismaContext => ({ prisma });