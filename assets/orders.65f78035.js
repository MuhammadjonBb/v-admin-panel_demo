import{aD as r,aE as s}from"./index.94fa42e8.js";import{u as o}from"./input.a9224496.js";o();const i=r("orders",{state:()=>({orders:null,products:null,mappedProducts:[],selectedProducts:[],statusValue:{},statusOptions:[{label:"\u0412 \u043F\u0440\u043E\u0441\u0441\u0435\u0441\u0435",id:5},{label:"\u041E\u043F\u043B\u0430\u0447\u0435\u043D",id:1},{label:"\u041E\u0442\u043C\u0435\u043D\u0435\u043D",id:2},{label:"\u0412 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0438",id:3}]}),actions:{getOrders(){s(()=>import("./orders.7e872519.js"),[]).then(t=>{this.orders=t.default})},createOrder(t){const e={user:{first_name:t.first_name,last_name:t.last_name,email:t.email,phone:t.phone},order:[...this.mapSelectedProducts(t.address)]};return api.post("orders",e)},getProducts(){s(()=>import("./products.84a46632.js"),[]).then(t=>{this.products=t.default,this.mapProducts()})},mapProducts(){this.products.map(t=>{console.log(t),this.mappedProducts.push({id:t.id,label:t.name,price:t.price,amount:t.count})})},addProduct(){this.selectedProducts.push({label:"",amount:0,cost:0})},mapSelectedProducts(t){const e=[];return this.selectedProducts.map(u=>{e.push({address:t,count:u.amount,product_id:u.id,status_id:this.statusValue.id,price:u.cost,comment:"string",country:"string",region:"string",payment_type:"cash",floor:"string",delivery_type:"free"})}),e}}});export{i as u};