import { dirname } from "path"
import { fileURLToPath } from "url"

export function projectDir(path) {
  return dirname(fileURLToPath(path))
}
