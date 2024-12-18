import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { WindowService } from './services/window.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'devsuite.online';

  // Example categories
  categories = ['Frontend', 'APIs', 'Utilities', 'Backend', 'DevOps'];

  // Example tools
  tools = [
    { name: 'Carbon', description: 'Create beautiful code snippets.', url: 'https://carbon.now.sh', category: 'Frontend', tags: ['Code', 'Snippets'] },
    { name: 'Postman', description: 'Test and debug APIs.', url: 'https://postman.com', category: 'APIs', tags: ['API', 'Debug'] },
    { name: 'JSONPlaceholder', description: 'Mock APIs for testing.', url: 'https://jsonplaceholder.typicode.com', category: 'APIs', tags: ['Mock', 'API'] },
    { name: 'Can I Use', description: 'Check browser compatibility.', url: 'https://caniuse.com', category: 'Frontend', tags: ['Browser', 'CSS'] },
    { name: 'Regex101', description: 'Regex tester and debugger.', url: 'https://regex101.com', category: 'Utilities', tags: ['Regex', 'Testing'] }
  ];

  // Filtered tools
  filteredTools = [...this.tools];

  constructor(private windowService: WindowService) { }

  openTool(url: string): void {
    this.windowService.nativeWindow.open(url, '_blank');
  }
  // Filter by category
  filterByCategory(category: string): void {
    this.filteredTools = this.tools.filter(tool => tool.category === category);
  }

  // Reset filters
  resetFilters(): void {
    this.filteredTools = [...this.tools];
  }

  // Search tools
  searchTools(event: Event): void {
    let searchTerm = "";
    const term = searchTerm.toLowerCase();
    this.filteredTools = this.tools.filter(tool =>
      tool.name.toLowerCase().includes(term) ||
      tool.description.toLowerCase().includes(term) ||
      tool.tags.some(tag => tag.toLowerCase().includes(term))
    );
  }
}
