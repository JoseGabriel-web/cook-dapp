set -e

echo
echo "Empezando limpieza del proyecto:"
echo

echo
echo "Eliminando carpeta \"out\"."
echo

rm -rf ./out 

echo
echo "Eliminando carpeta \"neardev\"."
echo 

rm -rf ../../../neardev

echo
echo "Eliminando carpeta \"dist\"."
echo 

rm -rf ./dist

echo
echo "Eliminando carpeta \"cache\"."
echo 

rm -rf ./.cache

echo
echo "Eliminando carpeta \"contract/build\"."
echo 

rm -rf ./contract/build

echo
echo "Estructura del projecto limpio."
echo 
