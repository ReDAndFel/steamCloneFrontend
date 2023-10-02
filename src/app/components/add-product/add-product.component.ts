import { Component } from '@angular/core';
import { GameDTO } from 'src/app/model/game-dto';
import { ImageDTO } from 'src/app/model/image-dto';
import { TagDTO } from 'src/app/model/tag-dto';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent {

  game: GameDTO;
  tags: TagDTO[] = [];
  tagsSelected: TagDTO[] = [];
  files: any[] = [];
  languages: string[] = [];
  languagesSelected: string[] = [];

  constructor() {
    this.game = new GameDTO(0, "", new Date(""), 0, 0, 0, "", "", "", 0, true);
    this.loadTags();
    this.loadLanguage();
  }

  private loadTags() {
    this.tags.push(new TagDTO(1, "Terror"));
    this.tags.push(new TagDTO(2, "Carreras"));
    this.tags.push(new TagDTO(3, "Rpg"));
    this.tags.push(new TagDTO(4, "Novela visual"));
    this.tags.push(new TagDTO(5, "FPS"));
  }

  private loadLanguage() {
    this.languages.push('Español');
    this.languages.push('Inglés');
    this.languages.push('Japonés');
    this.languages.push('Portugués');
    this.languages.push('Francés');
  }

  public createGame() {
    if(this.files.length != 0 && this.tagsSelected.length != 0 && this.languagesSelected.length != 0){
      console.log(this.game);
    }
    else{
      console.log("No se pudo crear el juego")

      if (this.files.length == 0) {
        console.log("Debe tener al menos una imagen");
      }
  
      if (this.tagsSelected.length == 0) {
        console.log("Debe tener al menos un tag");
      }
  
      if (this.languagesSelected.length == 0) {
        console.log("Debe tener al menos un lenguaje");
      }
  
    }    
  
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.files = event.target.files;
      console.log(this.files);
    }
  }

  onCheckTagChange(event: any) {
    this.tagsSelected.push(event.target.value);
    console.log(this.tagsSelected);
  }
  onCheckLanguageChange(event: any) {
    if (!this.languagesSelected.includes(event)) {
      this.languagesSelected.push(event.target.value);
      console.log(this.languagesSelected);
    }
  }

}

