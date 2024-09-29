import { Component } from '@angular/core';
import { Flashcard } from '../models/flashcard';
import { FlashcardService } from '../flashcard.service';
import { FormsModule } from '@angular/forms';
import { FlashcardComponent } from '../flashcard/flashcard.component';

@Component({
  selector: 'app-flashcard-list',
  standalone: true,
  imports: [FormsModule, FormsModule, FlashcardComponent],
  templateUrl: './flashcard-list.component.html',
  styleUrl: './flashcard-list.component.scss'
})
export class FlashcardListComponent {
  flashcards: Flashcard[] = [];
  

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit(): void {
    this.flashcards = this.flashcardService.getFlashcards();
  }

  deleteFlashcard(id: string): void {
    this.flashcardService.deleteFlashcard(id);
    this.flashcards = this.flashcardService.getFlashcards();
  }
}
