cd `dirname $0`
# 如果bmap-three目录不存在，创建目录
if [ ! -d "bmap-three" ]; then
  mkdir bmap-three
fi

# 复制src -> bmap-three
cp -r src bmap-three
cp -r package.json bmap-three

# 如果不存在bmap-three/examples，则创建
if [ ! -d "bmap-three/examples" ]; then
  mkdir bmap-three/examples
fi

cp -r examples/jsm bmap-three/examples
cp -r examples/fonts bmap-three/examples

cp -r build bmap-three
# 进入bmap-three目录
cd bmap-three

# 修改package.json的name字段，重新覆盖原来的文件
sed -i '' 's/"name": "three"/"name": "bmap-three"/g' package.json

# 替换examples目录下所有js文件中的import声明中的three为bmap-three，包含只import部分模块的情况
find examples -name "*.js" | xargs sed -i '' "s/from 'three';/from 'bmap-three';/g"