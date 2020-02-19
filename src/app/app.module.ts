import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal-itens/modal.component';
import { PrecoItemComponent } from './preco-item/preco-item.component';
import { EstoqueItemComponent } from './estoque-item/estoque-item.component';

@NgModule({
  declarations: [AppComponent, ModalComponent, PrecoItemComponent, EstoqueItemComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {}
