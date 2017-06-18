#!/bin/bash
FILES=`ls`
for i in $FILES
do
echo "Prcoessing image $i ..."
/usr/bin/convert -thumbnail 270x110 $i $i
done
