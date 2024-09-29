import { Routes } from '@angular/router';
import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';
import { FlashcardEditComponent } from './flashcard-edit/flashcard-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/flashcards', pathMatch: 'full' },
  { path: 'flashcards', component: FlashcardListComponent },
  { path: 'edit/:id', component: FlashcardEditComponent },
  { path: 'create', component: FlashcardEditComponent }
];

export default routes;