import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/modules/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  list: Product[] = [];
  constructor(private product: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
     this.product.getAll().subscribe(list => {
       this.list = list;
     });
  }

  deleteById(id){
    let x = confirm("are you sure");
    if (x) {
      this.product.delete(id).subscribe(() => {
        this.getAll();
        alert("Success!");
      }, () => {
        alert('error');
      });
    } else {
     this.getAll();
    }
  }

}
