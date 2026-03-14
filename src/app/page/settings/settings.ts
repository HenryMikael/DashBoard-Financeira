import { Component } from '@angular/core';
import { Settingscomponent } from '../../components/settingscomponent/settingscomponent';

@Component({
  selector: 'app-settings',
  imports: [Settingscomponent],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {}
