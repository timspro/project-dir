import { dirname } from "path"
import { fileURLToPath } from "url"

const thisProjectDir = dirname(fileURLToPath(import.meta.url))

export const projectDir = dirname(dirname(thisProjectDir))
