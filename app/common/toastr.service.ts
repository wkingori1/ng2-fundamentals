//OpaqueToken is used to create a token which is used in the Dependency Injection
//registry in order to find the instance of the object we want
import { OpaqueToken } from '@angular/core'

//creates a token that I can then use to look up the toastr object inside of the dependency injection registry
export let TOASTR_TOKEN = new OpaqueToken('toastr')

export interface Toastr {
  success (msg: string, title?: string): void
  info (msg: string, title?: string): void
  warning (msg: string, title?: string): void
  error (msg: string, title?: string): void
}
