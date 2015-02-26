	// create the controller and inject Angular's $scope
myApp.controller('homeCtrl', function($rootScope,$scope,$http) {

    $scope.patientdata = [];
    $scope.gridapi = {};
    // $scope.loadrecord();

 $scope.$parent.$watch('modeldata', function(value){

        if(value == undefined){
            console.log("no data");
        }else{
            setTimeout(function(){ $scope.gridapi.insert(eval(value.jqdata)); }, 100);
              
        }
      
});



	arrtSetting = function (rowId, val, rawObject, cm) {
                    var attr = rawObject.attr[cm.name], result;
                    if (attr.rowspan) {
                        result = ' rowspan=' + '"' + attr.rowspan + '"';
                    } else if (attr.display) {
                        result = ' style="display:' + attr.display + '"';
                    }
                    return result;
                };
        

	$scope.config = {

         datatype: "local",
              //  data: mydata,
         colNames: ["Production Group", "Description", "Item", "Sat", "Sun","Mon","Tue","Wed","Thu","Fri"],
         colModel: [
             { name: 'pgroup', width: 70, align: 'center', cellattr: arrtSetting },
             { name: 'Desc', width: 80, align: 'center', cellattr: arrtSetting },
             { name: 'Item', width: 90 },
             { name: 'Sat', width: 120,align: 'right' },
             { name: 'Sun', index: 'tax', width: 60, align: 'right' },
				{ name: 'Mon', width: 90 ,align: 'right'},
             { name: 'Tue', width: 120,align: 'right' },
             { name: 'Wed', index: 'tax', width: 60, align: 'right' },
				  { name: 'Thu', index: 'tax', width: 60, align: 'right' },
				    { name: 'Fri', index: 'tax', width: 60, align: 'right' }
         ],
                cmTemplate: {sortable: true},
                rowNum: 100000,
                gridview: true,
                hoverrows: false,
                autoencode: true,
                ignoreCase: true,
                viewrecords: true,
                height: "200",
				 
     //   sortname: 'country asc, city',
       // sortorder: 'desc', 
                caption: "Forecast",
                beforeSelectRow: function () {
                    return false;
                },
				loadComplete: function () {
            var table = this;
            setTimeout(function () {
                styleCheckbox(table);                
                updateActionIcons(table);
                updatePagerIcons(table);

            }, 0);
        },
        viewrecords: true,
        rowNum: 8,
        rowList: [8, 16, 24],
        autowidth: true,
        formatter: 'actions',
        formatoptions: {
            keys: true,
            editformbutton: true
        }
		
    };
	
    function getAllSelectOptions() {
        var states = {
            '1': 'Alabama', '2': 'California', '3': 'Florida',
            '4': 'Hawaii', '5': 'London', '6': 'Oxford'
        };

        return states;

    }

    function updatePagerIcons(table) {
        var replacement =
        {
            'ui-icon-seek-first': 'ace-icon fa fa-angle-double-left bigger-140',
            'ui-icon-seek-prev': 'ace-icon fa fa-angle-left bigger-140',
            'ui-icon-seek-next': 'ace-icon fa fa-angle-right bigger-140',
            'ui-icon-seek-end': 'ace-icon fa fa-angle-double-right bigger-140'
        };
        $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function () {
            var icon = $(this);
            var $class = $.trim(icon.attr('class').replace('ui-icon', ''));

            if ($class in replacement) icon.attr('class', 'ui-icon ' + replacement[$class]);
        })
    }

    function styleCheckbox(table) {

        $(table).find('input:checkbox').addClass('ace')
        .wrap('<label />')
        .after('<span class="lbl align-top" />')


        $('.ui-jqgrid-labels th[id*="_cb"]:first-child')
        .find('input.cbox[type=checkbox]').addClass('ace')
        .wrap('<label />').after('<span class="lbl align-top" />');

    }
    function updateActionIcons(table) {

        var replacement =
        {
            'ui-ace-icon fa fa-pencil': 'ace-icon fa fa-pencil blue',
            'ui-ace-icon fa fa-trash-o': 'ace-icon fa fa-trash-o red',
            'ui-icon-disk': 'ace-icon fa fa-check green',
            'ui-icon-cancel': 'ace-icon fa fa-times red'
        };
        $(table).find('.ui-pg-div span.ui-icon').each(function () {
            var icon = $(this);
            var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
            if ($class in replacement) icon.attr('class', 'ui-icon ' + replacement[$class]);
        })

    }


    
		//Do Your Code here
});
	
