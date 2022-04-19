export class MyArray<E> extends Array<E> {
  hasAll(elements: E[]) {
    let hasAll = true
    elements.forEach((element: E) => {
      if (!this.includes(element)) {
        hasAll = false
      }
    })
    return hasAll
  }
}