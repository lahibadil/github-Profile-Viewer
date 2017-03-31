import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GitHubService{
	private userName:string;
	constructor(private http: Http){
		console.info("GitHub service is ready.....");
		this.userName = "mojombo";
	}

	getUser(){
		return this.http.get("https://api.github.com/users/"+ this.userName).map(res=>res.json());
	}

	getRepos(){
		return this.http.get("https://api.github.com/users/"+ this.userName+ "/repos").map(res=>res.json());
	}

	updateUser(username: string){
		this.userName = username;
	}
}