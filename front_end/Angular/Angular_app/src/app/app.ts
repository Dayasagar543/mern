import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';


@Component({
  imports: [Header,Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title =signal('Angular_app');
  name = "sudharshan";
  value = 0;
  first_name: string = ""
  show_on_screen:string="developer"
  callme() {
    alert("hi there how are you doing");
  }
  change_value(value:string) {
    if (value == 'increment') {
      this.value++;
    } else if (value == 'decrement') {
      this.value > 0 && this.value--;
    }
    
    
    // if (this.value == 11 || this.value == -1) {
    //   this.value = 0;
    // }
  }


  //  handle_input(event:any){
  //   console.log(event.target.value)
  //   }
   handle_input(event:string){
    console.log(event)
    }
  //  handle_input(event:any){
  //   console.log(event.target.value)
  //   }


  nameupdate(event:any) {
    // console.log(event.target.value)
    console.log(event)
    this.first_name = event.target.value;
  }

  update_screen() {
    this.show_on_screen=this.first_name
  }
}
