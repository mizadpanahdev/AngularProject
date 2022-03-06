import { from, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { razmanProduct } from "./product.model";

@Injectable()
export class staticdatasource {
    private products: razmanProduct[]=[
        new razmanProduct(1,"رازمان1","tarh 1" ,23000),
        new razmanProduct(1,"رازمان1","tarh 1" ,23000),
        new razmanProduct(1,"رازمان1","tarh 2" ,23000),
        new razmanProduct(1,"رازمان1","tarh 2" ,23000),
        new razmanProduct(1,"رازمان1","tarh 2" ,23000),
        new razmanProduct(1,"رازمان1","tarh 3" ,23000),
        new razmanProduct(1,"رازمان1","tarh 3" ,23000),
        new razmanProduct(1,"رازمان1","tarh 3" ,23000)

    ];
    getProducts(): Observable<razmanProduct[]>{
        return from ([this.products]);
    }
}