/**
 * Created by user on 4/11/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDateString'
})
export class ToDateStringDashboardselectedPipe implements PipeTransform {
  transform(value: string, args: string[]): string {
    if (null == value)
      return value;


    let pattern = new RegExp("\\d\\d\\d\\d-\\d\\d-\\d\\d")
    if (pattern.test(value)) {
      return value;
    }

    let pattern2 = new RegExp("\\d\\d/\\d\\d/\\d\\d\\d\\d")
    if (pattern2.test(value)) {
      return value;
    }

    let pattern3 = new RegExp("\\d\\d\\d\\d\\d\\d\\d\\d")
    if (pattern3.test(value)) {
      return `${value.substr(0, 4)}-${value.substr(4, 2)}-${value.substr(6, 2)}`;
    }

    return value;
  }
}

