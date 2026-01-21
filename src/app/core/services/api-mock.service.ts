import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import { User } from '../models/user.model';
import { AuthResponse } from '../models/auth-response.model';
import { PasswordResetResponse } from '../models/password-reset-response.model';

interface PasswordResetData {
  email: string;
  code: string;
  createAt: number;
}

@Injectable({
  providedIn: 'root',
})

export class ApiMockService {
  private users: User[] = [
    {
      email: 'primeiroacesso@email.com',
      password: null,
    },
    {
      email: 'tenhosenha@email.com',
      password: 'tenhoSenha@123',
    },
    {
      email: 'esquecisenha@email.com',
      password: 'esqueciSenh@123',
    },
  ];

  private passwordResetData: PasswordResetData | null = null;

  private ramDelay(min = 600, max = 1200): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  login(email: string, password: string): Observable<AuthResponse> {
    const userFound = this.users.find((user) => user.email === email);

    if (!userFound) {
      return throwError(() => new Error('Usuário não encontrado, digite um email cadastrado.')).pipe(delay(this.ramDelay()));
    }

    if (!userFound.password) {
      return throwError(() => new Error('Usuário sem senha cadastrada, click em "Crie uma senha".')).pipe(delay(this.ramDelay()));
    }

    if (userFound.password !== password) {
      return throwError(() => new Error('Senha inválida, tente novamente.')).pipe(delay(this.ramDelay()));
    }

    return of({token: 'mock-token-123'}).pipe(delay(this.ramDelay()));
  }

  createPassword(email: string, code: string, newPassword: string): Observable<void> {
    if (code !== '123456') {
      return throwError(() => new Error('Código informado inválido!')).pipe(delay(this.ramDelay()))
    }

    const userFound = this.users.find((user) => user.email === email);

    if (!userFound) {
      return throwError(() => new Error('Usuário não encontrado, digite um email cadastrado.')).pipe(delay(this.ramDelay()));
    }

    if (userFound.password) {
      return throwError(() => new Error('Esse email já possui uma senha.')).pipe(delay(this.ramDelay()));
    }

    userFound.password = newPassword;

    return of(void 0).pipe(delay(this.ramDelay()));
  }

  requestPasswordReset(email: string): Observable<PasswordResetResponse> {
    const userFound = this.users.find((user) => user.email === email);

    this.passwordResetData = {
      email,
      code: '123456',
      createAt: Date.now(),
    };

    if (!userFound) {
      return throwError(() => new Error('Usuário não encontrado, digite um email cadastrado.')).pipe(delay(this.ramDelay()));
    }

    return of({ resetId: this.passwordResetData.code }).pipe(delay(this.ramDelay()));
  }

  confirmPasswordReset(email: string, code: string, newPassword: string): Observable<void> {
    if (!this.passwordResetData) {
      return throwError(() => new Error('Nenhum pedido de recuperação de senha encontrado para esse email.')).pipe(delay(this.ramDelay()))
    }
    
    const codeExpired = (Date.now() - this.passwordResetData.createAt) > 2 * 60 * 1000;
    if (codeExpired) {
      return throwError(() => new Error('Código expirado, solicite um novo código de recuperação.')).pipe(delay(this.ramDelay()))
    }

    if (code !== this.passwordResetData.code) {
      return throwError(() => new Error('Código informado inválido!')).pipe(delay(this.ramDelay()))
    }

    const userFound = this.users.find((user) => user.email === email);
    (userFound) && (userFound.password = newPassword)

    return of(void 0).pipe(delay(this.ramDelay()));
  }
}