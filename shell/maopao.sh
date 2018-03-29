#arr=($1 $2 $3 $4 $5 $6 $7 $8 $9 $10)
#arr=(8 3 5 1 2 9 10 4 7 6)
arr=("$@")
echo ${arr[@]}

for((i=0;i<${#arr[@]};i++)){
	for((j=0;j<${#arr[@]}-1;j++)){
		if [[ ${arr[j]} -gt ${arr[j+1]} ]]
		then
      			temp=${arr[j]}
			arr[j]=${arr[j+1]}
			arr[j+1]=$temp
		fi
	}
}

echo ${arr[@]}

echo ${arr[@]} > result.txt
