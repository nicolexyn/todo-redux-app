import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { FiltrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: FiltrosValidos): Todo[] {
    console.log('filtro', filtro);
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
