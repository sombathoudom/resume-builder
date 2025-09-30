// apps/backend/src/config/db.ts
// NOTE: The Prisma client is generated to `src/generated/prisma` via the
// `output` setting in prisma/schema.prisma, so we must import from there
// instead of `@prisma/client`.
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export default prisma;
