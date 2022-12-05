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

score=0

function getScore {
  me=$1
  elf=$2
  case "$me" in
    X) 
      score=$((score+1)) 
      if [ "$elf" == "C" ]; then
        score=$((score+6))
      elif [ "$elf" == "A" ]; then
        score=$((score+3))
      fi
      ;;
    Y)
      score=$((score+2)) 
      if [ "$elf" == "A" ]; then
        score=$((score+6))
      elif [ "$elf" == "B" ]; then
        score=$((score+3))
      fi
      ;;
    Z) 
      score=$((score+3)) 
      if [ "$elf" == "B" ]; then
        score=$((score+6))
      elif [ "$elf" == "C" ]; then
        score=$((score+3))
      fi
      ;;
    *) echo default ;;
  esac
}

function part1 {
  echo "Part 1"
  echo "======================="
  while read line; do
    elf=`echo $line | cut -d ' ' -f 1`
    me=`echo $line | cut -d ' ' -f 2`
    getScore $me $elf
      
  done < $file
  echo "Score : $score"
}

function part2 {
  echo "Part 2"
  echo "======================="
  while read line; do
    elf=`echo $line | cut -d ' ' -f 1`
    me=`echo $line | cut -d ' ' -f 2`
    realMe=""

    case "$me" in
      X) 
        case "$elf" in
          A) realMe="Z" ;;
          B) realMe="X" ;;
          C) realMe="Y" ;;
          *) echo default ;;
        esac
        getScore $realMe $elf
      ;;
      Y)
        case "$elf" in
          A) realMe="X" ;;
          B) realMe="Y" ;;
          C) realMe="Z" ;;
          *) echo default ;;
        esac
        getScore $realMe $elf
      ;;
      Z)
        case "$elf" in
          A) realMe="Y" ;;
          B) realMe="Z" ;;
          C) realMe="X" ;;
          *) echo default
          ;;
        esac
        getScore $realMe $elf
      ;;
      *) echo default
      ;;
    esac
  done < $file
  echo "Score part 2 : $score"
}

part1
score=0
echo "======================="
part2
