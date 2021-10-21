import { projectDir } from "./index.js"

test("project-dir", () => {
  expect(projectDir(import.meta.url)).toEqual(expect.stringMatching(/project-dir$/u))
})
