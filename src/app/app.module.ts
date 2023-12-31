import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';
import { UpdateUserComponent } from './components/admin/update-user/update-user.component';
import { ShowTransactionsComponent } from './components/admin/show-transactions/show-transactions.component';
import { ViewUserComponent } from './components/admin/view-user/view-user.component';
import { UserPageComponent } from './components/user/user-page/user-page.component';
import { UpdateUserCompleteComponent } from './components/user/update-user-complete/update-user-complete.component';
import { DepositComponent } from './components/user/deposit/deposit.component';
import { WithdrawComponent } from './components/user/withdraw/withdraw.component';
import { TransferMoneyComponent } from './components/user/transfer-money/transfer-money.component';
import { ShowPassbookComponent } from './components/user/show-passbook/show-passbook.component';
import { QueryPageComponent } from './components/admin/query-page/query-page.component';
import { NewRequestsComponent } from './components/admin/new-requests/new-requests.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { AddNewUserComponent } from './components/login/add-new-user/add-new-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AdminhomeComponent } from './components/admin/adminhome/adminhome.component';
import { TransactionComponent } from './components/admin/transaction/transaction.component';
import { SettingsComponent } from './components/admin/settings/settings.component';
import { QueryComponent } from './components/admin/query/query.component';
import { AllUserComponent } from './components/admin/all-user/all-user.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { UserDetailsComponent } from './components/admin/user-details/user-details.component';
import { AccountrequestComponent } from './components/admin/accountrequest/accountrequest.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    UpdateUserComponent,
    ShowTransactionsComponent,
    ViewUserComponent,
    UserPageComponent,
    UpdateUserCompleteComponent,
    DepositComponent,
    WithdrawComponent,
    TransferMoneyComponent,
    ShowPassbookComponent,
    QueryPageComponent,
    NewRequestsComponent,
    LoginPageComponent,
    AddNewUserComponent,
    NavbarComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    MainPageComponent,
    RegisterComponent,
    AdminLoginComponent,
    AdminhomeComponent,
    TransactionComponent,
    SettingsComponent,
    QueryComponent,
    AddUserComponent,
    AllUserComponent,
    UpdateUserComponent,
    TransactionComponent,
    // UserAccountsComponent,
    // UserPassbookComponent,
    // UserFixeddepositComponent,
    // UserQueryComponent,
    LoginPageComponent,
    UserPageComponent,
    RegisterComponent,
    UserDetailsComponent,
    AccountrequestComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
