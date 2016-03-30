import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';
import {IdeaService} from './idea.service';
import {Idea} from './idea';
import {Router} from 'angular2/router';

@Component({
    template: `
        <div class="container" style="margin-top:60px" role="main">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h2>Idea</h2>
                    <form> 
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" id="title" [(ngModel)]="idea.title" required>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea rows="5" class="form-control" style="resize: vertical;" id="description" [(ngModel)]="idea.description"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="category">Category</label>
                            <input type="text" class="form-control" id="category" [(ngModel)]="idea.category" required>
                        </div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" [(ngModel)]="idea.isSecret"> Secret
                            </label>
                        </div>
                        <div class="pull-right">
                            <button type="button" class="btn btn-primary" (click)="onUpdate(idea.id, idea)">Save</button>
                            <button type="button" class="btn btn-danger" (click)="onDelete(idea.id)">Delete</button>
                            <button type="button" class="btn btn-default" (click)="onCancel()">Back</button>
                        </div>
                    </form>   
                </div>     
            </div>
        </div>
    `,
    providers: [IdeaService]
})

export class IdeaDetailComponent implements OnInit {

    private ideaService: IdeaService;
    private params: RouteParams;
    private idea: Idea;
    private router: Router;
    private deleteResponse: Object;

    constructor(ideaService: IdeaService, params: RouteParams, router: Router) {
        this.ideaService = ideaService;
        this.params = params;
        this.router = router;
        this.idea = new Idea();
    }

    private onCancel() {
        this.router.navigate(['Root']);
        return;
    }

    private onDelete(id: string) {
        if (confirm("Delete Idea?")) {
            this.ideaService.deleteById(id).subscribe(
                error => alert(error),
                () => this.router.navigate(['Root'])
            );
        }
        return;
    }

    private onUpdate(id: string, idea: Idea) {
        this.ideaService.updateById(id, idea).subscribe(
            error => alert(error),
            () => this.router.navigate(['Root'])
        );
        return;
    }

    ngOnInit(): any {
        var id = this.params.get('id');
        this.ideaService.getById(id).subscribe(
            data => this.idea = data,
            error => alert(error),
            () => console.log()
        );
        return;
    }

}