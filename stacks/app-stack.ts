import { NextjsSite, RDS, StackContext } from 'sst/constructs'

export function AppStack({ stack, app }: StackContext) {

  const rds = new RDS(stack, "Database", {
    engine: "postgresql13.9",
    defaultDatabaseName: "test",
    scaling: {
      minCapacity: "ACU_2",
      maxCapacity: "ACU_2",
    }
  })

  const site = new NextjsSite(stack, "Site", {
    path: "apps/web",
    bind: [rds]
  })

  stack.addOutputs({
    URL: site.url,
  })
}
