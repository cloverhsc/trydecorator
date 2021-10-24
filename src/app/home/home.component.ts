import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

function classDecorator(target: any): void {
  console.log(target);
}

function methodDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log('Method Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function propertyDecorator(target: any, propertyName: string) {
  console.log('Property Decorator');
  console.log(target);
  console.log(propertyName);
}

function parameterDecorator(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log('Parameter Decorator');
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

@classDecorator
class Blog {
  @propertyDecorator
  author: string;
  blogs: any[] = [];

  constructor(author: string) {
    this.author = author;
  }

  @methodDecorator
  getblogNum() {
    return this.blogs.length;
  }

  calculateBlog(@parameterDecorator num: number): number {
    return this.blogs.length * num;
  }
}

// Decorator Factory
function Logger(logString: string) {
  return (constructor: any) => {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('I am Clover')
class Persons {
  name = 'Hsu';

  constructor() {
    console.log('Creating a person....');
  }
}
