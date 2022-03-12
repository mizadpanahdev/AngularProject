import { staticdatasource } from './static.datasource';
import { razmanProduct } from './product.model';
import { Injectable } from "@angular/core";
@Injectable()
export class productRepository {
private products:razmanProduct[] = [];
private categories: string[] = [];
constructor(private dataSource: staticdatasource) {
dataSource.getProducts().subscribe(data => {
this.products = data;
this.categories = data.map(p => p.category)
                      .filter((c, index, array) => array.indexOf(c) == index).sort();
});
}
getProducts(category: string ): razmanProduct[] {
    return this.products
    .filter(p => category == null || category == p.category);
    }
    getProduct(id: number): razmanProduct{
    return this.products.find(p => p.id == id);
    } 
    getCategories(): string[] {
    return this.categories;
    }
}

