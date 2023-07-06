import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = 'https://json-server-five-pi.vercel.app/todo'; // api rest fake


  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Todo[]>(this.url)
  }


    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    getTodos(): Observable<Todo[]> {
      return this.httpClient.get<Todo[]>(this.url)
        .pipe(
          retry(2),
          catchError(this.handleError))
    }


    getTodoById(id: number): Observable<Todo> {
      return this.httpClient.get<Todo>(this.url + '/' + id)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

    updateTodo(todo: Todo): Observable<Todo> {
      return this.httpClient.put<Todo>(this.url + '/' + todo.id, JSON.stringify(todo), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }

    createTodo(todo: Todo): Observable<Todo> {
      return this.httpClient.post<Todo>(this.url, JSON.stringify(todo), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
    

   }

