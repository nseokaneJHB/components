import { Component, OnInit } from '@angular/core';
import { APICallsService } from '../../service/apicalls.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	constructor(private __apiCall: APICallsService) { }

	ngOnInit(): void {
		this.__apiCall.getUser().subscribe((res: any) => {
			console.log(res);
		})
	}

	signout(){
		location.reload()
		localStorage.clear()
		location.href = '/';
	}

}
