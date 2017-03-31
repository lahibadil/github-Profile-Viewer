import {Component} from '@angular/core';
import { GitHubService} from '../services/github.service';

@Component({
	moduleId: module.id,
	selector:'profile',
	templateUrl : 'profile.component.html',
	providers:[GitHubService]
})

export class ProfileComponent {
	private user[];
	private repos[];
	private username:string

	constructor(private githubService : GitHubService) {
		this.refreshUser();
	}

	searchUser(){
		this.githubService.updateUser(this.username);
		this.refreshUser();
	}



	private refreshUser(){
		this.githubService.getUser().subscribe(user=>{
			this.user = user;
		});

		this.githubService.getRepos().subscribe(repos=>{
			this.repos = repos;
		});
	}



}