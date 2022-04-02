import { Component, OnInit } from '@angular/core';
import { GhUser } from '../../models/gh-user';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username:string=''
  user: GhUser | null = null

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (ghUser)=>{
      this.user = ghUser
      }
    )
  }

}
