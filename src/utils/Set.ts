export class MySet<E> extends Set<E> {
  hasAll(elements: E[]) {
    let hasAll = true
    elements.forEach((element: E) => {
      if (!this.has(element)) {
        hasAll = false
      }
    })
    return hasAll
  }
}