import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    constructor(private dataStorgeService:DataStorageService){}

    onSaveData(){
        this.dataStorgeService.storeRecipe();

    }
    onFetchData(){
        this.dataStorgeService.fetchRecipe();
    }
}

  