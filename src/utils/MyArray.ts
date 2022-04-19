export class MyArray<E> extends Array<E> {
  hasAll(elements: E[]) {
    let hasAll = true
    elements.forEach((element: E) => {
      if (element in this) {
        hasAll = false
      }
    })
    return hasAll
  }
}