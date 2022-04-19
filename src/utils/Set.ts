export class MySet<E> extends Set<E> {
  hasAll(elements: E[]) {
    elements.forEach((element: E) => {
      if (!this.has(element)) {
        return false
      }
    })
    return true
  }
}