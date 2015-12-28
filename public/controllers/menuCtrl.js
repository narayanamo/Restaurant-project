var app= angular.module('food');
app.controller('menuCtrl',function($scope) {
               $scope.name="vaish";
              $scope.itemdata = [
        {
            name:"Tomato Rice",
            price:"20",
            spicy_level:"3"
        },
        {
            name:"curd rice",
            price:10,
            spicy_level:0
        },
        {
        name:"fish curry",
        price:30,
        spicy_level:3
        },
        
        {
         name:"chickenTikka",
            price:20,
            spicy_level:3
        },
        {
         name:"muttonTikka",
            price:30,
            spicy_level:4
        },
        {
         name:"fishTikka",
            price:40,
            spicy_level:0
        },
        {
         name:"gobi",
            price:40,
            spicy_level:1
        },
        {
         name:"Aloo",
            price:40,
            spicy_level:4
        }
        ]
              $scope.itemdata = itemdata;
});




        