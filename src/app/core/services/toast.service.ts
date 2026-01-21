import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast, ToastType } from '../models/toast.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toastsSubject.asObservable()

  show(message: string, type: ToastType = 'info', timeout: number = 3000) {
    const toast: Toast = {
      id: Date.now(),
      message,
      type
    }

    this.toastsSubject.next([...this.toastsSubject.value, toast])

    setTimeout(() => this.remove(toast.id), timeout)
  }

  success(message: string, timeout = 4000) {
    this.show(message, 'success', timeout)
  }

  error(message: string, timeout = 6000) {
    this.show(message, 'error', timeout)
  }

  remove(id: number) {
    this.toastsSubject.next(
      this.toastsSubject.value.filter(toast => toast.id !== id)
    )
  }
}
