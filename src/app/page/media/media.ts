import { Component } from '@angular/core';
import { Mediacomponent } from '../../components/mediacomponent/mediacomponent';

@Component({
  selector: 'app-media',
  imports: [Mediacomponent],
  templateUrl: './media.html',
  styleUrl: './media.scss',
})
export class Media {}
