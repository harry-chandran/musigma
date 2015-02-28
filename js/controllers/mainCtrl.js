myApp.controller('mainCtrl', function ($scope,$location, $route,$http) {	  
	 $scope.activePath = null;

      $scope.categoryUrl = null;
	  $scope.category = null;

      $scope.pageHeading = "FRESH PRODUCTION AND PLANNING - BAKERY";


      $scope.$watch('categoryUrl', function(value){
            if(value == '/beakery/home'){
                $scope.category = 'beakery';
                $scope.pageHeading = "FRESH PRODUCTION AND PLANNING - BAKERY";
            }else if(value == '/daily/home'){
                 $scope.category = 'daily';
                 $scope.pageHeading = "FRESH PRODUCTION AND PLANNING - DAILY";                  
            }
          
    });
   


	  $scope.$on('$routeChangeSuccess', function(){
         console.log($scope.category);
	    $scope.activePath = $location.path();
	  });


	 
	

	var GetMarkets = function(){

	           /* $http.get('/contactList').success(function(response){
	                $scope.contactList = response;
	                $scope.contact = "";
	            });*/

        $scope.markets = {
                "Markets": [
                    {
                        "Market": "All"
                    },
                    {
                        "Market": "A"
                    },
                    {
                        "Market": "B"
                    },
                    {
                        "Market": "C"
                    },
                    {
                        "Market": "D"
                    }
                ]
            };
    }




	 $scope.GetStores = function () {

          $scope.stores =  {
            "Stores": [
                {
                    "Store": "All"
                },
                {
                    "Store": "2613"
                },
                {
                    "Store": "50"
                },
                {
                    "Store": "100"
                },
                {
                    "Store": "123"
                }
            ]
        }

	}


 	$scope.GetWeeks = function () {

           $scope.weeks = {
                "Weeks": [
                    {
                        "Week": "1"
                    },
                    {
                        "Week": "2"
                    },
                    {
                        "Week": "3"
                    },
                    {
                        "Week": "4"
                    },
                    {
                        "Week": "5"
                    }
                ]
            }
		}



	$scope.loadrecord=function(){
		console.log("hi i am calling always");
        if($scope.category == 'beakery'){
            console.log("beakery product");
        }else if($scope.category == 'daily'){
            console.log("daily product");               
        }

   	 $scope.modeldata ={
        "jqdata" :
        [
            {
                "pgroup": "HEARTH BREADS",
                "Desc": "FRENCH BREAD",
                "Item": "552326890",
                "Sat": "7",
                "Sun": "8",
                "Mon": "4",
                "Tue": "6",
                "Wed": "9",
                "Thu": "5",
                "Fri": "9",
                "attr": {
                    "pgroup": {
                        "rowspan": "1"
                    },
                    "Desc": {
                        "rowspan": "1"
                    }
                }
            },
            {
                "pgroup": "PACKAGED DONUTS",
                "Desc": "6 CT PLAIN CAKE",
                "Item": "551033159",
                "Sat": "2",
                "Sun": "2",
                "Mon": "1",
                "Tue": "2",
                "Wed": "2",
                "Thu": "1",
                "Fri": "2",
                "attr": {
                    "pgroup": {
                        "rowspan": "4"
                    },
                    "Desc": {
                        "display": "1"
                    }
                }
            },
            {
                "pgroup": "PACKAGED DONUTS",
                "Desc": "12 CT LARGE DONUTS",
                "Item": "550787681",
                "Sat": "0",
                "Sun": "2",
                "Mon": "3",
                "Tue": "0",
                "Wed": "2",
                "Thu": "0",
                "Fri": "0",
                "attr": {
                    "pgroup": {
                        "display": "none"
                    },
                    "Desc": {
                        "display": "1"
                    }
                }
            },
            {
                "pgroup": "PACKAGED DONUTS",
                "Desc": "SOUR CREAM CAKE 6CT",
                "Item": "9876539",
                "Sat": "1",
                "Sun": "1",
                "Mon": "2",
                "Tue": "2",
                "Wed": "2",
                "Thu": "2",
                "Fri": "2",
                "attr": {
                    "pgroup": {
                        "display": "none"
                    },
                    "Desc": {
                        "display": "1"
                    }
                }
            },
            {
                "pgroup": "PACKAGED DONUTS",
                "Desc": "YEAST GLAZED DONUT",
                "Item": "550484591",
                "Sat": "2",
                "Sun": "4",
                "Mon": "3",
                "Tue": "3",
                "Wed": "3",
                "Thu": "3",
                "Fri": "5",
                "attr": {
                    "pgroup": {
                        "display": "none"
                    },
                    "Desc": {
                        "display": "1"
                    }
                }
            }
        ]
    }


    $scope.salesData = {

    "last": [
        {
            "sales": 0,
            "throwsp": 0,
            "weeks": "Frid"
        },
        {
            "sales": 2687,
            "throwsp": 464,
            "weeks": "Mond"
        },
        {
            "sales": 3503,
            "throwsp": 341,
            "weeks": "Satu"
        },
        {
            "sales": 3092,
            "throwsp": 397,
            "weeks": "Sund"
        },
        {
            "sales": 1785,
            "throwsp": 0,
            "weeks": "Thur"
        },
        {
            "sales": 16864,
            "throwsp": 1751,
            "weeks": "Tota"
        },
        {
            "sales": 2746,
            "throwsp": 199,
            "weeks": "Tues"
        },
        {
            "sales": 3047,
            "throwsp": 348,
            "weeks": "Wedn"
        }
    ],
    "ytd": [
        {
            "sales": 1015911,
            "throwsp": 182009,
            "weeks": "Null"
        },
        {
            "sales": 36096,
            "throwsp": 4416,
            "weeks": "Null"
        }
    ],
    "current": [
        {
            "sales": 2992,
            "throwsp": 363,
            "weeks": "Frid"
        },
        {
            "sales": 1921,
            "throwsp": 474,
            "weeks": "Mond"
        },
        {
            "sales": 4069,
            "throwsp": 423,
            "weeks": "Satu"
        },
        {
            "sales": 3593,
            "throwsp": 248,
            "weeks": "Sund"
        },
        {
            "sales": 2509,
            "throwsp": 282,
            "weeks": "Thur"
        },
        {
            "sales": 19232,
            "throwsp": 2664,
            "weeks": "Tota"
        },
        {
            "sales": 1957,
            "throwsp": 357,
            "weeks": "Tues"
        },
        {
            "sales": 2188,
            "throwsp": 514,
            "weeks": "Wedn"
        }
    ]
}
    	//console.log($scope.modeldata)
    	//$scope.gridapi.insert($scope.modeldata.jqdata);
}

	 GetMarkets(); 
	
});