interface storageFunType {
  getItem(key: string)
  setItem(key: string, value): void
  removeItem(key: string): void
  clear(): void
}

// sessionStorage  因为每次进行对象存储的时候要进行转化就很麻烦，所以每次就封装函数直接调用
class sessionStorageProxy implements storageFunType {
  private storage: storageFunType
  constructor(storageModel: storageFunType) {
    this.storage = storageModel
  }
  getItem(key: string) {
    return JSON.parse(this.storage.getItem(key)) || null
  }
  setItem(key: string, value): void {
    this.storage.setItem(key, JSON.stringify(value))
  }
  removeItem(key: string): void {
    this.storage.removeItem(key)
  }
  clear(): void {
    this.storage.clear()
  }
}
// 本地储存也一样，只要继承一次就行
class localStorageProxy extends sessionStorageProxy implements storageFunType {
  constructor(localStorage: storageFunType) {
    super(localStorage)
  }
}

export const storageSession = new sessionStorageProxy(sessionStorage) //调用系统的session
export const storageLocal = new localStorageProxy(localStorage)
