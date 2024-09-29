import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Flashcard } from '../models/flashcard';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.scss'
})
export class FlashcardComponent {
  @Input() flashcards: Flashcard[] = [];
  currentIndex: number = 0;
  isFlipped: boolean = false;
  isEditing: boolean = false;
  editableCard: Flashcard = { id: '', question: '', answer: '' };

  get card(): Flashcard {
    return this.flashcards[this.currentIndex];
  }

  flipCard(): void {
    if (!this.isEditing) {
      this.isFlipped = !this.isFlipped;
    }
  }

  nextCard(): void {
    if (this.currentIndex < this.flashcards.length - 1) {
      this.currentIndex++;
      this.isFlipped = false;
      this.isEditing = false;
    }
  }

  previousCard(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.isFlipped = false;
      this.isEditing = false;
    }
  }

  editCard(): void {
    this.isEditing = true;
    this.editableCard = { ...this.card }; // Kopiere die aktuelle Karte zum Bearbeiten
  }

  saveEdit(): void {
    this.flashcards[this.currentIndex] = { ...this.editableCard };
    this.isEditing = false;
  }

  cancelEdit(): void {
    this.isEditing = false;
  }
}
