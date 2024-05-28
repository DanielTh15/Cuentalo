import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/models/StoryModel';
import { StoriesServiceService } from 'src/app/services/stories-service.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  stories: Story[] = [];

  constructor(private storyService: StoriesServiceService) { }

  ngOnInit(): void {
    this.storyService.list().subscribe(
      data => {
        this.stories = data
      }
    )
  }
}
