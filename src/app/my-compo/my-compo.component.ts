import { Component, ChangeDetectionStrategy, AfterViewInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-my-compo',
  templateUrl: './my-compo.component.html',
  styleUrls: ['./my-compo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCompoComponent implements AfterViewInit {

  @Input() movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  ngAfterViewInit() {
    console.log(this);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
