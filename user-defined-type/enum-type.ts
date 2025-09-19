// enum - store constants; duplicate value is not allowed here 

// enum type: numeric, string, hetergenous

// numeric enum
enum RequestType {
    readData = 2,
    saveData,
    deleteData,
}
// console.log(RequestType);

// strign enum
enum RequestType2 {
    readData = "Read_Data",
    deleteData = "Delete_Data",
}

// console.log(RequestType2.readData);

// hetergenous enum
enum RequestType3 {
    readData = "Read_Data",
    deleteData = "Delete_Data",
    id = 101
}