import { Component } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [HomeComponent, RouterModule],
  selector: "app-root",
  template: ` <main>
    <header class="brand-name">
      <img
        class="brand-logo"
        src="/assets/logo.svg"
        alt="logo"
        aria-hidden="true"
      />
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "homes";
}