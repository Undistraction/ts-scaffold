import { clerkSetup } from '@clerk/testing/playwright'
import { loadEnv } from 'load-env'

loadEnv()

const globalSetup = async () => {
  await clerkSetup()
}

export default globalSetup
