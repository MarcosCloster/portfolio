import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { PresentationComponent } from "./component/presentation/presentation.component";
import { ProyectsComponent } from "./component/proyects/proyects.component";
import { SkillsComponent } from "./component/skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, PresentationComponent, ProyectsComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
