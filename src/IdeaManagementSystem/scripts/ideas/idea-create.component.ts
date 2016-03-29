import {Component} from 'angular2/core';
import {IdeaService} from './idea.service';
import {Idea} from './idea';
import {Router} from 'angular2/router';

@Component({
    template: `
        <div class="container" style="margin-top:60px" role="main">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h2>Idea Create</h2>
                    <form #createIdeaForm="ngForm" (ngSubmit)="onSubmit()">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" id="title" ngControl="title" [(ngModel)]="newIdea.title" required>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea rows="5" class="form-control" style="resize: vertical;" id="description" ngControl="description" [(ngModel)]="newIdea.description"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="category">Category</label>
                            <input type="text" class="form-control" id="category" ngControl="category" [(ngModel)]="newIdea.category" required>
                        </div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" ngControl="isSecret" [(ngModel)]="newIdea.isSecret"> Secret
                            </label>
                        </div>
                        <div class="pull-right">
                            <button class="btn btn-primary" type="submit">Create</button>
                            <button type="button" class="btn btn-default" (click)="onCancel()">Cancel</button>
                        </div>
                    </form>   
                </div>     
            </div>
        </div>
    `,
    providers: [IdeaService]
})

export class IdeaCreateComponent {

    private newIdea: Idea;
    private postResponse: Object;
    private ideaService: IdeaService;
    private router: Router;

    constructor(ideaService: IdeaService, router: Router) {
        this.ideaService = ideaService;
        this.router = router;
        this.newIdea = new Idea();
    }

    private onSubmit() {
        this.ideaService.addNew(this.newIdea).subscribe(
            data => this.postResponse = data,
            error => alert(error),
            () => this.router.navigate(['Root'])
        );
        return;
    }

    private onCancel() {
        this.router.navigate(['Root']);
        return;
    }

}