import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared-module';
import { CrudService, Item } from '../../core/services/crud';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList implements OnInit {
  items: Item[] = [];
  newItem: Item = { name: '', description: '' };
  editingItem: Item | null = null;
  loading = false;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void { this.loadItems(); }

  loadItems(): void {
    this.loading = true;
    this.crudService.getItems().subscribe({
      next: (data: Item[]) => { this.items = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  addItem(): void {
    if (!this.newItem.name) return;
    this.crudService.addItem(this.newItem).subscribe(() => {
      this.newItem = { name: '', description: '' };
      this.loadItems();
    });
  }

  startEdit(item: Item): void { this.editingItem = { ...item }; }

  saveEdit(): void {
    if (this.editingItem?._id) {
      const { _id, ...data } = this.editingItem;
      this.crudService.updateItem(_id, data).subscribe(() => {
        this.editingItem = null;
        this.loadItems();
      });
    }
  }

  cancelEdit(): void { this.editingItem = null; }

  deleteItem(id: string | undefined): void {
    if (!id) return;
    this.crudService.deleteItem(id).subscribe(() => this.loadItems());
  }
}