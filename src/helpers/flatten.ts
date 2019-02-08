export const flatten = <T>(arr: any[]): T[] =>
  arr.reduce((prev, curr) => {
    if (!Array.isArray(curr)) {
      return [...prev, curr]
    }

    return [...prev, ...flatten(curr)]
  }, [])
