import { NgClass } from "@angular/common";
import { NgModule } from "@angular/core";
import { productRepository } from "./product.repository";
import { staticdatasource } from "./static.datasource";
@NgModule({
    providers: [productRepository,staticdatasource]
})
export class ModelModule{
    
}