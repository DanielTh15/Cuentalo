import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorStory'
})
export class ShorStoryPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (!value) {
      return '';
    }
    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit) + '...';
  }

}
