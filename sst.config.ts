import { type SSTConfig } from "sst"

import { AppStack } from "./stacks/app-stack"

export default {
  config(input) {
    return {
      name: "test",
      region: "eu-west-1",
    }
  },
  stacks(app) {
    app.stack(AppStack, {
      description: `Example ${app.stage} environment`,
    })
  },
}
