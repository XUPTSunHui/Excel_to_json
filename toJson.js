// @Time    : 2018/5/20 14:25
// @Author  : sunhui
// @FileName: toJson.js
// @Software: vscode
// @Project： Excel_to_json


//读取excel文件转换成json数据格式 

// 导入依赖包
// var xlsx = require('xlsx');

// // 读取xlsx文件
// var workbook = xlsx.readFile('Doctor.xlsx');

// // 获取 Excel 中所有表名
// var sheetNameList = workbook.SheetNames;

// // 获取 ['sheet1']
// var worksheet = workbook.Sheets[sheetNameList[0]];

// // 转换为JSON对象数组，第一行数据默认作为对象的key值
// var userArray = xlsx.utils.sheet_to_json(worksheet); 

// //输出JSON数据
// var sum = userArray.length;
// console.log(sum);
// console.log(JSON.stringify(userArray[0])); 

// userArray[0].$class = 'org.xuyuntech.health.Doctor';
// userArray[0] = JSON.stringify(userArray[0]);
// console.log(userArray[0]);

//*******************************************************************************************

// import XLSX from 'xlsx';

var XLSX = require('xlsx');
const workbook = XLSX.readFile('Doctor.xlsx');
const sheetNameList = workbook.SheetNames;
const worksheet = workbook.Sheets[sheetNameList[0]];
const DoctorArray = XLSX.utils.sheet_to_json(worksheet);

DoctorArray[0].$class = 'org.xuyuntech.health.Doctor';
DoctorArray[0] = JSON.stringify(DoctorArray[0]);
console.log(DoctorArray[0]);

// *****************************************************************************************

// var xlsx = require('node-xlsx');
 
// var sheets = xlsx.parse('./Doctor.xlsx');//获取到所有sheets
 
// sheets.forEach(function(sheet){
//     console.log(sheet['name']);
//     for(var rowId in sheet['data']){
//         // console.log(rowId);
//         var row=sheet['data'][rowId];
//         row = JSON.stringify(row);
//         console.log(row);
//     }
// });