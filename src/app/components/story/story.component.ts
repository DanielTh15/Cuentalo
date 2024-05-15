import { Component, Input, Output } from '@angular/core';
import { Story } from 'src/app/models/StoryModel';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {

  @Input() story: Story = {
    storyId: 0,
    tittle: '',
    content: '',
    date: '',
    authorId: '',
    soundId: 0
  }


}
