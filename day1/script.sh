#!/bin/bash

figlet "AOC 2022"

day=$(basename `pwd`)
echo "Today : $day"

file="input.txt"

if [ ! -f $file ]; then
  echo "File does not exist"
  exit 1
fi

n=`cat $file | wc -l`

echo "File exists : $file"
echo "Length : $n"
echo "======================="

sums=""
temp=0

while read line; do
  if [[ $line != "" ]]; then
    temp=$((temp + $line))
  else
    sums+="$temp\n"
    temp=0
  fi
done < $file

output=`echo -e $sums | sort -nr | head -3`

echo -e "Top 3 :\n$output\n"

first=`echo $output | cut -d " " -f 1`
second=`echo $output | cut -d " " -f 2`
third=`echo $output | cut -d " " -f 3`

echo "Sum : $((first + second + third))"
