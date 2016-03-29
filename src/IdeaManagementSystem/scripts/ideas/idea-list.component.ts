import {Component} from 'angular2/core';
import {IdeaService} from './idea.service';
import {Idea} from './idea';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    template: `
        <div class="container" style="margin-top:60px" role="main">
            <h2>Ideas</h2>
            <table class="table table-hover">
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Is Secret</th>
                </tr>
                <tr *ngFor="#idea of ideas" style="cursor: pointer;" (click)="onClickDetail(idea.id)">
                    <td>{{idea.id}}</td>
                    <td>{{idea.title}}</td>
                    <td>{{idea.category}}</td>
                    <td>{{idea.isSecret}}</td>
                </tr>
            </table>
        </div>
        <div class="container">
            <button type="button" class="btn btn-primary pull-right" (click)="onClickCreateIdea()">Create Idea</button>
        </div>
    `,
    providers: [IdeaService],
})

export class IdeaListComponent implements OnInit {

    private ideas: Idea[];
    private ideaService: IdeaService;
    private router: Router;

    constructor(ideaService: IdeaService, router: Router) {
        this.ideaService = ideaService;
        this.router = router;
    }

    public getIdeas() {
        this.ideaService.getAll().subscribe(
            data => this.ideas = data,
            error => alert(error),
            () => console.log()
        );
        return;
    }

    private onClickCreateIdea() {
        this.router.navigate(['CreateIdea']);
        return;
    }

    private onClickDetail(id: string) {
        this.router.navigate(['IdeaDetail', { id: id }]);
        return;
    }

    ngOnInit(): any {
        this.getIdeas();
        return;
    }

}