cd `dirname $0`

npm run build 

# 如果bmap-three目录不存在，创建目录
if [ ! -d "bmap-three" ]; then
  mkdir bmap-three
fi

cp -r build bmap-three
