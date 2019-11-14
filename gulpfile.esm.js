import { series } from 'gulp'

import pipelineHelper from './helpers/pipeline'

import { babel as babelTask } from './tasks/babel'
import { clean as cleanTask } from './tasks/clean'
import { csslint as cssLintTask } from './tasks/css-lint'
import { dev as devTask } from './tasks/dev'
import { emailFix as emailFixTask } from './tasks/email-fix'
import { inheritance as inheritanceTask } from './tasks/inheritance'
import { sasslint as sassLintTask } from './tasks/sass-lint'
import { setup as setupTask } from './tasks/setup'
import { styles as stylesTask } from './tasks/styles'
import { svg as svgTask } from './tasks/svg'
import { watch as watchTask } from './tasks/watch'

export const babel = series(inheritanceTask, babelTask)
export const clean = cleanTask
export const csslint = cssLintTask
export const dev = series(pipelineHelper, inheritanceTask, babelTask, stylesTask, devTask, watchTask)
export const emailfix = emailFixTask
export const inheritance = inheritanceTask
export const sasslint = sassLintTask
export const setup = setupTask
export const styles = series(inheritanceTask, stylesTask)
export const svg = series(inheritanceTask, svgTask)
export const watch = watchTask

export { default as default } from './tasks/default'
