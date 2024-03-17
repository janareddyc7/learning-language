import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const sql = neon("postgresql://neondb_owner:ZycvVLeK6CI5@ep-dawn-water-a5xecyi0-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");
// @ts-ignore
const db = drizzle(sql, { schema });

export default db;
