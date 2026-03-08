import { Component, OnInit, signal } from '@angular/core'; // 1. Importar signal
import { CardModel } from '../../model/card-model';
import { CardService } from '../../service/card-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {

  // 2. Usamos un signal para la lista de tarjetas
  listCards = signal<CardModel[]>([]);

  formCard: FormGroup = new FormGroup({
    id_card: new FormControl(0),
    name: new FormControl(''),
    number: new FormControl(''),
    type: new FormControl(''),
    cvv: new FormControl(0),
    status: new FormControl(1)
  });
  
  isUpdate: boolean = false;

  constructor(private cardService: CardService){}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.cardService.getCards().subscribe({
      next: (resp) => {
        // 3. Actualizamos el signal con .set()
        this.listCards.set(resp);
        console.log('Datos actualizados en el Signal:', this.listCards());
      },
      error: (err) => {
        console.error('Error al traer los datos', err);
      }
    });
  }

  save(){
    this.formCard.controls['status'].setValue(1);
    const cardData = this.formCard.value;

    this.cardService.saveCard(cardData).subscribe({
      next: (resp) => {
        if(resp) {
          this.list(); // Refresca la lista
          this.newCard(); // Resetea el formulario
        }
      }
    });
  }

  selectItem(card: CardModel){
    this.isUpdate = true;
    this.formCard.patchValue(card);
  }

  newCard(){
    this.isUpdate = false;
    this.formCard.reset({
      id_card: 0,
      name: '',
      number: '',
      type: '',
      cvv: 0,
      status: 1
    });
  }
  update() {
  const cardData = this.formCard.value;

  this.cardService.updateCard(cardData).subscribe({
    next: (resp) => {
      if (resp) {
        this.list();       // Refresca lista
        this.newCard();    // Limpia formulario
      }
    },
    error: (err) => {
      console.error('Error al actualizar', err);
    }
  });
}

delete(id: number) {
  if (confirm('¿Estás seguro de eliminar esta tarjeta?')) {
    this.cardService.deleteCard(id).subscribe({
      next: (resp) => {
        this.list(); 
      },
      error: (err) => console.error('Error al eliminar:', err)
    });
  }
}
}