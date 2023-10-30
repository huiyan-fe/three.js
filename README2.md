# bmap-three
`bmap-three`是`mapv-three`的依赖包，由于`three`库本身有一些变量、功能or钩子不对外暴露，而在开发`mapv-three`引擎时对底层渲染又有强需求，所以不得不魔改`three`的代码。

本质上`bmap-three`和`three`是一模一样的，只不过会多抛出一些钩子而已，不用太在意。

两个库的版本号一致，如果在一些功能上单独使用`bmap-three`有问题，那大概率是`three`本身的问题，需要检查`three`是否更新并修复了，如果是那么可以执行下面的代码同步操作来更新

## 同步three更新
1. 访问 https://github.com/huiyan-fe/three.js
2. 点击`Sync Fork`，然后`Update Branch`，正常情况下应该不会有什么冲突，如果有，找`@李高锋`解决一下冲突
3. 执行`git pull`，本地代码更新为最新的`threejs`代码，然后就可以准备发布了

## 发布
1. 执行编译`npm run build`
2. 执行拷贝脚本`sh bmap-three-all.sh`，把库名从`three`替换成`bmap-three`
3. 进入发布目录`cd bmap-three`，执行`npm publish`发布包
4. **切记，在发布后，`build`目录会和`three`原本仓库的内容不一致而导致冲突。注意千万不要提交`build`目录的内容！**
