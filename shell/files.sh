#!/bin/sh  
Folder="/etc/"  
for file in ${Folder}/*; do  
    temp_file=`basename $file`  
    echo $temp_file >> files.txt  
done   
