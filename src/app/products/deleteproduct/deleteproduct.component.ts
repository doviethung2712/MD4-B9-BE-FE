import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  id: number;
  constructor(private deleteproduct: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.delete();
    });
  }

  delete() {
    let x = confirm("are you sure");
    if (x) {
      this.deleteproduct.delete(this.id).subscribe(() => {
        alert("Success!");
        this.router.navigate(['/products/list']);
      }, () => {
        alert('error');
      });
    } else {
      this.router.navigate(['/products/list']);
    }

  }


}
