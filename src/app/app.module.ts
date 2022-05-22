import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClient, HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {routing} from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {LayoutModule} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import { UserComponent } from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ChangePasswordComponent} from './user/change-password/change-password.component';
import {DetailsComponent} from './user/details/details.component';
import {HttpJwtInterceptor} from './_helpers/http.jwt.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ChangePasswordComponent,
    DetailsComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    MatFormFieldModule,
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    FlexModule,
    ExtendedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpJwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
