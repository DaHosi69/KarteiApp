import { Injectable } from '@angular/core';
import { Flashcard } from './models/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private flashcards: Flashcard[] = [{
    id: '1',
    question: 'Was ist Angular?',
    answer: 'Angular ist ein Framework für die Entwicklung von Webanwendungen, das von Google entwickelt wurde.'
  },
  {
    id: '2',
    question: 'Welche Struktur verwendet man in Angular für Datenbindung?',
    answer: 'In Angular verwendet man die Struktur `{{ }}` für Datenbindung (Interpolation).'
  },
  {
    id: '3',
    question: 'Was ist eine Komponente in Angular?',
    answer: 'Eine Komponente in Angular ist ein Baustein der Benutzeroberfläche, der aus einer Klasse, einem Template und Stilen besteht.'
  },
  {
    id: '4',
    question: 'Wie integriert man eine externe Bibliothek in Angular?',
    answer: 'Man integriert eine externe Bibliothek in Angular, indem man sie über npm installiert und die entsprechenden Module in `angular.json` importiert.'
  },
  {
    id: '5',
    question: 'Was ist eine Directive in Angular?',
    answer: 'Eine Directive in Angular ist eine Klasse, die die Darstellung oder das Verhalten eines DOM-Elements verändert.'
  }];

  getFlashcards(): Flashcard[] {
    return this.flashcards;
  }

  getFlashcard(id: string): Flashcard | undefined {
    return this.flashcards.find(card => card.id === id);
  }

  addFlashcard(flashcard: Flashcard): void {
    this.flashcards.push(flashcard);
  }

  updateFlashcard(updatedCard: Flashcard): void {
    const index = this.flashcards.findIndex(card => card.id === updatedCard.id);
    if (index > -1) {
      this.flashcards[index] = updatedCard;
    }
  }

  deleteFlashcard(id: string): void {
    this.flashcards = this.flashcards.filter(card => card.id !== id);
  }
}
