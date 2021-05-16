const shopcar= new Vue({
    el:'#shopcar',
    data:{
        car:[],
    },
    methods: {
      increase(index){
          this.car[index].count++;
      } ,
      decrease(index){
          if(this.car[index].count==1){
              this.car[index].count=1;
          }
          else{
            this.car[index].count--;
          }
      } ,
      removeCar(index){
          this.car.pop(this.car[index]);
          alert("删除成功")
      },
      
    },
    computed:{
        totalPrice(){
            let total =0;
            for(let i=0;i<this.car.length;i++){
                total+=this.car[i].price*this.car[i].count;
            }
            return total;
    },
    },
    filters:{
        priceFilter(price){
            return "￥" + price.toFixed(2);
        }
    } ,
})