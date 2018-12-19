import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    @Output() menuItemClick = new EventEmitter<string>();

    onMenuClicked(type: string) {
        this.menuItemClick.emit(type);
    }

}