export type AnyObject = Record<string, any>
export type EmptyObject = Record<string, string>
export type ValueOf<T, ValueType extends keyof T = keyof T> = T[ValueType]
