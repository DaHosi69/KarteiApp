import { Component, Injectable } from '@angular/core';
import { Flashcard } from '../models/flashcard';
import { FlashcardService } from '../flashcard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { FormsModule } from '@angular/forms';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-flashcard-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './flashcard-edit.component.html',
  styleUrl: './flashcard-edit.component.scss'
})
export class FlashcardEditComponent {

  flashcard: Flashcard = {
    id: '',
    question: '',
    answer: ''
  };
  isEditMode = false;

  constructor(
    private flashcardService: FlashcardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const existingFlashcard = this.flashcardService.getFlashcard(id);
      if (existingFlashcard) {
        this.flashcard = existingFlashcard;
        this.isEditMode = true;
      }
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.flashcardService.updateFlashcard(this.flashcard);
    } else {
      this.flashcard.id = uuidv4(); // Generiere eine neue UUID für die Karteikarte
      this.flashcardService.addFlashcard(this.flashcard);
    }
    this.router.navigate(['/flashcards']);
  }

  cancelEdit(): void {
    this.router.navigate(['/flashcards']);
  }

}
