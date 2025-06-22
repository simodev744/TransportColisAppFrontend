import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {jwtDecode} from "jwt-decode";

interface AuthResponse {
  token: string;
  role: string;
}

interface jwtdecode {

    sub:string,
    iat:string,
    iap:string,
    role:string
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'token';
  private roleKey = 'role';
  private api:string="http://localhost:8080"
    private sub:string="";


  isLoggedIn = signal(!!localStorage.getItem(this.tokenKey));
  role = signal(localStorage.getItem(this.roleKey) ?? '');

  constructor(private http: HttpClient, private router: Router) {}

      login(email: string, password: string) {
        return this.http.post<AuthResponse>(this.api+'/api/auth/login', { email, motDePasse: password }).pipe(
          tap(res => {
            localStorage.setItem(this.tokenKey, res.token);
            localStorage.setItem(this.roleKey, res.role);
            this.isLoggedIn.set(true);
            this.role.set(res.role);
          })
        );
      }

      register(nom: string, email: string, password: string, role: string) {
        return this.http.post<AuthResponse>(this.api+'/api/auth/register', { nom, email, motDePasse: password, role }).pipe(
          tap(res => {
            localStorage.setItem(this.tokenKey, res.token);
            localStorage.setItem(this.roleKey, res.role);
            this.isLoggedIn.set(true);
            this.role.set(res.role);
          })
        );
      }

      logout() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.roleKey);
        this.isLoggedIn.set(false);
        this.role.set('');
        this.router.navigate(['/login']);
      }

      getToken() {
        return localStorage.getItem(this.tokenKey);
      }

    hasRole(role: string): boolean {
        return this.getRolefromJwt()=== role;
    }

    getRolefromJwt(){
        const decoded: any = jwtDecode(<any>localStorage.getItem(this.tokenKey));
        let role: string = decoded.role || '';
        return role;
    }

        getEmailfromJwt(){
            const decoded: any = jwtDecode(<any>localStorage.getItem(this.tokenKey));
            let email: string = decoded.sub || '';
            return email;
        }





}
