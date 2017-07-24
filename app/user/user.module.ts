import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'

//this module is known as a feature module or a
  //lazy loadable feature
//difference between this and an app module is that here
  //we use CommonModule instead of BrowserModule
  //and we use the forChild method to register routes instead of
  //the forRoot method on the RouterModule
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(userRoutes)
    ],
    declarations: [
      ProfileComponent,
      LoginComponent
    ],
    providers: []
})

export class UserModule {

}
