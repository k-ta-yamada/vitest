const showPopupWarning = <T>(name: string, value: T, defaultValue?: T) => (...params: any[]) => {
  const formatedParams = params.map(p => JSON.stringify(p)).join(', ')

  console.warn(`Vitest encountered a \`${name}(${formatedParams})\` call that it cannot handle by default, so it returned \`${value}\`. Read more in https://vitest.dev/guide/browser#thread-blocking-dialogs.
If needed, mock the \`${name}\` call manually like:

\`\`\`
import { expect, vi } from "vitest"

vi.spyOn(window, "${name}")${defaultValue ? `.mockReturnValue(${JSON.stringify(defaultValue)})` : ''}
${name}(${formatedParams})
expect(${name}).toHaveBeenCalledWith(${formatedParams})
\`\`\``)
  return value
}

export const setupDialogsSpy = () => {
  globalThis.alert = showPopupWarning('alert', undefined)
  globalThis.confirm = showPopupWarning('confirm', false, true)
  globalThis.prompt = showPopupWarning('prompt', null, 'your value')
}
