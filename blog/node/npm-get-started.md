[文档](https://docs.npmjs.com/getting-started/)
## 01 what is npm
It's the world's largest software registry
the website   the registry   the Command Line Interface (CLI)

## 02 install and manage
+ npm gets updated more frequently than Node.js, so be sure that you have the latest version.  `npm -v`
```bash
npm install npm@latest -g
npm install npm@next -g
```
+ Version Manager-----nvm

##　03 How to Prevent Permissions Errors
EACCES error
+ Reinstall with a Node Version Manager
+ Change npm's Default Directory  
+ npx

## 04 Install Local Packages
`npm install <package_name>`
If there is no package.json file in the local directory, the latest version of the package is installed.

If there is a package.json file, npm installs the latest version that satisfies the semver rule  declared in package.json.

## 05 Working with package.json
A package.json must have:name`my-package` version
+ Run a CLI questionnaire `npm init`
+ Create a default package.json  `npm init --yes`
```bash
> npm set init.author.email "wombat@npmjs.com"
> npm set init.author.name "ag_dubs"
> npm set init.license "MIT"
```

+ description  ---search
If there is no description field in the package.json, npm uses the first line of the README.md or README instead
+ customizations---create a custom .npm-init.js in your home directory ~/.npm-init.js.

#### dependencies && devDependencies
```bash
npm install <package_name> --save
npm install <package_name> --save-dev
```

## 06 How to Update Local Packages
```bash
npm update
npm outdated
```

## 07 How to Uninstall Local Packages
```bash
npm uninstall lodash
npm uninstall --save lodash
npm uninstall --save-dev lodash
```

## 09 How to Update Global Packages
```bash
npm update -g <package>
npm outdated -g --depth=0
npm update -g
```
To find out which packages need to be updated


## 13 How to use Semantic Versioning
Patch releases   Minor releases  Major releases
+ Semver for Publishers  
+ Semver for Consumers  `^  ~`
you can specify which kinds of updates your app can accept in the package.json file.

## 19 Understanding Packages and Modules
+ Most npm packages are modules


### 自问自答
+ npm install --save-dev gulp del 为什么要加gulp  可以安装多个库 
