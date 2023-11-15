import { db } from '../../../db'
import { userTable } from '../../../db/schema'


const handler = async (req: Request) => {
  const users = await db.select().from(userTable)

  return Response.json({ users })
}

export { handler as GET }
