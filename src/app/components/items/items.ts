import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar/sidebar';
import { ItemList } from '../item-list/item-list';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [Sidebar, ItemList],
  templateUrl: './items.html',
  styleUrl: './items.css'
})
export class Items {}