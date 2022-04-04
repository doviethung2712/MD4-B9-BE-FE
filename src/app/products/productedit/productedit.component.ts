import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {
  id: number;
  updateProduct: FormGroup;
  constructor(private product: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getById(this.id);
    });
  }

  ngOnInit() {
  }

  getById(id) {
    return this.product.getById(id).subscribe(product => {
      this.updateProduct = new FormGroup({
        name: new FormControl(product.name),
        detail: new FormControl(product.detail),
        price: new FormControl(product.price)
      })
    });
  }


  update(id) {
    this.product.update(id, this.updateProduct.value).subscribe(() => {
      this.router.navigate(['/products/list']);
      alert('Update Success');
    }, () => {
      alert('Update Failure');
    });
  }

}
