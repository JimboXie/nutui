import Steps from './steps.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Steps)

export type { StepsProps } from './steps.vue'

export type { StepsDirection } from './types'

export type StepsInstance = ComponentPublicInstance & InstanceType<typeof Steps>

export { Steps, Steps as default }
