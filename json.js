angular.module("Payroll",[])
.filter("myfilter",function()
{
    return function(input,option)
    {
        let x="###################################";
        if(isNaN(option) || option=="")
        return  input;
        else
        return x.substring(0,option)+input.substring(option);
    }
})
.filter("myfilter2",function()
{
   return function(input,option)
   { 
     if(isNaN(option) || option==""||option==null)
     return  input;
     else
     return "value changed to " + option;
   }
})
.controller("PayCtrl",function($scope)
{
    var paygrade=[
        {id:111,basic:50000.0,da:10.0,hra:20.0},
        {id:112,basic:55000.0,da:10.0,hra:20.0},
        {id:113,basic:70000.0,da:10.0,hra:20.0},
        {id:114,basic:40000.0,da:10.0,hra:20.0},
        {id:115,basic:53000.0,da:10.0,hra:20.0},
        {id:116,basic:53000.0,da:10.0,hra:20.0}
        
    ];
    $scope.paygrade=paygrade;
    $scope.rowlimit=6;
    var employee=[
        {id:'e01111',name:'Bidura',doj:new Date('July 31,2024'),passcode:'1234567890',dept:'IT'},
        {id:'e02222',name:'Richie',doj:new Date('May 16,2016'),passcode:'abcdefghijk',dept:'HR'},
        {id:'e03333',name:'Madhura',doj:new Date('July 31,2022'),passcode:'1234abcde*',dept:'HR'},
        {id:'e04444',name:'Srijon',doj:new Date('October 2,2023'),passcode:'234567889a',dept:'IT'},
        {id:'e05555',name:'Tom',doj:new Date('July 31,2024'),passcode:'qwcvb12345**',dept:'Marketting'},
        {id:'e06666',name:'Jerry',doj:new Date('July 31,2024'),passcode:'6789234567',dept:'Retail'}
        
    ];
    $scope.employee=employee;
    $scope.rowlimit1=6;



});

