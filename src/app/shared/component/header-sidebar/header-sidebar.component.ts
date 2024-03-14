import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, Router } from '@angular/router';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.scss'],
  animations: [
    trigger('routeAnimation', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      state('out', style({ opacity: 0, transform: 'translateX(100%)' })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ])
  ]
})
export class HeaderSidebarComponent {
  isOpen : boolean = false;
  title!: string | any;
  rout_Config : any
  title_data? :any | any= {} ;  
 animations?: any[] ;  
// encapsulation?: ViewEncapsulation

    

    

  constructor( private route:Router,
               private activatedroute:ActivatedRoute,
               private contexts: ChildrenOutletContexts
  ) {}

  ngOnInit() {
    this.activatedroute.paramMap.subscribe( paramMap => {
      console.log( paramMap.get('name'),paramMap.get('id'))
      // this.title = params["name"]
    }  

    )  
    // (data => {
    //   console.log(data)
    //   this.title = data['name'];
    //   console.log("title =",this.title)
    // })
    this.rout_Config = this.route.config 
    this.route.config
    console.log("this.route.config => ",this.route.config)
    console.log("this.route.config[1] => ",this.route.config[1])
    console.log("this.route.config[1].children => ",this.route.config[1].children)
     
    // let data  = this.route.config[1].children?.map((mdata:any) => {
    //   console.log(data)
    // })
    //  console.log(data)

     console.log("this.rout_Config",this.rout_Config)
     console.log("this.rout_Config",this.rout_Config[1])
     console.log("this.rout_Config",this.rout_Config[1].children)
     this.rout_Config[1].children.map((n_Data:any) => {
       console.log(n_Data)
      //  console.log(n_Data.data.name)
       this.title_data = n_Data
       console.log(this.title_data.data)
     })

    //  this.route.data.subscribe

  }
  getAnimationData(){
    console.log(this.contexts.getContext('primary')?.route?.snapshot?.data?.['name'])
    this.title  = this.contexts.getContext('primary')?.route?.snapshot?.data?.['name'];
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['name']
    // console.log(object)
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  logOut(){
    localStorage.removeItem("token")
    this.route.navigate(['/login'])

    console.log("removed click")
  }
}
