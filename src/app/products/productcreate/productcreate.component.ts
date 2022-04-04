import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    detail: new FormControl(),
    price: new FormControl(),
  });
  constructor(private product: ProductService,
    private router: Router) { }

  ngOnInit() {
    // this.create();
  }

  create() {
    // console.log(this.productForm.value);

    this.product.create(this.productForm.value).subscribe(() => {
      this.router.navigate(['/products/list'])
      alert('Success');
    }, () => {
      alert("errors");
    });
  }

}
